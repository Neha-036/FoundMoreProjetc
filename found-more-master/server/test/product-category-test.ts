import test from "ava"
import * as faker from "faker"
import { createBrandAndStores, createFoundUserAndApi, createPrisma } from "../utils/utils"

const db = createPrisma()

test("create via parent connect", async (t) => {

  const { api } = await createFoundUserAndApi()

  const parent = await api.mutation.createProductCategory(
    {
      input: {
        properties: {
          create: {
            articleNumber: "39gn349hf",
            name: "Sinterklaas Actie",
          },
        },
      },
    },
    "{ id }",
  )

  t.truthy(parent.id)

  await api.mutation.createProductCategory(
    {
      input: {
        parent: { connect: { id: parent.id } },
        properties: {
          create: {
            articleNumber: "39gn34970f",
            name: "grote attributen",
          },
        },

        products: {
          create: [
            {
              properties: {
                create: {
                  articleNumber: "1",
                },
              },
            },
            {
              properties: {
                create: {
                  articleNumber: "2",
                },
              },
            },
          ],
        },
      },
    },
  )

  const result = await db.query.productCategory({ where: { id: parent.id } }, "{ children { products { id } } }")

  t.is(result.children[0].products.length, 2)
})

test("create via children connect", async (t) => {

  const { api } = await createFoundUserAndApi()

  const parent = await api.mutation.createProductCategory(
    {
      input: {
        properties: {
          create: {
            articleNumber: "39gn349hf",
            name: "Sinterklaas Actie",
          },
        },
        children: {
          create: [{
            properties: {
              create: {
                articleNumber: "39gn34970f",
                name: "grote attributen",
              },
            },

            products: {
              create: [
                {
                  properties: {
                    create: {
                      articleNumber: "1",
                    },
                  },
                },
                {
                  properties: {
                    create: {
                      articleNumber: "2",
                    },
                  },
                },
              ],
            },
          }],
        },
      },
    },
    "{ id }",
  )

  const result = await db.query.productCategory({ where: { id: parent.id } }, "{ children { products { id } } }")

  t.is(result.children[0].products.length, 2)
})

test("update", async (t) => {

  const { api } = await createFoundUserAndApi()

  const parent = await api.mutation.createProductCategory(
    {
      input: {
        properties: {
          create: {
            articleNumber: "39gn349hf",
            name: "Sinterklaas Actie",
          },
        },
      },
    },
    "{ id }",
  )

  t.truthy(parent.id)

  await api.mutation.updateProductCategory(
    {
      where: { id: parent.id },
      input: {
        children: {
          create: {
            properties: {
              create: {
                articleNumber: "39gn34970f",
                name: "grote attributen",
              },
            },
            products: {
              create: [
                {
                  properties: {
                    create: {
                      articleNumber: "1",
                    },
                  },
                },
                {
                  properties: {
                    create: {
                      articleNumber: "2",
                    },
                  },
                },
              ],
            },
          },
        },
      },
    },
  )

  const result = await db.query.productCategory({ where: { id: parent.id } }, "{ children { products { id } } }")

  t.is(result.children[0].products.length, 2)
})

test("queries", async (t) => {

  const { api } = await createFoundUserAndApi()
  const brand = await createBrandAndStores()

  const parent = await db.mutation.createProductCategory(
    {
      data: {
        brand: { connect: { id: brand.id } },
        properties: {
          create: {
            articleNumber: "39gn349hf",
            name: "Sinterklaas Actie",
          },
        },
      },
    },
    "{ id }",
  )

  const result1 = await api.query.productCategory({ where: { id: parent.id } }, "{ properties { name } }")
  t.is(result1.properties.name, "Sinterklaas Actie")

  // Create a second productCategory that is connected to the same brand
  await db.mutation.createProductCategory(
    {
      data: {
        brand: { connect: { id: brand.id } },
        properties: {
          create: {
            articleNumber: "32",
            name: faker.commerce.productName(),
          },
        },
      },
    },
    "{ id }",
  )

  const result2 = await api.query.productCategories({ where: { brand: { id: brand.id } } }, "{ id }")
  t.is(result2.length, 2)
})
