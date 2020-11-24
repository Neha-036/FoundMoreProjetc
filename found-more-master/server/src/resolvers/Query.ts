import { BrandWhereInput, BrandWhereUniqueInput, LanguageWhereInput, NotificationWhereInput, NotificationWhereUniqueInput, OrderTemplateWhereInput, OrderTemplateWhereUniqueInput, OrderWhereInput, OrderWhereUniqueInput, ProductCategoryWhereInput, ProductCategoryWhereUniqueInput, ProductWhereInput, ProductWhereUniqueInput, RoleWhereInput, StoreWhereInput, StoreWhereUniqueInput, SupplierWhereInput, SupplierWhereUniqueInput, SupportPageWhereInput, SupportPageWhereUniqueInput, UserWhereInput, UserWhereUniqueInput } from "../generated/prisma"
import { AuthorizationError } from "../modules/error-module"
import { ordersSearchQuery, orderTemplatesSearchQuery, storesSearchQuery } from "../modules/search-module"
import { getUserId } from "../modules/token-module"
import { canUpdateOwnOrderStatus as _canUpdateOwnOrderStatus, getBrandId, getCoworkerIds, getNotificationIds, getStoreIds, getStoreLanguages, hasBrand, hasNotification, hasOrder, hasOrderTemplate, hasPermission, hasStore, isCoworker, isMe } from "../modules/user-module"
import { getBrandName } from "../modules/utils-module"
import { ConnectionOptions, Context } from "../typings"

const applyConnection = (ctx: Context, options: ConnectionOptions) => (model) => ({
  ...model,
  [`${options.to}Connection`]: ctx.db.query[`${options.to}Connection`]({ where: { [`${options.from}${options.hasMultiple ? "_some" : ""}`]: { id: model.id } } }, "{ aggregate { count } }"),
})

export async function me(parent, args, ctx: Context, info) {

  const userId = await getUserId(ctx)

  return ctx.db.query.user({ where: { id: userId } }, info)
}

export async function storeLanguages(parent, args, ctx: Context, info) {

  return getStoreLanguages(ctx)
}

export async function user(parent, args: { where: UserWhereUniqueInput }, ctx: Context, info) {

  const authorized =
    await isMe(ctx, args.where) || await hasPermission(ctx, "VIEW_ALL", "USER") ||
    (
      await hasPermission(ctx, "VIEW_OWN", "USER") ||
      await isCoworker(ctx, args.where)
    )

  if (!authorized) throw new AuthorizationError("E0801")

  return ctx.db.query.user(args, info)
}

export async function users(parent, args: { where: UserWhereInput }, ctx: Context, info) {

  const canViewAllUsers = await hasPermission(ctx, "VIEW_ALL", "USER")

  if (!canViewAllUsers) {

    const canViewOwnUsers = await hasPermission(ctx, "VIEW_OWN", "USER")

    if (!canViewOwnUsers) throw new AuthorizationError("E0802")

    args.where = {
      AND: [args.where || {}, { id_in: await getCoworkerIds(ctx) }],
    }
  }

  return ctx.db.query.users(args, info).then((res) => res.map(applyConnection(ctx, { from: "users", to: "stores", hasMultiple: true })))
}

export async function brand(parent, args: { where: BrandWhereUniqueInput }, ctx: Context, info) {

  const authorized = await hasPermission(ctx, "VIEW_ALL", "BRAND") ||
    (
      await hasPermission(ctx, "VIEW_OWN", "BRAND") &&
      await hasBrand(ctx, args.where)
    )

  if (!authorized) throw new AuthorizationError("E0803")

  return ctx.db.query.brand(args, info)
}

export async function brandPersonalization(parent, args, ctx: Context, info) {

  const domain = getBrandName(ctx)

  return ctx.db.query.brand({ where: { domain } }, info)
}

export async function brands(parent, args: { where: BrandWhereInput }, ctx: Context, info) {

  const authorized = await hasPermission(ctx, "VIEW_ALL", "BRAND")

  if (!authorized) throw new AuthorizationError("E0804")

  return ctx.db.query.brands(args, info)
    .then((res) => res.map(applyConnection(ctx, { from: "brand", to: "users" })))
    .then((res) => res.map(applyConnection(ctx, { from: "brand", to: "stores" })))
}

export async function store(parent, args: { where: StoreWhereUniqueInput }, ctx: Context, info) {

  const authorized = await hasPermission(ctx, "VIEW_ALL", "STORE") ||
    (
      await hasPermission(ctx, "VIEW_OWN", "STORE") &&
      await hasStore(ctx, args.where)
    )

  if (!authorized) throw new AuthorizationError("E0805")

  return ctx.db.query.store(args, info)
}

