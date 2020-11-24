
import test from "ava"
import * as faker from "faker"
import { getBrandId, getCoworkerIds, getStoreIds, hasBrand, hasNotification, hasOrder, hasOrderTemplate, hasPermission, hasStore, hasStores, isCoworker, isMe } from "../src/modules/user-module"
import { StoreWhereInput, UserWhereUniqueInput } from "../utils/binding/generated"
import { MoreBinding } from "../utils/binding/more-binding"
import { createBrandAndStores, createContext, createCustomerUserAndApi, createFoundUserAndApi, createPrisma, createRandomAddress, createRandomStores, createUser } from "../utils/utils"

const db = createPrisma()

test("hasPermission with all permissions", async (t) => {

  // Has all the permissions
  const foundUser = await createFoundUserAndApi()
  const ctxFound = await createContext(foundUser.user.id)
  const result1 = await hasPermission(ctxFound, "ALL", "ALL")
  t.true(result1)

  // Check single permission when having all
  const result2 = await hasPermission(ctxFound, "CREATE_OWN", "BRAND")
  t.true(result2)
})

test("hasPermission with some permissions", async (t) => {

  // Does not have the ALL action
  const testUser1Company = faker.company.companyName()
  const storeManager = await createCustomerUserAndApi(testUser1Company, "store-owner")
  const ctxStoreManager = await createContext(storeManager.user.id)
  const result3 = await hasPermission(ctxStoreManager, "VIEW_ALL", "BRAND")
  t.false(result3)
})

test("hasPermission with no permissions", async (t) => {

  // Has no permissions in the role
  const unprivilegedUser = await createUser()
  const ctxUnprivilegedUser = await createContext(unprivilegedUser.id)
  const result4 = await hasPermission(ctxUnprivilegedUser, "CREATE_OWN", "BRAND")
  t.false(result4)
})

test("hasStore(s)", async (t) => {

  // hasStore correct test
  const testUser1Company = faker.company.companyName()
  const testUser1 = await createCustomerUserAndApi(testUser1Company, "store-owner")
  const ctxTestUser1 = await createContext(testUser1.user.id)
  const storesTestUser1 = await testUser1.api.query.stores({}, "{ id }")
  const hasStoreTestUser1 = await hasStore(ctxTestUser1, { id: storesTestUser1[0].id })
  t.true(hasStoreTestUser1)

  // hasStores correct test
  const storeWhereInput = { OR: storesTestUser1.map((store) => ({ id: store.id } as StoreWhereInput)) }
  const hasStoresTestUser1 = await hasStores(ctxTestUser1, storeWhereInput)
  t.true(hasStoresTestUser1)

  // hasStores with single input correct test
  const singleStoreWhereInput = { id: storesTestUser1[0].id } as StoreWhereInput
  const singlehasStorestestUser1 = await hasStores(ctxTestUser1, singleStoreWhereInput)
  t.true(singlehasStorestestUser1)

  // hasStore wrong test
  const testUser2Company = faker.company.companyName()
  const testUser2 = await createCustomerUserAndApi(testUser2Company, "store-owner")
  const ctxTestUser2 = await createContext(testUser2.user.id)
  const hasStoreTestUser2 = await hasStore(ctxTestUser2, { id: storesTestUser1[0].id })
  t.false(hasStoreTestUser2)

  // hasStores wrong test
  const hasStoresTestUser2 = await hasStores(ctxTestUser2, storeWhereInput)
  t.false(hasStoresTestUser2)

  // hasStores wrong test with one incorrect Store
  const foundUser = await createFoundUserAndApi()
  const wrongStore = await foundUser.api.mutation.createStore({ input: createRandomStores(1)[0] }, "{ id }")
  storeWhereInput.OR.push({ id: wrongStore.id })
  const hasStores2testUser1 = await hasStores(ctxTestUser1, storeWhereInput)
  t.false(hasStores2testUser1)
})

test("hasBrand", async (t) => {

  // hasBrand correct test
  const testUser1 = await createCustomerUserAndApi()
  const ctxTestUser1 = await createContext(testUser1.user.id)
  const testUser1Brand = await testUser1.api.query.user({ where: { id: testUser1.user.id } }, "{ brand { id } }")
  const result1 = await hasBrand(ctxTestUser1, { id: testUser1Brand.brand.id })
  t.true(result1)

  // hasBrand wrong test
  const differentBrand = await createBrandAndStores()
  const result2 = await hasBrand(ctxTestUser1, { id: differentBrand.id })
  t.false(result2)
})

