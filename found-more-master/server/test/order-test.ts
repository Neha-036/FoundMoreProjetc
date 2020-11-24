import test from "ava"
import * as faker from "faker"
import { NotificationEmail } from "../src/modules/mail-module/emails/notification/type"
import { Brand, OrderItemInput } from "../utils/binding/generated"
import { MoreBinding } from "../utils/binding/more-binding"
import { getEmailBox } from "../utils/fake-email-box"
import { createArticleNumber, createCustomerUserAndApi, createFoundUserAndApi, createPrisma, createRandomAddress, createRandomStores } from "../utils/utils"

const db = createPrisma()

test("create & update", async (t) => {

  // Place the order
  const foundUser = await createFoundUserAndApi()
  const brandName = faker.company.companyName()
  const testUser = await createCustomerUserAndApi(brandName, "store-owner")
  const brand = await db.query.brand({ where: { domain: brandName } }, "{ id stores { id address { id } } }")
  const orderTemplateIds = await createOrderTemplates(foundUser.api, brand)
  const orders = await placeOrders(testUser.api, brand.stores.map((s) => s.id), orderTemplateIds)

  const result = await db.query.order({ where: { id: orders[0].id } }, `{
    id
    status
    orderNumber
    orderedAt
    createdAt
    createdBy { email }
    items {
      orderTemplate { id }
      items {
        orderTemplate { id }
        product {
          properties { id }
        }
        items {
          orderTemplate { id }
          product {
            properties { id }
          }
        }
      }
    }
  }`)

  const orderDateMs = (new Date(result.orderedAt)).getTime()
  const createDateMs = (new Date(result.createdAt)).getTime()
  const currentDateMs = (new Date()).getTime()

  t.is(result.status, "WAITING_FOR_APPROVAL")
  t.is(orders.length, 2)
  t.is(result.items[0].items.length, 2)
  t.is(result.items[0].items[1].items.length, 2)
  t.is(result.createdBy.email, testUser.user.email)
  t.true(Math.abs(orderDateMs - currentDateMs) < 10000) // orderedAt within 10 s
  t.true(Math.abs(createDateMs - currentDateMs) < 10000) // createdAt within 10 s
  t.truthy(result.items[0].items[1].items[1].product)

  // Check that a notification is created when updating status
  const emailBox = await getEmailBox(testUser.user.email)
  await foundUser.api.mutation.updateOrder({
    where: { id: result.id },
    input: { status: "RECEIVED" },
  })
  const result2 = await db.query.order(
    { where: { id: result.id } },
    "{ status }",
  )
  t.is(result2.status, "RECEIVED")
  const defaultEmail = await emailBox.read<NotificationEmail>()
  const notification = await db.query.notification({ where: { id: defaultEmail.notification.id } }, "{ title }")
  t.regex(notification.title, /Status update/)

  // Check that a notification is created when adding comment
  await foundUser.api.mutation.updateOrder({
    where: { id: result.id },
    input: { comments: { create: { content: "This is an example comment", user: { connect: { id: foundUser.user.id } } } } },
  })

  // Check that the comment has been created in the database
  const result3 = await db.query.order(
    { where: { id: result.id } },
    "{ comments { content } }",
  )
  t.is(result3.comments[0].content, "This is an example comment")

  // Read the comment from the notification
  const defaultEmail2 = await emailBox.read<NotificationEmail>()
  const notification2 = await db.query.notification({ where: { id: defaultEmail2.notification.id } }, "{ title }")
  t.is(notification2.title, "New comment")

})

test("Create & update status", async (t) => {

  const foundUser = await createFoundUserAndApi()
  const brandName = faker.company.companyName()
  const testUser = await createCustomerUserAndApi(brandName, "store-owner")
  const brand = await db.query.brand({ where: { domain: brandName } }, "{ id stores { id address { id } } }")
  const orderTemplateIds = await createOrderTemplates(foundUser.api, brand)

  // Place the orders
  const orders = await placeOrders(testUser.api, brand.stores.map((s) => s.id), orderTemplateIds)

  t.is(orders.length, 2)

  // Check that a notification is created when updating status
  const emailBox = await getEmailBox(testUser.user.email)

  await foundUser.api.mutation.updateOrder({
    where: { id: orders[0].id },
    input: {
      status: "CANCELLED",
    },
  })

  const result2 = await db.query.order(
    { where: { id: orders[0].id } },
    "{ status }",
  )

  t.is(result2.status, "CANCELLED")

  const defaultEmail = await emailBox.read<NotificationEmail>()
  const notification = await db.query.notification({ where: { id: defaultEmail.notification.id } }, "{ title }")
  t.regex(notification.title, /Status update/)
})

