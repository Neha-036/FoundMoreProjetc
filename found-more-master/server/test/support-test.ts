import test from "ava"
import * as faker from "faker"
import { createFoundUserAndApi, createPrisma } from "../utils/utils"

const db = createPrisma()

test("create and update", async (t) => {

  const { api } = await createFoundUserAndApi()
  let title = faker.lorem.word()

  const result = await api.mutation.createSupportPage(
    {
      input: {
        title,
        content: faker.lorem.paragraph(),
      },
    },
    "{ id title }",
  )

  t.is(result.title, title)

  title = faker.lorem.word()

  const updatedResult = await api.mutation.updateSupportPage(
    {
      where: { id: result.id },
      input: {
        title,
        content: faker.lorem.paragraph(),
      },
    },
    "{ title }",
  )

  t.is(updatedResult.title, title)
})

test("queries", async (t) => {

  const { api } = await createFoundUserAndApi()

  const title = faker.lorem.word()

  const supportPage = await db.mutation.createSupportPage(
    {
      data: {
        title,
        content: faker.lorem.paragraph(),
      },
    },
    "{ id }",
  )

  const result1 = await api.query.supportPage({ where: { id: supportPage.id } }, "{ title }")
  t.is(result1.title, title)

  await db.mutation.createSupportPage(
    {
      data: {
        title,
        content: faker.lorem.paragraph(),
      },
    },
  )

  const result2 = await api.query.supportPages({ where: { title } })

  t.is(result2.length, 2)
})
