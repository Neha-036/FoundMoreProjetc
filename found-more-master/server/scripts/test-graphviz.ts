
import { createFileFromOrderTemplate } from "../src/modules/graphviz-module"
import { createPrisma } from "../utils/utils"

const db = createPrisma()

async function main() {

  // const ots = await db.query.orderTemplates({ where: { properties: { name: "Displays" } }, first: 1 }, "{ id }")

  const ots = await db.query.orderTemplates({ where: { properties: { name_contains: process.argv[2] || "DS17048" } }, first: 1 }, "{ id }")

  const { file, dot } = await createFileFromOrderTemplate(db, { id: ots[0].id })

  console.log("Graph: \n\n" + dot)
  console.log("SVG: " + file.location)
}

main().catch(console.error)