test("Create & check stock", async (t) => {

  const foundUser = await createFoundUserAndApi()
  const brandName = faker.company.companyName()
  const testUser = await createCustomerUserAndApi(brandName, "store-owner")
  const brand = await db.query.brand({ where: { domain: brandName } }, "{ id stores { id address { id } } }")
  const orderTemplateIds = await createOrderTemplates(foundUser.api, brand, 10, 7)

  // The stock should be 10
  const ots = await db.query.orderTemplates({ where: { id_in: orderTemplateIds } }, "{ stock }")
  t.is(ots[0].stock, 10)

  // Place the orders
  await placeOrders(testUser.api, brand.stores.map((s) => s.id), orderTemplateIds)

  // The order should be placed for 2 stores, so the stock should be 10-2 = 8
  const ots2 = await db.query.orderTemplates({ where: { id_in: orderTemplateIds } }, "{ stock }")
  t.is(ots2[0].stock, 8)

  // Set the contact person
  await db.mutation.updateBrand({
    where: { domain: brandName },
    data: { contactPerson: { connect: { email: foundUser.user.email } } },
  })

  // Place the order again, should trigger notification
  const emailBox = await getEmailBox(foundUser.user.email)

  const orders = await placeOrders(testUser.api, brand.stores.map((s) => s.id), orderTemplateIds)

  const defaultEmail = await emailBox.read<NotificationEmail>()
  const notification = await db.query.notification({ where: { id: defaultEmail.notification.id } }, "{ title }")
  t.regex(notification.title, /out of stock/)

  // The stock should be 6
  const ots3 = await db.query.orderTemplates({ where: { id_in: orderTemplateIds } }, "{ stock }")
  t.is(ots3[0].stock, 6)

  // Cancel the order, should reset the stock
  await foundUser.api.mutation.updateOrder({
    where: { id: orders[0].id },
    input: {
      status: "CANCELLED",
    },
  })

  // The stock should be 7
  const ots4 = await db.query.orderTemplates({ where: { id_in: orderTemplateIds } }, "{ stock }")
  t.is(ots4[0].stock, 7)

  // Undo the cancel
  await foundUser.api.mutation.updateOrder({
    where: { id: orders[0].id },
    input: {
      status: "PENDING",
    },
  })

  // The stock should be 6
  const ots5 = await db.query.orderTemplates({ where: { id_in: orderTemplateIds } }, "{ stock }")
  t.is(ots5[0].stock, 6)
})

test("Query orders", async (t) => {

  const foundUser = await createFoundUserAndApi()
  const brandName = faker.company.companyName()
  const testUser = await createCustomerUserAndApi(brandName, "store-owner")
  const brand = await db.query.brand({ where: { domain: brandName } }, "{ id stores { id address { id } } }")
  const orderTemplateIds = await createOrderTemplates(foundUser.api, brand)
  const orders = await placeOrders(testUser.api, brand.stores.map((s) => s.id), orderTemplateIds)

  t.is(orders.length, 2)

  const query = await testUser.api.query.orders({}, "{ id }")

  t.is(query.length, 2)
})

test("Error & query order", async (t) => {

  const foundUser = await createFoundUserAndApi()
  const brandName = faker.company.companyName()
  const testUser = await createCustomerUserAndApi(brandName, "store-owner")
  const brand = await foundUser.api.query.brand({ where: { domain: brandName } }, "{ id stores { id address { id } } }")
  const orderTemplateIds = await createOrderTemplates(foundUser.api, brand)
  const unprivilegedUser = await createCustomerUserAndApi(faker.company.companyName())

  const storeIds = brand.stores.map((s) => s.id)

  // Override with random store
  const randomStore = await foundUser.api.mutation.createStore({ input: createRandomStores(1)[0] }, "{ id }")
  storeIds[0] = randomStore.id

  // The user does not have all stores in his account nor
  // the privilage to create this order for all these stores in the storesWhere.
  const error1 = await t.throws(placeOrders(testUser.api, storeIds, orderTemplateIds))
  t.regex(error1.message, /E1101/)

  // Place the actual orders as found
  const orders = await placeOrders(foundUser.api, storeIds, orderTemplateIds)

  // Although there are 2 orders,
  // there should only be one connected to this user, because he's the store owner of just 1 store.
  const query = await testUser.api.query.orders({}, "{ id }")
  t.is(query.length, 1)

  // Test that the user cannot update the order for the other store
  const orderForOtherStore = orders.filter((o) => o.id !== query[0].id)
  const error2 = await t.throws(testUser.api.mutation.updateOrder({
    where: { id: orderForOtherStore[0].id },
    input: { status: "DISPATCHED" },
  }, "{ id }"))
  t.regex(error2.message, /E1102/)

  // Test that the user cannot query either
  const error3 = await t.throws(testUser.api.query.order({ where: { id: orderForOtherStore[0].id } }))
  t.regex(error3.message, /E0815/)

  // Test if unprivileged user can not see any orders
  const error4 = await t.throws(unprivilegedUser.api.query.orders({}))
  t.regex(error4.message, /E0816/)
})

async function createOrderTemplates(api: MoreBinding, brand: Brand, stock: number = null, stockWarning: number = null) {

  const result = [] as string[]
  result.push((await api.mutation.createOrderTemplate(
    {
      input: {
        orderable: true,
        brand: { connect: { id: brand.id } },
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
              brand: { connect: { id: brand.id } },
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
              brand: { connect: { id: brand.id } },
              properties: {
                create: {
                  name: "mid",
                },
              },
              children: {
                create: [{
                  brand: { connect: { id: brand.id } },
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
                  brand: { connect: { id: brand.id } },
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
      orderable: true,
      brand: { connect: { id: brand.id } },
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

async function placeOrders(api: MoreBinding, storeIds: string[], orderTemplateIds: string[]) {

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

  const ot = await db.query.orderTemplate({ where: { id: orderTemplateId } }, `{
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
