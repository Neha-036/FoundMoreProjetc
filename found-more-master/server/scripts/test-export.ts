
import { exportBrandData } from "../src/modules/export-module"
import { createPrisma } from "../utils/utils"

const db = createPrisma()

async function main() {

  try {

    const { id } = await db.query.user({ where: { email: "found@example.org" } })

    console.log(await exportBrandData(db, id, "found", { domain: "ring-new" }))

    process.exit(0)

  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

main()
