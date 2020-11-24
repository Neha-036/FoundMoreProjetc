import { BrandWhereUniqueInput, Prisma } from "../../generated/prisma"

export interface ExportContext {
  type: "found" | "default"
  db: Prisma
  userId: string
  brandWhereUniqueInput: BrandWhereUniqueInput
}

export interface ColumnDefinition {
  key: string
  name: string
  description: string
  color: string
  maxSubColumnRepeats: number
  subColumns?: ColumnDefinition[]
}

export interface DataTab {
  name: string
  data: object[]
  description: string
  columns: ColumnDefinition[]
}
