import * as path from "path"
import { importPartialExcel } from "../src/modules/import-module"
import { FoundLogger } from "../src/modules/logger-module"
import { createPrisma } from "../utils/utils"

async function main() {

  const domain = process.argv[2] || "ring"
  const dir = path.join(__dirname, "..", "data", domain)
  const db = createPrisma()
  const logger = new FoundLogger()

  await importPartialExcel(db, logger, domain, dir)

  console.log(logger.getMessagesAsString())
}

main().catch(console.error)
