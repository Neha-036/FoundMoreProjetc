import { join } from "path"
import { Prisma } from "../../generated/prisma"
import { readTables } from "../excel-module"
import { ILogger } from "../logger-module"
import { deleteOldBrandData } from "./delete-brand"
import { importBrand } from "./import-brand"
import { importOrders } from "./import-orders"
import { importProducts } from "./import-products"
import { importProjects } from "./import-projects"
import { importStores } from "./import-stores"
import { importBrandUser, importStoreUsers } from "./import-users"
import { getFirstRow, getRows, rs } from "./utils"

export async function importExcel(db: Prisma, logger: ILogger, dir: string) {

  logger.log(`Importing the contents of: ${dir}`)

  const data = readTables(join(dir, "order-list.xlsx"))

  const brandRow = getFirstRow(data, "Brand")

  const domain = rs(brandRow.Domain).toLowerCase()

  // Delete any old brand data
  await deleteOldBrandData(db, logger, domain)

  // Create the brand
  await importBrand(db, logger, brandRow, dir)

  // Make sure that the brand contact person exists
  await importBrandUser(db, logger, brandRow, domain)

  // Make sure that all store users exist
  await importStoreUsers(db, logger, getRows(data, "Stores"), domain)

  // Create products
  await importProducts(db, logger, getRows(data, "Products"), domain)

  // Create OrderTemplates
  await importProjects(db, logger, getRows(data, "OrderTemplates"), domain, dir)

  // Create the stores
  await importStores(db, logger, getRows(data, "Stores"), domain)

  // Create the orders
  await importOrders(db, logger, getRows(data, "Orders"), domain)

  logger.log("Import completed.")
}

export async function importPartialExcel(db: Prisma, logger: ILogger, domain: string, dir: string) {

  logger.log(`Partially importing the contents of: ${dir}`)

  const data = readTables(join(dir, "order-list.xlsx"))

  // Make sure that all store users exist
  await importStoreUsers(db, logger, getRows(data, "Stores"), domain)

  // Create products
  await importProducts(db, logger, getRows(data, "Products"), domain)

  // Create OrderTemplates
  await importProjects(db, logger, getRows(data, "OrderTemplates"), domain, dir)

  // Create the stores
  await importStores(db, logger, getRows(data, "Stores"), domain)

  // Create the orders
  await importOrders(db, logger, getRows(data, "Orders"), domain)

  logger.log("Import completed.")
}