test("hasNotification", async (t) => {

  const testUser1Company = faker.company.companyName()
  const testUser1 = await createCustomerUserAndApi(testUser1Company, "store-owner")
  const ctxTestUser1 = await createContext(testUser1.user.id)

  const notification = await db.mutation.createNotification({
    data: {
      content: faker.lorem.paragraph(),
      title: faker.lorem.word(),
      user: { connect: { id: testUser1.user.id } },
    },
  }, "{ id }")

  const result1 = await hasNotification(ctxTestUser1, { id: notification.id })

  t.true(result1)
})

test("hasOrderTemplate", async (t) => {

  const foundUser = await createFoundUserAndApi()

  // hasOrderTemplate correct test
  const testUser1 = await createCustomerUserAndApi()
  const ctxTestUser1 = await createContext(testUser1.user.id)
  const testUser1Brand = await testUser1.api.query.user({ where: { id: testUser1.user.id } }, "{ brand { id } }")
  const orderTemplate = await createOrderTemplates(foundUser.api, testUser1Brand.brand.id)
  const result1 = await hasOrderTemplate(ctxTestUser1, { id: orderTemplate.id })
  t.true(result1)

  // hasOrderTemplate wrong test
  const testUser2 = await createCustomerUserAndApi()
  const ctxTestUser2 = await createContext(testUser2.user.id)
  const result2 = await hasOrderTemplate(ctxTestUser2, { id: orderTemplate.id })
  t.false(result2)
})

test("hasOrder", async (t) => {

  const foundUser = await createFoundUserAndApi()

  // hasOrder correct test
  const testUser1Company = faker.company.companyName()
  const testUser1 = await createCustomerUserAndApi(testUser1Company, "store-owner")
  const ctxTestUser1 = await createContext(testUser1.user.id)
  const testUser1Brand = await testUser1.api.query.user({ where: { id: testUser1.user.id } }, "{ brand { id } stores { id address { id } } }")
  const orderTemplate = await createOrderTemplates(foundUser.api, testUser1Brand.brand.id)
  const order = (await testUser1.api.mutation.createOrders({
    orders: testUser1Brand.stores.map((s) => ({
      store: { id: s.id },
      address: createRandomAddress(),
      order: [{ amount: 1, orderTemplate: { id: orderTemplate.id } }],
    })),
  }))[0]
  const result1 = await hasOrder(ctxTestUser1, { id: order.id })
  t.true(result1)

  // hasOrder wrong test
  const testUser2 = await createCustomerUserAndApi()
  const ctxTestUser2 = await createContext(testUser2.user.id)
  const result2 = await hasOrder(ctxTestUser2, { id: order.id })
  t.false(result2)
})

test("isMe", async (t) => {

  // isMe correct test
  const testUser1 = await createCustomerUserAndApi()
  const ctxTestUser1 = await createContext(testUser1.user.id)
  const result1 = await isMe(ctxTestUser1, { id: testUser1.user.id })
  t.true(result1)

  // isMe wrong test
  const testUser2 = await createCustomerUserAndApi()
  const ctxTestUser2 = await createContext(testUser2.user.id)
  const result2 = await isMe(ctxTestUser2, { id: testUser1.user.id })
  t.false(result2)
})

test("isCoworker", async (t) => {

  // isCoworker correct test
  const testUser1Company = faker.company.companyName()
  const testUser1 = await createCustomerUserAndApi(testUser1Company)
  const ctxTestUser1 = await createContext(testUser1.user.id)
  const testUser2 = await createCustomerUserAndApi(testUser1Company)
  const result1 = await isCoworker(ctxTestUser1, { id: testUser2.user.id })
  t.true(result1)

  // isCoworker wrong test
  const testUser3 = await createCustomerUserAndApi()
  const ctxTestUser3 = await createContext(testUser3.user.id)
  const result2 = await isCoworker(ctxTestUser3, { id: testUser1.user.id })
  t.false(result2)

  // isCoworker multiple people
  const where1 = { OR: [{ id: testUser1.user.id }, { id: testUser2.user.id }, { id: testUser3.user.id }] } as UserWhereUniqueInput
  const result3 = await isCoworker(ctxTestUser3, where1)
  t.true(result3)

  // isCoworker multiple people
  const where2 = { AND: [{ id: testUser1.user.id }, { id: testUser2.user.id }, { id: testUser3.user.id }] } as UserWhereUniqueInput
  const result4 = await isCoworker(ctxTestUser3, where2)
  t.false(result4)
})

