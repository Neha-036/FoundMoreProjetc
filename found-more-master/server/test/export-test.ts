import test from "ava"
import * as faker from "faker"
import { createCustomerUserAndApi } from "../utils/utils"

test("Export returns an existing file", async (t) => {

  const domain = faker.internet.domainWord() + faker.random.number()

  // const { api } = await createFoundUserAndApi()
  const { api } = await createCustomerUserAndApi(domain, "store-owner")

  const result = await api.mutation.brandExport({ where: { domain}, type: "found" }, "{ location originalName id }")

  t.truthy(result.location)
  t.truthy(result.originalName)
  t.truthy(result.id)
})
