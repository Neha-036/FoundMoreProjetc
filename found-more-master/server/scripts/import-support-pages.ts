import { Prisma } from "../src/generated/prisma"
import { createPrisma } from "../utils/utils"

async function main() {
  try {

  const db = createPrisma()

  await createSupportPages(db)

  } catch (e) {

    console.error(e)
    process.exit(1)
  }
}

async function createSupportPages(db: Prisma) {
  await db.mutation.createSupportPage({
    data: {
      title: "Support",
      content: `
        <h2 id="foundsupport">Found support</h2><p>Deccaweg 30<br />1042 AD Amsterdam<p><a href="mailto:else.klick@youhavefound.com">else.klick@youhavefound.com</a> | <a href="tel:+310204061370">+31(0)204061370</a></p></p>
      `,
    },
  })
  await db.mutation.createSupportPage({
    data: {
      title: "FAQ",
      content: `
        <h2>How can I turn on/off my notifications on my email?</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><h2>How can I return a broken product?</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><h2>How can I see the status of an order?</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      `,
    },
  })
}
main()
