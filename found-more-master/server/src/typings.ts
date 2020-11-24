import { Request } from "express"
import { Address, OrderTemplateWhereUniqueInput, Prisma, StoreWhereUniqueInput } from "./generated/prisma"

export interface Context {
  db: Prisma
  req: Request
  userId?: string
}

export interface ConnectionOptions {
  from: string
  to: string
  hasMultiple?: boolean
}

export interface FileUpload {
  stream: any
  filename: string
  mimetype: string
  encoding: string
}

export interface OrderInput {
  store: StoreWhereUniqueInput
  order: OrderItemInput[]
  address: Address
  comment: string
  poNumber: string
}

export interface OrderItemInput {
  amount: number
  orderTemplate: OrderTemplateWhereUniqueInput
  children: OrderItemInput[]
}
