import { Prisma } from "../../generated/prisma"
import { TableRow } from "../excel-module"
import { ILogger } from "../logger-module"
import { rs, s, sn, uploadAndInsertFile } from "./utils"

export async function importBrand(db: Prisma, _: ILogger, brandRow: TableRow, dir: string) {

  // Name Domain PrimaryColor SecondaryColor TextColor Logo BackgroundImage Note ContactPersonEmail Country City Street Number PostalCode

  const backgroundImageId = await uploadAndInsertFile(db, brandRow.BackgroundImage, dir)
  const logoId = await uploadAndInsertFile(db, brandRow.Logo, dir)

  await db.mutation.createBrand({
    data: {
      domain: rs(brandRow.Domain),
      name: s(brandRow.Name),
      primaryColor: s(brandRow.PrimaryColor),
      secondaryColor: s(brandRow.SecondaryColor),
      textColor: s(brandRow.TextColor),
      backgroundImage: { connect: { id: backgroundImageId } },
      logo: { connect: { id: logoId } },
      note: sn(brandRow.Note),
      address: {
        create: {
          country: s(brandRow.Country),
          countryCode: s(brandRow.CountryCode),
          city: s(brandRow.City),
          street: s(brandRow.Street),
          number: s(brandRow.Number),
          addition: sn(brandRow.Addition),
          postalCode: s(brandRow.PostalCode),
        },
      },
    },
  }, "{ id }")
}
