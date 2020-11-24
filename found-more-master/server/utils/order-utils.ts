import { MoreBinding } from "./binding/more-binding"
import { createArticleNumber, createRandomAddress } from "./utils"
import { OrderItemInput } from "../src/typings"

// This has been copied from order-test.ts, and has not been fully standardized yet
export async function createOrderTemplates(api: MoreBinding, brandId: string, stock: number = null, stockWarning: number = null) {

  const result = [] as string[]
  result.push((await api.mutation.createOrderTemplate(
    {
      input: {
        brand: { connect: { id: brandId } },
        properties: {
          create: {
            name: "Sinterklaas Actie",
          },
        },
        stock,
        stockWarning,
        defaultOrderAmount: 1,
        children: {
          create: [
            {
              brand: { connect: { id: brandId } },
              properties: {
                create: {
                  name: "grote attributen",
                },
              },
              product: {
                create: {
                  properties: {
                    create: {
                      articleNumber: createArticleNumber(),
                    },
                  },
                },
              },
            },
            {
              brand: { connect: { id: brandId } },
              properties: {
                create: {
                  name: "mid",
                },
              },
              children: {
                create: [{
                  brand: { connect: { id: brandId } },
                  properties: {
                    create: {
                      articleNumber: createArticleNumber(),
                      name: "onder1",
                    },
                  },
                  product: {
                    create: {
                      properties: {
                        create: {
                          articleNumber: "2",
                        },
                      },
                    },
                  },
                }, {
                  brand: { connect: { id: brandId } },
                  properties: {
                    create: {
                      articleNumber: createArticleNumber(),
                      name: "onder2",
                    },
                  },
                  product: {
                    create: {
                      properties: {
                        create: {
                          articleNumber: "3",
                        },
                      },
                    },
                  },
                }],
              },
            },
          ],
        },
      },
    },
    "{ id }",
  )).id)

  result.push((await api.mutation.createOrderTemplate({
    input: {
      brand: { connect: { id: brandId } },
      properties: {
        create: {
          name: "OT2",
        },
      },
      defaultOrderAmount: 1,
      stock,
      stockWarning,
    },
  }, "{ id }")).id)

  return result
}

export async function placeOrders(api: MoreBinding, storeIds: string[], orderTemplateIds: string[]) {

  // Build the order trees
  const trees = [] as OrderItemInput[]
  for (const id of orderTemplateIds) {
    trees.push(await getOrderTree(api, id))
  }

  // Place the orders
  return await api.mutation.createOrders({
    orders: storeIds.map((id) => ({
      store: { id },
      address: createRandomAddress(),
      order: trees,
    })),
  })
}

async function getOrderTree(api: MoreBinding, orderTemplateId: string) {
  const ot = await api.query.orderTemplate({ where: { id: orderTemplateId } }, `{
    id
    defaultOrderAmount
    children { id }
  }`)

  const result = {
    orderTemplate: { id: ot.id },
    amount: ot.defaultOrderAmount,
    children: [],
  } as OrderItemInput

  for (const child of ot.children) {
    (result.children as OrderItemInput[]).push(await getOrderTree(api, child.id))
  }

  return result
}