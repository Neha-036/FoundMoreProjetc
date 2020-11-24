import { Prisma, ProductCategoryCreateInput, ProductCreateInput } from "../../generated/prisma"
import { TableRow } from "../excel-module"
import { ILogger } from "../logger-module"
import { getPropertiesCreateInput, s, sn } from "./utils"

interface Relations {
  ownConnector: string
  parentConnector?: string
  type: string
  ownData?: any
}

export async function importProducts(db: Prisma, logger: ILogger, productRows: TableRow[], domain: string) {

  // ArticleNumber SystemType ParentProductCategory

  const relationList = [] as Relations[]

  for (const row of productRows) {
    if (row.SystemType === "Product") {
      relationList.push({
        ownConnector: s(row.ArticleNumber),
        parentConnector: s(row.ParentProductCategory),
        type: "Product",
        ownData: getProductCreateInput(row, domain),
      })
    } else {
      relationList.push({
        ownConnector: s(row.ArticleNumber),
        type: "ProductCategory",
        parentConnector: s(row.ParentProductCategory),
        ownData: getProductCategoryCreateInput(row, domain),
      })
    }
  }

  const parents = relationList.filter((r) => !r.parentConnector)

  for (const p of parents) {
    const data = recursiveSearchChildProducts(p, relationList).data
    await db.mutation.createProductCategory({ data })
  }

  // Below is to check only

  const categories = await db.query.productCategories({ where: { brand: { domain } } }, "{ id }")
  logger.log(`The excel has ${productRows.filter((p) => p.SystemType !== "Product").length} product categories`)
  logger.log(`We imported ${categories.length} product categories`)

  const products = await db.query.products({ where: { brand: { domain } } }, "{ id }")
  logger.log(`The excel has ${productRows.filter((p) => p.SystemType === "Product").length} products`)
  logger.log(`We imported ${products.length} products`)
}

function getProductCategoryCreateInput(row: TableRow, domain: string) {
  return {
    brand: { connect: { domain } },
    note: sn(row.Note),
    properties: { create: getPropertiesCreateInput(row) },
  } as ProductCategoryCreateInput
}

function getProductCreateInput(row: TableRow, domain: string) {

  // Stock Note

  return {
    stock: row.Stock,
    brand: { connect: { domain } },
    note: row.Note,
    properties: { create: getPropertiesCreateInput(row) },
  } as ProductCreateInput
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