export async function stores(parent, args: { where?: StoreWhereInput, search?: string }, ctx: Context, info) {

  const canViewAllStores = await hasPermission(ctx, "VIEW_ALL", "STORE")

  // If the user is not allowed to view all stores, modify the query such that only his
  // own stores are returned
  if (!canViewAllStores) {

    const canViewOwnStores = await hasPermission(ctx, "VIEW_OWN", "STORE")

    if (!canViewOwnStores) throw new AuthorizationError("E0806")

    args.where = { AND: [args.where || {}, { id_in: await getStoreIds(ctx) }] }
  }

  if (args.search) {
    args.where = { AND: [args.where || {}, storesSearchQuery(args.search)] }
  }

  // // Only if specifically asked for deleted items, we return those.
  // if (!Object.keys(args.where).find((s) => s.includes("deletedAt"))) {
  //   args.where = { AND: [args.where || {}, { deletedAt: null }] }
  // }

  return ctx.db.query.stores(args, info)
}

export async function storesConnection(parent, args: { where?: StoreWhereInput, search?: string }, ctx: Context, info) {

  const canViewAllStores = await hasPermission(ctx, "VIEW_ALL", "STORE")

  // If the user is not allowed to view all stores, modify the query such that only his
  // own stores are returned
  if (!canViewAllStores) {

    const canViewOwnStores = await hasPermission(ctx, "VIEW_OWN", "STORE")

    if (!canViewOwnStores) throw new AuthorizationError("E0806")

    args.where = { AND: [args.where || {}, { id_in: await getStoreIds(ctx) }] }
  }

  if (args.search) {
    args.where = { AND: [args.where || {}, storesSearchQuery(args.search)] }
  }

  return ctx.db.query.storesConnection(args, info)
}

export async function supplier(parent, args: { where: SupplierWhereUniqueInput }, ctx: Context, info) {

  const authorized = await hasPermission(ctx, "VIEW_ALL", "SUPPLIER")

  if (!authorized) throw new AuthorizationError("E0807")

  return ctx.db.query.supplier(args, info)
}

export async function suppliers(parent, args: { where?: SupplierWhereInput }, ctx: Context, info) {

  const canViewAllSuppliers = await hasPermission(ctx, "VIEW_ALL", "SUPPLIER")

  if (!canViewAllSuppliers) throw new AuthorizationError("E0808")

  return ctx.db.query.suppliers(args, info)
}

// This is only queryable for Found users
export async function product(parent, args: { where: ProductWhereUniqueInput }, ctx: Context, info) {

  const authorized =
    await hasPermission(ctx, "VIEW_ALL", "PRODUCT")

  if (!authorized) throw new AuthorizationError("E0809")

  return ctx.db.query.product(args, info)
}

// This is only queryable for Found users
export async function products(parent, args: { where?: ProductWhereInput }, ctx: Context, info) {

  const canViewAllProducts = await hasPermission(ctx, "VIEW_ALL", "PRODUCT")

  if (!canViewAllProducts) throw new AuthorizationError("E0810")

  return ctx.db.query.products(args, info)
}

// This is only queryable for Found users
export async function productCategory(parent, args: { where: ProductCategoryWhereUniqueInput }, ctx: Context, info) {

  const authorized = await hasPermission(ctx, "VIEW_ALL", "PRODUCT")

  if (!authorized) throw new AuthorizationError("E0811")

  return ctx.db.query.productCategory(args, info)
}

// This is only queryable for Found users
export async function productCategories(parent, args: { where?: ProductCategoryWhereInput }, ctx: Context, info) {

  const canViewAllProductCategories = await hasPermission(ctx, "VIEW_ALL", "PRODUCT")

  if (!canViewAllProductCategories) {
    throw new AuthorizationError("E0812")
  }

  return ctx.db.query.productCategories(args, info)
}

export async function orderTemplate(parent, args: { where: OrderTemplateWhereUniqueInput }, ctx: Context, info) {

  const authorized =
    await hasPermission(ctx, "VIEW_ALL", "PRODUCT") ||
    (
      await hasPermission(ctx, "VIEW_OWN", "PRODUCT") &&
      await hasOrderTemplate(ctx, args.where)
    )

  if (!authorized) throw new AuthorizationError("E0813")

  return ctx.db.query.orderTemplate(args, info)
}

