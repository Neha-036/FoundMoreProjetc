import test from "ava"
import * as faker from "faker"
import { createFoundUserAndApi, createPrisma } from "../utils/utils"

const db = createPrisma()

test("create and update", async (t) => {

  const { api } = await createFoundUserAndApi()
  const companyName = faker.company.companyName()
  const address = {
    street: faker.address.streetName(),
    city: faker.address.city(),
    postalCode: faker.address.zipCode(),
    countryCode: faker.address.countryCode(),
  }

  const result = await api.mutation.createSupplier(
    {
      input: {
        name: companyName,
        address: {
          create: {
            ...address,
          },
        },
      },
    },
    "{ id name }",
  )

  t.is(result.name, companyName)

  const street = faker.address.streetName()

  const updatedResult = await api.mutation.updateSupplier(
    {
      where: { id: result.id },
      input: {
        address: {
          update: { street },
        },
      },
    },
    "{ address { street } }",
  )

  t.is(updatedResult.address.street, street)
})

test("queries", async (t) => {

  const { api } = await createFoundUserAndApi()
  const address = {
    street: faker.address.streetName(),
    city: faker.address.city(),
    postalCode: faker.address.zipCode(),
    countryCode: faker.address.countryCode(),
  }

  const productName = faker.commerce.productName()

  const supplier = await db.mutation.createSupplier(
    {
      data: {
        name: faker.company.companyName(),

        address: {
          create: {
            ...address,
          },
        },
        products: {
          create: {
            name: productName,
          },
        },
      },
    },
    "{ id }",

  )

  const address2 = {
    street: faker.address.streetName(),
    city: faker.address.city(),
    postalCode: faker.address.zipCode(),
    countryCode: faker.address.countryCode(),
  }

  const result1 = await api.query.supplier({ where: { id: supplier.id } }, "{ id address { street } }")
  t.is(result1.address.street, address.street)

  await db.mutation.createSupplier(
    {
      data: {
        name: faker.company.companyName(),
        address: {
          create: {
            ...address2,
          },
        },
        products: {
          create: {
            name: productName,
          },
        },
      },
    },
    "{ id }",
  )

  const result2 = await api.query.suppliers({ where: { products_some: { name: productName } } })
  t.is(result2.length, 2)
})
