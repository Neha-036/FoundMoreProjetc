import { BrandWhereInput, NotificationWhereInput, OrderTemplateWhereInput, OrderWhereInput, PermissionAction, PermissionModel, StoreWhereInput, User, UserWhereUniqueInput } from "../generated/prisma"
import { Context } from "../typings"
import { ServerError } from "./error-module"
import { getUserId } from "./token-module"

export function hasPermission(ctx: Context, action: PermissionAction, model: PermissionModel) {

  return ctx.db.exists.User({
    AND: [
      { id: getUserId(ctx) },
      {
        role: {
          permissions_some: {
            action_in: ["ALL", action],
            model_in: ["ALL", model],
          },
        },
      },
    ],
  })
}

export async function hasStore(ctx: Context, where: StoreWhereInput) {

  return await ctx.db.exists.User({ AND: [{ id: getUserId(ctx) }, { stores_some: where }] })
}

export async function hasStores(ctx: Context, where: StoreWhereInput) {

  const storyQuery = (await ctx.db.query.stores({ where }, "{ id }")).map((store) => ({ stores_some: { id: store.id } }))

  return await ctx.db.exists.User({ AND: [{ id: getUserId(ctx) }, ...storyQuery] })
}

export async function hasBrand(ctx: Context, where: BrandWhereInput) {

  return await ctx.db.exists.User({ AND: [{ id: getUserId(ctx) }, { brand: where }] })
}

export async function hasNotification(ctx: Context, where: NotificationWhereInput) {

  return await ctx.db.exists.Notification({ AND: [{ id: where.id }, { user: { id: getUserId(ctx) } }] })
}

export async function hasOrderTemplate(ctx: Context, where: OrderTemplateWhereInput) {

  return await ctx.db.exists.User({ AND: [{ id: getUserId(ctx) }, { brand: { orderTemplates_some: where } }] })
}

export async function hasOrder(ctx: Context, where: OrderWhereInput) {

  return await ctx.db.exists.User({ AND: [{ id: getUserId(ctx) }, { stores_some: { orders_some: where } }] })
}

export async function isMe(ctx: Context, where: UserWhereUniqueInput) {

  return await ctx.db.exists.User({ AND: [{ id: getUserId(ctx) }, where] })
}

export async function isCoworker(ctx: Context, where: UserWhereUniqueInput) {

  return await ctx.db.exists.User({ AND: [{ id: getUserId(ctx) }, { brand: { users_some: where } }] })
}

export async function getBrandId(ctx: Context) {

  return (await ctx.db.query.user({ where: { id: getUserId(ctx) } }, "{ brand { id } }")).brand.id
}

export async function getStoreIds(ctx: Context) {

  return (await ctx.db.query.user({ where: { id: getUserId(ctx) } }, "{ stores { id } }")).stores.map((s) => s.id)
}

export async function getNotificationIds(ctx: Context) {

  return (await ctx.db.query.user({ where: { id: getUserId(ctx) } }, "{ notifications { id } }")).notifications.map((s) => s.id)
}

export async function getCoworkerIds(ctx: Context) {

  return (await ctx.db.query.user({ where: { id: getUserId(ctx) } }, "{ brand { users { id } } }")).brand.users.map((u) => u.id)
}

export async function getStoreLanguages(ctx: Context) {

  const user = await ctx.db.query.user({ where: { id: getUserId(ctx) } }, "{ stores { language { isoCode } } role { name } }")

  if (user.role.name === "admin") {

    const languages = await ctx.db.query.languages({}, "{ isoCode }")

    return languages.map((l) => l.isoCode)

  }  else {

    const isoCodes = user.stores.map((s) => s.language ? s.language.isoCode : null)

    return Array.from(new Set(isoCodes)).filter((s) => s)
  }
}

export async function canUpdateOwnOrderStatus(ctx: Context) {
  return await hasPermission(ctx, "UPDATE_ALL", "ORDER_STATUS") ||
    await hasPermission(ctx, "UPDATE_OWN", "ORDER_STATUS")
}

export function userHasPermission(u: User, action: PermissionAction, model: PermissionModel) {

  if (!u.role || !u.role.permissions || !u.role.permissions[0].model || !u.role.permissions[0].action) {
    throw new ServerError("E1701", "Did not find user permission, did you load this into the model?")
  }

  return !!u.role.permissions.find((p) =>
    (p.model === model || p.model === "ALL") &&
    (p.action === action || p.action === "ALL"),
  )
}

export function userIsFound(u: User) {

  if (!u.brand || !u.brand.domain) {
    throw new ServerError("E1702", "Did not find user brand, did you load this into the model?")
  }

  return u.brand.domain === "found"
}

export function userCanUpdateOrderStatus(u: User) {

  return userHasPermission(u, "UPDATE_OWN", "ORDER_STATUS") ||
    userHasPermission(u, "UPDATE_ALL", "ORDER_STATUS")
}
