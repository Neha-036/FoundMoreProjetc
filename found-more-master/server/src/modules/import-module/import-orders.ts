import { OrderCreateInput, OrderItemCreateInput, OrderItemCreateManyInput, OrderTemplate, Prisma } from "../../generated/prisma"
import { TableRow } from "../excel-module"
import { ILogger } from "../logger-module"
import { getNextOrderNumber } from "../order-number-module"
import { n, s, sn } from "./utils"

export async function importOrders(db: Prisma, logger: ILogger, orderList: TableRow[], domain: string) {

  // StoreNumber ArticleNumberOld Country CountryCode City Street Number Addition PostalCode Status CreatedAt

  const stores = (await db.query.stores({
    where: { brand: { domain } },
  }, "{ id storeNumber }"))

  const ots = await db.query.orderTemplates({
    where: {
      parent: null,
      brand: { domain },
    },
  }, `{
    properties { articleNumber name }
    children {
      id
      properties { articleNumber }
      children {
        id
        properties { articleNumber }
        children {
          id
          properties { articleNumber }
        }
      }
    }
  }`)

  let counter = 0
  let rowNumber = 1

  for (const row of orderList) {

    rowNumber++

    const store = stores.find((st) => st.storeNumber === s(row.StoreNumber))

    if (!store) {
      logger.warn("Unable to find store: " + row.StoreNumber + " at row: " + rowNumber)
      continue
    }

    counter++

    const order = {
      orderedAt: new Date(row.OrderedAt || row.CreatedAt),
      note: sn(row.Note),
      address: {
        create: {
          country: s(row.Country),
          countryCode: s(row.CountryCode),
          city: s(row.City),
          street: s(row.Street),
          number: s(row.Number),
          addition: sn(row.Addition),
          postalCode: s(row.PostalCode),
        },
      },
      status: s(row.Status),
      items: { create: [] },
      store: { connect: { id: store.id } },
      orderNumber: getNextOrderNumber(domain, store.id),
    } as OrderCreateInput

    const items = order.items.create as OrderItemCreateInput[]

    let i = 1

    while (row[`ArticleNumber${i}`]) {

      const orderedOrderTemplateId = searchMultipleByArticleNumber(ots, s(row[`ArticleNumber${i}`]))
      if (orderedOrderTemplateId) {

        // If this is an ot connected directly to the product, skip search and add the product
        const { product } = await db.query.orderTemplate({ where: { id: orderedOrderTemplateId } }, "{ product { id } }")

        items.push({
          name: s(row[`ArticleNumber${i}`]),
          amount: n(row[`Amount${i}`]),
          orderTemplate: {
            connect: { id: orderedOrderTemplateId },
          },
          items: product ? null : await createChildrenFromCache(db, orderedOrderTemplateId),
          product: product ? { connect: { id: product.id } } : null,
        })
      }
      i++
    }

    // logger.log(`Created: ${order.orderNumber} for ${store.storeNumber}`)

    await db.mutation.createOrder({ data: order })
  }

  logger.log(`The excel has ${orderList.length} orders`)
  logger.log(`We imported ${counter} orders`)
}

function searchMultipleByArticleNumber(ots: OrderTemplate[], articleNumber?: string) {
  for (const ot of ots) {
    const res = searchByArticleNumber(ot, articleNumber)
    if (res) return res
  }
  return null
}

function searchByArticleNumber(ot: OrderTemplate, articleNumber: string) {

  if (ot.properties) {
    // tslint:disable-next-line:triple-equals
    if (ot.properties.articleNumber == articleNumber) {
      return ot.id
    }
  }

  if (ot.children) {
    for (const child of ot.children) {

      const resChild = searchByArticleNumber(child, articleNumber)

      if (resChild) return resChild
    }
  }

  return null
}

// To optimize order creation, we hava a cache for the children of order templates
const cache = {}
async function createChildrenFromCache(db: Prisma, orderTemplateId: string) {

  if (!cache[orderTemplateId]) {
    cache[orderTemplateId] = await createChildren(db, orderTemplateId)
  }

  return cache[orderTemplateId]
}

async function createChildren(db: Prisma, orderTemplateId: string) {

  const ot = await db.query.orderTemplate(
    { where: { id: orderTemplateId } },
    "{ children { id defaultOrderAmount properties { name price currency } product { id } } }",
  )

  if (ot.children) {

    const orderItems = [] as OrderItemCreateInput[]

    for (const child of ot.children) {

      orderItems.push({
        name: child.product ? null : child.properties.name,
        amount: child.defaultOrderAmount,
        price: child.product ? null : child.properties.price,
        currency: child.product ? null : child.properties.currency,
        product: child.product ? { connect: { id: child.product.id } } : {},
        orderTemplate: { connect: { id: orderTemplateId } },
        items: await createChildren(db, child.id),
      })
    }
    return { create: orderItems } as OrderItemCreateManyInput
  }

  return {} as OrderItemCreateManyInput
}
