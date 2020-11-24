import test from "ava"
import * as faker from "faker"
import { createArticleNumber, createBrandAndStores, createFoundUserAndApi, createPrisma, createCustomerUserAndApi } from "../utils/utils"
import { createOrderTemplates } from "../utils/order-utils"

const db = createPrisma()

test("create via children connect", async (t) => {

  const { api } = await createFoundUserAndApi()
  const brand = await createBrandAndStores()
  const productName = faker.commerce.productName()

  const result = await api.mutation.createOrderTemplate({
    input: {
      brand: {
        connect: {
          id: brand.id,
        },
      },
      properties: {
        create: {
          articleNumber: createArticleNumber(),
          name: faker.commerce.productName(),
        },
      },
      children: {
        create: [{
          brand: { connect: { id: brand.id } },
          properties: {
            create: {
              articleNumber: createArticleNumber(),
              name: productName,
            },
          },
        }],
      },
    },
  },
    "{ id children { properties { name } } }")

  t.is(result.children[0].properties.name, productName)

  await api.mutation.updateOrderTemplate(
    {
      where: { id: result.id },
      input: {
        children: {
          create: {
            brand: { connect: { id: brand.id } },
            properties: {
              create: {
                articleNumber: createArticleNumber(),
                name: productName,
              },
            },
          },
        },
      },
    },
  )

  const updatedResult = await db.query.orderTemplate({ where: { id: result.id } }, "{ id children { properties { id } } }")
  t.is(updatedResult.children.length, 2)
})

test("queries", async (t) => {

  const { api } = await createFoundUserAndApi()
  const brand = await createBrandAndStores()
  const productName = faker.commerce.productName()

  const orderTemplate = await db.mutation.createOrderTemplate({
    data: {
      brand: {
        connect: {
          id: brand.id,
        },
      },
      properties: {
        create: {
          articleNumber: createArticleNumber(),
          name: productName,
        },
      },
    },
  },
    "{ id }")

  const result1 = await api.query.orderTemplate({ where: { id: orderTemplate.id } }, "{  properties { name } }")
  t.is(result1.properties.name, productName)

  // Create a second productCategory that is connected to the same brand
  await db.mutation.createOrderTemplate({
    data: {
      brand: {
        connect: {
          id: brand.id,
        },
      },
      properties: {
        create: {
          articleNumber: createArticleNumber(),
          name: productName,
        },
      },
    },
  })

  const result2 = await api.query.orderTemplates({ where: { brand: { id: brand.id } } }, "{ id }")
  t.is(result2.length, 2)
})

test("sort", async (t) => {

  const foundUser = await createFoundUserAndApi()
  const brandName = faker.company.companyName()
  await createCustomerUserAndApi(brandName, "store-owner")
  const brand = await db.query.brand({ where: { domain: brandName } }, "{ id }")
  const orderTemplateIds = await createOrderTemplates(foundUser.api, brand.id)

  const [ot1a, ot2a] = await foundUser.api.query.orderTemplates({ where: { id_in: orderTemplateIds }, orderBy: 'sortIndex_ASC' }, '{ id sortIndex }')

  t.is(ot1a.sortIndex, null)
  t.is(ot2a.sortIndex, null)

  const [ot1b, ot2b] = await foundUser.api.mutation.setOrderTemplateOrder({ where: { id: ot1a.id }, direction: "up" }, '{ id sortIndex }')

  t.is(ot1b.sortIndex, 0)
  t.is(ot1b.id, ot1a.id)
  t.is(ot2b.sortIndex, 1)
  t.is(ot2b.id, ot2a.id)

  const [ot2c, ot1c] = await foundUser.api.mutation.setOrderTemplateOrder({ where: { id: ot1a.id }, direction: "down" }, '{ id sortIndex }')

  t.is(ot1c.sortIndex, 1)
  t.is(ot1c.id, ot1a.id)
  t.is(ot2c.sortIndex, 0)
  t.is(ot2c.id, ot2a.id)

  const [ot2d, ot1d] = await foundUser.api.mutation.setOrderTemplateOrder({ where: { id: ot1a.id }, direction: "down" }, '{ id sortIndex }')

  t.is(ot1d.sortIndex, 1)
  t.is(ot1d.id, ot1a.id)
  t.is(ot2d.sortIndex, 0)
  t.is(ot2d.id, ot2a.id)
})