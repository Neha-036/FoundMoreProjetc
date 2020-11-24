import { SupportPageCreateInput, SupportPageUpdateInput, SupportPageWhereUniqueInput } from "../../generated/prisma"
import { AuthorizationError } from "../../modules/error-module"
import { hasPermission } from "../../modules/user-module"
import { Context } from "../../typings"

export async function createSupportPage(parent, args: { input: SupportPageCreateInput }, ctx: Context, info) {

  const authorized = await hasPermission(ctx, "CREATE_ALL", "SUPPORT")

  if (!authorized) throw new AuthorizationError("E1201")

  return ctx.db.mutation.createSupportPage({ data: args.input }, info)
}

export async function updateSupportPage(parent, args: { input: SupportPageUpdateInput; where: SupportPageWhereUniqueInput }, ctx: Context, info) {

  const authorized = await hasPermission(ctx, "UPDATE_ALL", "SUPPORT")

  if (!authorized) throw new AuthorizationError("E1202")

  return ctx.db.mutation.updateSupportPage({ data: args.input, where: args.where }, info)
}

export async function deleteSupportPage(parent, args: { input: SupportPageUpdateInput; where: SupportPageWhereUniqueInput }, ctx: Context, info) {

  const authorized = await hasPermission(ctx, "DELETE_ALL", "SUPPORT")

  if (!authorized) throw new AuthorizationError("E1203")

  return ctx.db.mutation.deleteSupportPage({ where: args.where }, info)
}