test("getBrandId", async (t) => {

  // getBrandId correct test
  const testUser1Company = faker.company.companyName()
  const testUser1 = await createCustomerUserAndApi(testUser1Company)
  const ctxTestUser1 = await createContext(testUser1.user.id)
  const testUser1Brand = await testUser1.api.query.user({ where: { id: testUser1.user.id } }, "{ brand { id } }")
  const result1 = await getBrandId(ctxTestUser1)
  t.is(result1, testUser1Brand.brand.id)

  // getBrandId wrong te
  const testUser2Company = faker.company.companyName()
  const testUser2 = await createCustomerUserAndApi(testUser2Company)
  const ctxTestUser2 = await createContext(testUser2.user.id)
  const result2 = await getBrandId(ctxTestUser2)
  t.not(result2, testUser1Brand.brand.id)
})

test("getStoreIds", async (t) => {

  // getStoreIds correct test
  const testUser1Company = faker.company.companyName()
  const testUser1 = await createCustomerUserAndApi(testUser1Company, "store-owner")
  const ctxTestUser1 = await createContext(testUser1.user.id)
  const storesTestUser1 = (await testUser1.api.query.stores({}, "{ id }")).map((s) => s.id).sort()
  const result1 = (await getStoreIds(ctxTestUser1))
  t.deepEqual(result1, storesTestUser1)

  // getStoreIds wrong test
  const testUser2Company = faker.company.companyName()
  const testUser2 = await createCustomerUserAndApi(testUser2Company, "store-owner")
  const ctxTestUser2 = await createContext(testUser2.user.id)
  const result2 = (await getStoreIds(ctxTestUser2))
  t.notDeepEqual(result2.sort(), storesTestUser1.sort())
})

test("getCoworkerIds", async (t) => {

  // getCoworkerIds correct test single
  const testUser1Company = faker.company.companyName()
  const testUser1 = await createCustomerUserAndApi(testUser1Company)
  const ctxTestUser1 = await createContext(testUser1.user.id)
  const coworkers = [testUser1.user.id]
  const result1 = await getCoworkerIds(ctxTestUser1)
  t.deepEqual(result1.sort(), coworkers.sort())

  // getCoworkerIds correct test multiple
  const testUser2 = await createCustomerUserAndApi(testUser1Company)
  coworkers.push(testUser2.user.id)
  const result2 = await getCoworkerIds(ctxTestUser1)
  t.deepEqual(result2.sort(), coworkers.sort())

  // getCoworkerIds wrong test multiple
  const testUser3 = await createCustomerUserAndApi()
  coworkers.push(testUser3.user.id)
  const result3 = await getCoworkerIds(ctxTestUser1)
  t.notDeepEqual(result3.sort(), coworkers.sort())
})

async function createOrderTemplates(api: MoreBinding, brandId: string) {

  return await api.mutation.createOrderTemplate(
    {
      input: {
        brand: { connect: { id: brandId } },
        properties: {
          create: {
            articleNumber: "39gn349hf",
            name: "Sinterklaas Actie",
          },
        },
        children: {
          create: [{
            brand: { connect: { id: brandId } },
            properties: {
              create: {
                articleNumber: "39gn34970f",
                name: "grote attributen",
              },
            },
            product: {
              create: {
                properties: {
                  create: {
                    articleNumber: "1",
                  },
                },
              },
            },
          }, {
            brand: { connect: { id: brandId } },
            properties: {
              create: {
                articleNumber: "39gn34870f",
                name: "mid",
              },
            },
            children: {
              create: [{
                brand: { connect: { id: brandId } },
                properties: {
                  create: {
                    articleNumber: "39gn34970f",
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
                    articleNumber: "39gn342370f",
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
          }],
        },
      },
    },
    "{ id }",
  )
}
