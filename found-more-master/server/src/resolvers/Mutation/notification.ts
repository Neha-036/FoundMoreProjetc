import { NotificationWhereUniqueInput } from "../../generated/prisma"
import { AuthorizationError } from "../../modules/error-module"
import { hasNotification, hasPermission } from "../../modules/user-module"
import { Context } from "../../typings"

export async function readNotification(parent, args: { where: NotificationWhereUniqueInput }, ctx: Context, info) {
  const authorized = await hasPermission(ctx, "UPDATE_ALL", "NOTIFICATION") || (
    await hasPermission(ctx, "UPDATE_OWN", "NOTIFICATION") &&
    await hasNotification(ctx, args.where)
  )
  if (!authorized) throw new AuthorizationError("E1301")

  return ctx.db.mutation.updateNotification({ data: { readAt: new Date().toISOString() }, where: args.where }, info)
}
