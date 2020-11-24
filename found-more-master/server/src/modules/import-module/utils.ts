import { join } from "path"
import { Prisma, PropertiesCreateInput } from "../../generated/prisma"
import { Sheet, TableRow } from "../excel-module"
import { uploadFile } from "../file-module"

export function normalizeEmail(email: string) {
  return email ? email.trim().toLowerCase() : null
}

export function s(str: string | number) {
  return typeof str === "number" ? str.toString() : (str || "")
}

export function b(str: string | number): boolean {
  const str2 = s(str).trim().toLowerCase()
  return str2 === "yes" || str2 === "ja" || str2 === "1" || str2 === "Y"
}

export function rs(str: string | number) {
  const str2 = s(str)
  if (!str2) throw new Error("Unable to get required string")
  return str2
}

export function sn(str: string | number) {
  return s(str) || null
}

export function n(str: string | number) {
  return typeof str === "number" ? str : parseInt(str, 10)
}

export async function uploadAndInsertFile(db: Prisma, file: string, dir: string) {
  const f = await uploadFile(file, join(dir, file))
  return (await db.mutation.createFile({ data: f }, "{ id }")).id
}

export function getPropertiesCreateInput(row: TableRow) {

  // ArticleNumber Name Language Description DepthMm WidthMm HeightMm Size Material Color WeightKg
  // Note that we do not use this ArticleNumber to connect the products/ordertemplates

  return {
    name: row.Name,
    articleNumber: s(row.ArticleNumber),
    language: row.Language ? { connect: { isoCode: row.Language } } : {},
    description: row.Description,
    depthMm: typeof row.DepthMm === "number" ? row.DepthMm : null,
    widthMm: typeof row.WidthMm === "number" ? row.WidthMm : null,
    heightMm: typeof row.HeightMm === "number" ? row.HeightMm : null,
    size: row.Size,
    material: row.Material,
    color: row.Color,
    weightG: typeof row.WeightKg === "number" ? row.WeightKg * 1000 : null,
  } as PropertiesCreateInput
}

export function getFirstRow(data: Sheet, sheetname: string) {
  if (!data[sheetname] || !data[sheetname][0]) throw new Error(`Unable to get first row of sheet: ${sheetname}`)
  return data[sheetname][0]
}

export function getRows(data: Sheet, sheetname: string) {
  return data[sheetname] || []
}
