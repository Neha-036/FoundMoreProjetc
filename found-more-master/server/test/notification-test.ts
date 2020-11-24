import test from "ava"
import * as faker from "faker"
import { createCustomerUserAndApi, createPrisma } from "../utils/utils"

const db = createPrisma()

test("update/read", async (t) => {
  const user = await createCustomerUserAndApi(faker.company.companyName() + "-notification", "store-owner")

  const result = await db.mutation.createNotification(
    {
      data: {
        title: faker.lorem.word(),
        content: faker.lorem.paragraph(),
        user: { connect: { id: user.user.id } },
      },
    },
    "{ id title }",
  )

  const readNotification = await user.api.mutation.readNotification(
    {
      where: { id: result.id },
    },
    "{ readAt }",
  )

  t.truthy(readNotification.readAt)
})
