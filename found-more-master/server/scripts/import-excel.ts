import * as path from "path"
import { importExcel } from "../src/modules/import-module"
import { FoundLogger } from "../src/modules/logger-module"
import { createPrisma } from "../utils/utils"

async function main() {

  const domain = process.argv[2] || "ring"
  const dir = path.join(__dirname, "..", "data", domain)
  const db = createPrisma()

  await importExcel(db, new FoundLogger(), dir)
}

main().catch(console.error)
