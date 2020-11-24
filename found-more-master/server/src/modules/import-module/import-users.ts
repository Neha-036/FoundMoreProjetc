import { Prisma } from "../../generated/prisma"
import { TableRow } from "../excel-module"
import { ILogger } from "../logger-module"
import { hashPassword } from "../password-module"
import { normalizeEmail } from "./utils"

export async function importBrandUser(db: Prisma, logger: ILogger, brandRow: TableRow, domain: string) {

  const contactPersonEmail = normalizeEmail(brandRow.ContactPersonEmail)

  // Check the ContactPerson
  if (contactPersonEmail) {

    if (await db.exists.User({ email: contactPersonEmail })) {

      logger.log("Connecting contact person: " + contactPersonEmail)
      await db.mutation.updateBrand({
        where: { domain },
        data: { contactPerson: { connect: { email: contactPersonEmail } } },
      })
    } else {

      logger.log("Creating contact person: " + contactPersonEmail)
      await db.mutation.createUser({
        data: {
          brand: { connect: { domain } },
          contactPersonToBrand: { connect: { domain } },
          email: contactPersonEmail,
          password: await hashPassword("nooneknows"),
          firstName: "",
          lastName: "",
          role: { connect: { name: "store-owner" } },
        },
      })
    }
  }
}

export async function importStoreUsers(db: Prisma, logger: ILogger, storeRows: TableRow[], domain: string) {

  // Check the store users
  const users = [
    ...storeRows.map((e) => normalizeEmail(e.FoundUserEmail)),
    ...storeRows.map((e) => normalizeEmail(e.StoreManagerEmail)),
  ]

  const filteredUsers = Array.from(new Set(users)).filter((e) => e)

  for (const email of filteredUsers) {
    if (!await db.exists.User({ email })) {
      logger.log("Creating user: " + email)
      await db.mutation.createUser({
        data: {
          brand: { connect: { domain } },
          email,
          password: await hashPassword("nooneknows"),
          firstName: "",
          lastName: "",
          role: { connect: { name: "store-owner" } },
        },
      })
    }
  }
}
