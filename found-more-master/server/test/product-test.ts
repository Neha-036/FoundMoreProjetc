import test from "ava"
import * as faker from "faker"
import { createArticleNumber, createBrandAndStores, createFoundUserAndApi, createPrisma } from "../utils/utils"

const db = createPrisma()

test("create and update", async (t) => {

  const { api } = await createFoundUserAndApi()
  const articleNumber = createArticleNumber()

  const result = await api.mutation.createProduct(
    {
      input: {
        properties: {
          create: {
            articleNumber,
          },
        },
      },
    },
    "{ id properties { id articleNumber } }",
  )

  t.is(result.properties.articleNumber, articleNumber)

  const name = faker.commerce.productName()

  const updatedResult = await api.mutation.updateProduct(
    {
      where: { id: result.id },
      input: {
        properties: {
          update: { name },
        },
      },
    },
    "{ properties { name } }",
  )

  t.is(updatedResult.properties.name, name)
})

test("queries", async (t) => {

  const { api } = await createFoundUserAndApi()
  const articleNumber1 = createArticleNumber()
  const brand = await createBrandAndStores()

  const product = await db.mutation.createProduct(
    {
      data: {
        brand: { connect: { id: brand.id } },
        properties: {
          create: {
            articleNumber: articleNumber1,
          },
        },
      },
    },
    "{ id }",
  )

  const result1 = await api.query.product({ where: { id: product.id } }, "{ id properties { articleNumber } }")
  t.is(result1.properties.articleNumber, articleNumber1)

  const articleNumber2 = createArticleNumber()

  await db.mutation.createProduct(
    {
      data: {
        brand: { connect: { id: brand.id } },
        properties: {
          create: {
            articleNumber: articleNumber2,
          },
        },
      },
    },
    "{ id }",
  )

  const result2 = await api.query.products({ where: { brand: { id: brand.id } } })
  t.is(result2.length, 2)
})
