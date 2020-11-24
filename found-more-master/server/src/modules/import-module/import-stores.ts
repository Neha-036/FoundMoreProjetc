import { Prisma, StoreCreateWithoutBrandInput } from "../../generated/prisma"
import { TableRow } from "../excel-module"
import { ILogger } from "../logger-module"
import { s, sn } from "./utils"

export async function importStores(db: Prisma, logger: ILogger, storeRows: TableRow[], domain: string) {

  // Type Name StoreNumber FoundUserEmail StoreManagerEmail Note Size LanguageCode Currency
  // Country CountryCode City Street Number Addition PostalCode
  // Phone Website ContactPerson ContactEmail
  // DeliveryCountry DeliveryCountryCode DeliveryCity DeliveryStreet DeliveryNumber DeliveryAddition DeliveryPostalCode

  const storeCreateInput = [] as StoreCreateWithoutBrandInput[]

  for (const row of storeRows) {
    const store = {
      name: s(row.Name),
      note: s(row.Note),
      storeNumber: s(row.StoreNumber),
      size: s(row.Size),
      language: s(row.LanguageCode) ? { connect: { isoCode: s(row.LanguageCode) } } : null,
      currency: s(row.Currency),
      type: s(row.Type),
      contactPerson: s(row.ContactPerson),
      contactEmail: s(row.ContactEmail),
      email: s(row.Email),
      phone: s(row.Phone),
      website: s(row.Website),
      address: {
        create: {
          country: s(row.Country),
          countryCode: s(row.CountryCode),
          city: s(row.City),
          street: s(row.Street),
          number: s(row.Number),
          addition: sn(row.Addition),
          postalCode: s(row.PostalCode),
        },
      },
      deliveryAddress: {
        create: {
          country: s(row.DeliveryCountry),
          countryCode: s(row.DeliveryCountryCode),
          city: s(row.DeliveryCity),
          street: s(row.DeliveryStreet),
          number: s(row.Number),
          addition: sn(row.DeliveryAddition),
          postalCode: s(row.DeliveryPostalCode),
        },
      },
      users: { connect: [{ email: s(row.FoundUserEmail) }, { email: s(row.StoreManagerEmail) }].filter((e) => e.email) },
    } as StoreCreateWithoutBrandInput

    storeCreateInput.push(store)
  }

  await db.mutation.updateBrand({
    data: { stores: { create: storeCreateInput } },
    where: { domain },
  }, "{ id }")

  logger.log(`The excel has ${storeRows.length} stores`)
  logger.log(`We imported ${storeCreateInput.length} stores`)
}
