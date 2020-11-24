import test from "ava"
import * as faker from "faker"
import { createBrandAndStores, createCustomerUserAndApi, createFoundUserAndApi, createPrisma } from "../utils/utils"

const db = createPrisma()

test("create and update", async (t) => {

  const { api } = await createFoundUserAndApi()

  const result = await api.mutation.createStore(
    {
      input: {
        phone: faker.phone.phoneNumber(),
        name: faker.company.companyName(),
      },
    },
    "{ id brand { domain } }",
  )

  t.is(result.brand.domain, "found")

  const website = faker.internet.url()

  const updatedResult = await api.mutation.updateStore(
    {
      where: { id: result.id },
      input: { website },
    },
    "{ website }",
  )

  t.is(updatedResult.website, website)
})

test("delete store", async (t) => {

  const foundUser = await createFoundUserAndApi()
  const brandName = faker.company.companyName()
  await createCustomerUserAndApi(brandName, "store-owner")
  const brand = await db.query.brand({ where: { domain: brandName } }, "{ id stores { id } }")
  const storesIds = brand.stores.map((s) => s.id)

  // Check if the stores have not been deleted
  t.is((await db.query.stores({ where: { id_in: storesIds, deletedAt: null } }, '{ id }')).length, storesIds.length)

  // Delete the stores
  for (const storeId of storesIds) {
    await foundUser.api.mutation.deleteStore({ where: { id: storeId } })
  }

  // Check if the stores have been deleted
  t.is((await db.query.stores({ where: { id_in: storesIds, deletedAt_not: null } }, '{ id }')).length, storesIds.length)
})

test("queries", async (t) => {

  const brandName = faker.company.companyName()
  await createBrandAndStores(brandName, 4)
  await createBrandAndStores(faker.company.companyName(), 2)
  const { api } = await createCustomerUserAndApi(brandName, "store-owner")

  const result1 = await api.query.stores({}, "{ id }")

  t.is(result1.length, 4)

  const result2 = await api.query.store({ where: { id: result1[0].id } })
  t.truthy(result2)
})
