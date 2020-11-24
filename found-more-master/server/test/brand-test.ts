import test from "ava"
import * as faker from "faker"
import { createBrandAndStores, createCustomerUserAndApi, createFoundUserAndApi } from "../utils/utils"

test("create and update", async (t) => {

  const { api } = await createFoundUserAndApi()

  const testCompanyDomain = faker.company.companyName()
  const result = await api.mutation.createBrand(
    {
      input: {
        domain: testCompanyDomain,
        name: testCompanyDomain,
        primaryColor: "red",
        secondaryColor: "ffffff",
        textColor: "purple",
      },
    },
    "{ id domain }",
  )

  t.is(result.domain, testCompanyDomain)

  const updatedResult = await api.mutation.updateBrand(
    {
      where: { id: result.id },
      input: {
        primaryColor: "red",
      },
    },
    "{ primaryColor }",
  )

  t.is(updatedResult.primaryColor, "red")
})

test("queries", async (t) => {

  const brandName = faker.company.companyName()
  const testBrand1 = await createBrandAndStores(brandName)
  const { api } = await createCustomerUserAndApi(brandName, "admin")

  const result1 = await api.query.brand({ where: { id: testBrand1.id } }, "{ id }")

  t.is(result1.id, testBrand1.id)

  const result2 = await api.query.brands({ where: { id: testBrand1.id } }, "{ id }")
  t.is(result2.length, 1)
  t.true(!!result2.find((r) => r.id === testBrand1.id))
})
