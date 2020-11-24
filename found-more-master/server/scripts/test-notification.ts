import { createPrisma } from "../utils/utils"

const db = createPrisma()

const map = {
  "order-status-update": orderStatusUpdate,
}

async function main() {

  try {

    const action = process.argv[2] || "order-status-update"
    if (!map[action]) throw new Error(`Uknown action: ${action}`)

    await map[action]()

    process.exit(0)

  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

async function orderStatusUpdate() {
  await db.mutation.createNotification({
    data: {
      user: { connect: { email: "found@example.org" } },
      title: "Statusupdate for your order",
      content: "This is awesome content",
      link: "https://google.com",
    },
  })
}

main()
