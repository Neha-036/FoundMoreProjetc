import test from "ava"
import * as faker from "faker"
import { getNextOrderNumberByContext } from "../src/modules/order-number-module"
import { getStoreIds } from "../src/modules/user-module"
import { createBrandAndStores, createContext, createCustomerUserAndApi } from "../utils/utils"

test(`test1`, async (t) => {

  const userBrand = await createBrandAndStores(faker.company.companyName(), 20) // create brand with 20 stores
  const testUser = await createCustomerUserAndApi(userBrand.name, "store-owner")
  const ctxUser = await createContext(testUser.user.id)
  const storeIds = await getStoreIds(ctxUser)
  const result = await getNextOrderNumberByContext(ctxUser, { id: storeIds[15] })

  // If the getNextOrderNumber is correct it will return a string containing 16 characters YYMM-SSS-OOO
  // console.log(result)
  t.is(result.length, 12)
  t.is(result.split("-").length, 3)
})
