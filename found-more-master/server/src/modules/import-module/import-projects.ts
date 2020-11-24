import { existsSync } from "fs"
import { join } from "path"
import { FilterOptionsCreateOneInput, OrderTemplate, OrderTemplateCreateInput, Prisma, Product } from "../../generated/prisma"
import { TableRow } from "../excel-module"
import { ILogger } from "../logger-module"
import { b, getPropertiesCreateInput, n, s, sn, uploadAndInsertFile } from "./utils"

interface Relations {
  ownConnector: string
  parentConnector?: string
  type: string
  ownData?: any
}

export async function importProjects(db: Prisma, logger: ILogger, orderTemplateRows: TableRow[], domain: string, dir: string) {

  // ArticleNumber ParentProject

  const products = (await db.query.products({ where: { brand: { domain } } }, "{ id properties { name articleNumber } } "))
  const relationList = [] as Relations[]

  for (const row of orderTemplateRows) {
    relationList.push({
      ownConnector: s(row.ArticleNumber),
      parentConnector: s(row.ParentProject),
      type: "OrderTemplate",
      ownData: getOrderTemplateCreateInput(row, domain, products),
    })
  }

  const parentRelations = relationList.filter((r) => !r.parentConnector)
  const parents = []

  // Note: The assumption is that we don't have more than 4 levels
  for (const p of parentRelations) {
    parents.push(await db.mutation.createOrderTemplate({
      data: recursiveSearchChildProducts(p, relationList).data,
    }, `{
      id properties { articleNumber }
      children {
        id properties { articleNumber }
        children {
          id properties { articleNumber }
          children {
            id properties { articleNumber }
            children {
              id properties { articleNumber }
            }
          }
        }
      }
    }`))
  }

  // Finally - add the images
  await importProjectImages(db, parents, orderTemplateRows, dir)

  // Below is to check only, we have a reduce to determine the amount of order templates in the input
  const ots = await db.query.orderTemplates({ where: { brand: { domain } } }, "{ id }")
  const inputOts = orderTemplateRows.reduce((sum, row) => {
    // Count the number of products that should be created, add 1 as the node itself
    let i = 1
    while (row[`Amount${i}`]) i++
    // If i == 2, we know that we connect the product directly
    if (i === 2) i = 1
    return i + sum
  }, 0)
  logger.log(`The excel has ${orderTemplateRows.length} order template rows with a total of ${inputOts} order templates`)
  logger.log(`We imported ${ots.length} order templates`)
}

function findChildOT(articleNumber: string, parent: OrderTemplate) {

  // This == is needed because the strings are not equal for some reason... this could be due to Excel layout styling
  // tslint:disable-next-line:triple-equals
  if (parent.properties.articleNumber == articleNumber) {
    return parent
  }

  if (parent.children) {
    for (const child of parent.children) {
      const found = findChildOT(articleNumber, child)
      if (found) return found
    }
  }

  return null
}

export async function importProjectImages(db: Prisma, parentOTs: OrderTemplate[], orderTemplateRows: TableRow[], dir: string) {

  // ArticleNumber Image

  // Update the OTs with images:str
  for (const row of orderTemplateRows) {

    const imagePathv = row.Image ? join(dir, row.Image) : null
    const imagePath = existsSync(imagePathv) ? imagePathv : null

    if (imagePath) {

      const fileId = await uploadAndInsertFile(db, row.Image, dir)

      // logger.log("  Uploaded: " + imagePath)

      for (const parent of parentOTs) {
        const found = findChildOT(s(row.ArticleNumber), parent)
        if (found) {
          await db.mutation.updateOrderTemplate({ where: { id: found.id }, data: { properties: { update: { images: { connect: { id: fileId } } } } } })
        }
      }
    }
  }
}

function getOrderTemplateCreateInput(row: TableRow, domain: string, products: Product[]) {

  // Orderable Note

  const children = getOrderTemplateProducts(row, domain, products)

  if (children.length === 0) {

    // No children, nothing to worry
    return {
      orderable: b(row.Orderable),
      note: sn(row.Note),
      brand: { connect: { domain } },
      defaultOrderAmount: 1,
      properties: { create: getPropertiesCreateInput(row) },
      filterOptions: getFilterOptionsCreateInput(row),
    } as OrderTemplateCreateInput

  } else if (children.length === 1) {

    // Exactly one product, add the product
    return {
      orderable: b(row.Orderable),
      note: sn(row.Note),
      brand: { connect: { domain } },
      defaultOrderAmount: children[0].defaultOrderAmount,
      properties: children[0].properties,
      filterOptions: getFilterOptionsCreateInput(row),
      product: children[0].product,
    } as OrderTemplateCreateInput

  } else {

    // For each product, we create a ordertemplate child
    return {
      orderable: b(row.Orderable),
      note: sn(row.Note),
      brand: { connect: { domain } },
      defaultOrderAmount: 1,
      children: { create: children },
      properties: { create: getPropertiesCreateInput(row) },
      filterOptions: getFilterOptionsCreateInput(row),
    } as OrderTemplateCreateInput
  }
}

function getFilterOptionsCreateInput(row: TableRow) {

  // FilterStoreType FilterType FilterLanguage FilterCurrency

  // Don't create filter options when not needed
  if (!row.FilterType && !row.FilterStoreType && !row.FilterLanguage && !row.FilterCurrency) return {}

  return {
    create: {
      type: getFilterType(row.FilterType),
      language: row.FilterLanguage ? { connect: { isoCode: s(row.FilterLanguage) } } : {},
      storeType: row.FilterStoreType ? s(row.FilterStoreType) : null,
      currency: row.FilterCurrency ? s(row.FilterCurrency) : null,
    },
  } as FilterOptionsCreateOneInput
}

function getFilterType(type: string) {

  if (!type) return undefined

  const str = type.trim().toLowerCase()

  if (!str) return undefined
  if (str.includes("all")) return "ALL"

  const zero = str.includes("zero")
  const one = str.includes("one")
  const more = str.includes("more")

  if (one && more) return "ONE_OR_MORE"
  if (zero && more) return "ZERO_OR_MORE"
  if (zero && one) return "ZERO_OR_ONE"
  if (one) return "ONE"

  return undefined
}

function getOrderTemplateProducts(row: TableRow, domain: string, products: Product[]) {
  const result = [] as OrderTemplateCreateInput[]
  let i = 1

  while (row[`Product${i}`]) {

    // tslint:disable-next-line:triple-equals
    const product = products.find((p) => p.properties.articleNumber == s(row[`Product${i}`]))
    if (product) {
      result.push({
        properties: { create: { name: product.properties.name, articleNumber: s(row.ArticleNumber) } },
        brand: { connect: { domain } },
        defaultOrderAmount: n(row[`Amount${i}`]),
        product: { connect: { id: product.id } },
      })
    }
    i++
  }
  return result
}

function recursiveSearchChildProducts(r: Relations, allRelations: Relations[]) {

  const result = r.ownData

  const children = allRelations.filter((child) => child.parentConnector === r.ownConnector)

  for (const child of children) {

    if (child.type === "Product") {

      if (!result.products) result.products = { create: [] }

      const resChild = recursiveSearchChildProducts(child, allRelations)

      if (resChild) result.products.create.push(resChild.relation.ownData)

    } else {

      if (!result.children) result.children = { create: [] }

      const resChild = recursiveSearchChildProducts(child, allRelations)

      if (resChild) result.children.create.push(resChild.relation.ownData)
    }
  }

  return { data: result, relation: r }
}
