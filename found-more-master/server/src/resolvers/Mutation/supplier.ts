import { SupplierCreateInput, SupplierUpdateInput, SupplierWhereUniqueInput } from "../../generated/prisma"
import { AuthorizationError } from "../../modules/error-module"
import { hasPermission } from "../../modules/user-module"
import { Context } from "../../typings"

export async function createSupplier(parent, args: { input: SupplierCreateInput }, ctx: Context, info) {

  const authorized = await hasPermission(ctx, "CREATE_ALL", "SUPPLIER")

  if (!authorized) throw new AuthorizationError("E0601")

  return ctx.db.mutation.createSupplier({ data: args.input }, info)
}

export async function updateSupplier(parent, args: { input: SupplierUpdateInput; where: SupplierWhereUniqueInput }, ctx: Context, info) {

  const authorized = await hasPermission(ctx, "UPDATE_ALL", "SUPPLIER")

  if (!authorized) throw new AuthorizationError("E0602")

  return ctx.db.mutation.updateSupplier({ data: args.input, where: args.where }, info)
}
