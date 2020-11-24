import { Prisma } from "../../generated/prisma"
import { ILogger } from "../logger-module"

export async function deleteOldBrandData(db: Prisma, logger: ILogger, domain: string) {

  logger.log("Deleting old brand data")

  await db.mutation.deleteManyComments({ where: { order: { store: { brand: { domain } } } } })

  await db.mutation.deleteManyOrders({ where: { store: { brand: { domain } } } })

  await db.mutation.deleteManyOrderTemplates({ where: { brand: { domain } } })

  await db.mutation.deleteManyProducts({ where: { brand: { domain } } })

  await db.mutation.deleteManyProductCategories({ where: { brand: { domain } } })

  await db.mutation.deleteManyStores({ where: { brand: { domain } } })

  await db.mutation.deleteManyNotifications({ where: { user: { brand: { domain } } } })

  await db.mutation.deleteManyUsers({ where: { brand: { domain } } })

  // Here also many, just in case ring does not exist
  await db.mutation.deleteManyBrands({ where: { domain } })
}