export async function orderTemplates(parent, args: { where?: OrderTemplateWhereInput, search?: string }, ctx: Context, info) {

  const canViewAllOrderTemplates = await hasPermission(ctx, "VIEW_ALL", "PRODUCT")

  // If the user is not allowed to view all OrderTemplates, modify the query such that
  // only his own OrderTemplates are returned
  if (!canViewAllOrderTemplates) {

    const canViewOwnOrderTemplates = await hasPermission(ctx, "VIEW_OWN", "PRODUCT")

    if (!canViewOwnOrderTemplates) throw new AuthorizationError("E0814")

    args.where = { AND: [args.where || {}, { brand: { id: await getBrandId(ctx) } }] }
  }

  if (args.search) {
    args.where = { AND: [args.where || {}, orderTemplatesSearchQuery(args.search)] }
  }

  return ctx.db.query.orderTemplates(args, info)
}

export async function order(parent, args: { where: OrderWhereUniqueInput }, ctx: Context, info) {

  const authorized =
    await hasPermission(ctx, "VIEW_ALL", "ORDER") ||
    (
      await hasPermission(ctx, "VIEW_OWN", "ORDER") &&
      await hasOrder(ctx, args.where)
    )

  if (!authorized) throw new AuthorizationError("E0815")

  return ctx.db.query.order(args, info)
}

export async function orders(parent, args: { where?: OrderWhereInput, search?: string }, ctx: Context, info) {

  const canViewAllOrders = await hasPermission(ctx, "VIEW_ALL", "ORDER")

  // If the user is not allowed to view all Orders, modify the query such that
  // only his own Orders are returned
  if (!canViewAllOrders) {

    const canViewOwnOrders = await hasPermission(ctx, "VIEW_OWN", "ORDER")

    if (!canViewOwnOrders) throw new AuthorizationError("E0816")

    const storesQuery = (await getStoreIds(ctx)).map((s) => ({ id: s })) as StoreWhereInput[]
    args.where = { AND: [args.where || {}, { store: { OR: storesQuery } }] }

  }

  if (args.search) {
    args.where = { AND: [args.where || {}, ordersSearchQuery(args.search)] }
  }

  return ctx.db.query.orders(args, info)
}

export async function supportPage(parent, args: { where: SupportPageWhereUniqueInput }, ctx: Context, info) {

  const authorized = await hasPermission(ctx, "VIEW_ALL", "SUPPORT") || await hasPermission(ctx, "VIEW_OWN", "SUPPORT")

  if (!authorized) throw new AuthorizationError("E0817")

  return ctx.db.query.supportPage(args, info)
}

export async function supportPages(parent, args: { where?: SupportPageWhereInput }, ctx: Context, info) {

  const canViewAllsupportPages = await hasPermission(ctx, "VIEW_ALL", "SUPPORT") || await hasPermission(ctx, "VIEW_OWN", "SUPPORT")

  if (!canViewAllsupportPages) throw new AuthorizationError("E0818")

  return ctx.db.query.supportPages(args, info)
}

export async function notification(parent, args: { where: NotificationWhereUniqueInput }, ctx: Context, info) {

  const authorized = await hasPermission(ctx, "VIEW_ALL", "NOTIFICATION") ||
    (
      await hasPermission(ctx, "VIEW_OWN", "NOTIFICATION") &&
      await hasNotification(ctx, args.where)
    )

  if (!authorized) throw new AuthorizationError("E0819")

  return ctx.db.query.notification(args, info)
}

export async function notifications(parent, args: { where?: NotificationWhereInput }, ctx: Context, info) {

  const canViewAllNotifications = await hasPermission(ctx, "VIEW_ALL", "NOTIFICATION")

  // If the user is not allowed to view all notifications, modify the query such that only his
  // own notifications are returned
  if (!canViewAllNotifications) {

    const canViewOwnNotifications = await hasPermission(ctx, "VIEW_OWN", "STORE")

    if (!canViewOwnNotifications) throw new AuthorizationError("E0820")

    args.where = { AND: [args.where || {}, { id_in: await getNotificationIds(ctx) }] }
  }

  return ctx.db.query.notifications(args, info)
}

export async function roles(parent, args: { where?: RoleWhereInput }, ctx: Context, info) {

  const canViewAllRoles = await hasPermission(ctx, "VIEW_ALL", "ROLE")
  if (!canViewAllRoles) throw new AuthorizationError("E0821")

  return ctx.db.query.roles(args, info)
}

export async function languages(parent, args: { where?: LanguageWhereInput }, ctx: Context, info) {

  return ctx.db.query.languages(args, info)
}

export async function canUpdateOwnOrderStatus(parent, args, ctx: Context, info) {

  return _canUpdateOwnOrderStatus(ctx)
}
