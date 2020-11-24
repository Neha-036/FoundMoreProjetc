import test from "ava"
import * as faker from "faker"
import { createBrandAndStores, createCustomerUserAndApi, createFoundUserAndApi, createPrisma, createUser } from "../utils/utils"

const db = createPrisma()

test("create update", async (t) => {

  const { api } = await createFoundUserAndApi()
  const role = await db.query.roles({ where: { name: "store-owner" } }, "{ id name }")

  const brand = await createBrandAndStores()
  const firstName = faker.name.firstName()
  const lastName = faker.name.lastName()

  const result = await api.mutation.createUser({
    input: {
      email: faker.internet.exampleEmail(firstName + Math.floor(Math.random() * 100 + 1).toString(), lastName),
      firstName,
      lastName,
      brand: { connect: { id: brand.id } },
      role: { connect: { id: role[0].id } },
      password: "",
      stores: { connect: brand.stores.map((s) => ({ id: s.id })) },
    },
  }, "{ id brand { id } }")

  t.is(result.brand.id, brand.id)

  const updatedFirstName = faker.name.firstName()
  const updatedResult = await api.mutation.updateUser({
    where: { id: result.id },
    input: { firstName: updatedFirstName },
  })

  t.not(updatedResult.firstName, result.firstName)
  t.is(updatedResult.firstName, updatedFirstName)
})

test("queries", async (t) => {

  const { user, api } = await createFoundUserAndApi()

  const result1 = await api.query.me()

  t.is(result1.firstName, user.firstName)

  const result2 = await api.query.user({ where: { id: user.id } })

  t.is(result2.firstName, user.firstName)

  const testCompanyName = faker.company.companyName()
  const testUser1 = await createUser(testCompanyName)
  const testUser2 = await createUser(testCompanyName)

  const result3 = await api.query.users({ where: { brand: { domain: testCompanyName } } })

  t.is(result3.length, 2)
  t.true([testUser1.id, testUser2.id].every((u) => !!result3.find((r) => r.id === u)))
})

test("unauthorized update", async (t) => {

  const user1 = await createUser(faker.company.companyName())

  const { api } = await createCustomerUserAndApi(faker.company.companyName())

  const error = await t.throws(
    api.mutation.updateUser({
      where: { id: user1.id },
      input: { firstName: faker.name.firstName() },
    }),
  )

  t.regex(error.message, /E0402/)
})

test("unique constraint", async (t) => {

  const { api } = await createFoundUserAndApi()

  const testUser1 = await createUser()
  const testUser2 = await createUser()
  const email = `${faker.name.firstName()}@example.com`

  await api.mutation.updateUser({
    where: { id: testUser1.id },
    input: { email },
  })

  const error = await t.throws(api.mutation.updateUser({
    where: { id: testUser2.id },
    input: { email },
  }))

  t.regex(error.message, /E0403/)
})
