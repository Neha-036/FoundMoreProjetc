import { CommentCreateManyWithoutOrderInput, OrderStatus, OrderTemplate, OrderWhereUniqueInput } from "../../generated/prisma"
import { OrderCreateInput, OrderItemCreateInput, OrderUpdateInput, OrderWhereInput } from "../../generated/prisma"
import { AuthorizationError } from "../../modules/error-module"
import { createNotificationForNewOrders, createNotificationForOrderComment, createNotificationForOrderStatusUpdate, createNotificationForStockWarning } from "../../modules/notification-module"
import { getNextOrderNumberByContext } from "../../modules/order-number-module"
import { getUserId } from "../../modules/token-module"
import { canUpdateOwnOrderStatus, hasOrder, hasPermission, hasStores } from "../../modules/user-module"
import { Context, OrderInput, OrderItemInput } from "../../typings"

export async function createOrders(parent, args: { orders: OrderInput[] }, ctx: Context, info) {

  const authorized = await hasPermission(ctx, "CREATE_ALL", "ORDER") ||
    (
      await hasPermission(ctx, "CREATE_OWN", "ORDER") &&
      await hasStores(ctx, { OR: args.orders.map((o) => o.store) })
    )

  if (!authorized) throw new AuthorizationError("E1101")

  const status = await canUpdateOwnOrderStatus(ctx) ? "PENDING" : "WAITING_FOR_APPROVAL"

  const result = [] as OrderWhereInput[]

  // Save each order
  for (const order of args.orders) {

    result.push({ id: await addOrder(ctx, order, status) })
  }

  // Notify users
  await createNotificationForNewOrders(ctx, result, status)

  const where: OrderWhereInput = { OR: result }

  // Update stock
  await updateStock(ctx, "sub", where)

  // Return the corresponding orders
  return ctx.db.query.orders({ where }, info)
}

async function updateStock(ctx: Context, mode: "add" | "sub", where: OrderWhereInput) {

  // Get the amount and stock in a single query
  const orders = await ctx.db.query.orders({ where }, `{
    items {
      amount
      orderTemplate {
        id
        stock
        stockWarning
        orderable
        parent {
          id
          stock
          stockWarning
          orderable
        }
      }
    }
  }`)

  const map: { [key: string]: number } = {}
  const stockWarnings: string[] = []

  for (const order of orders) {
    for (const item of order.items) {

      // This is a quick and dirty fix to subtract/add stock to a parent if the orderTemplate itself isn't orderable
      let orderTemplate: OrderTemplate = null
      if (item.orderTemplate.orderable) {
        orderTemplate = item.orderTemplate
      } else if (item.orderTemplate.parent && item.orderTemplate.parent.orderable) {
        orderTemplate = item.orderTemplate.parent
      } else {
        // We're not going to update stock
        continue
      }

      if (!map[orderTemplate.id]) {
        map[orderTemplate.id] = orderTemplate.stock || 0
      }
      const prevStock = map[orderTemplate.id]
      const newStock = prevStock + (mode === "add" ? item.amount : -item.amount)

      // Check for stock warnings
      const stockWarning = orderTemplate.stockWarning || 0
      if (prevStock > stockWarning && newStock <= stockWarning) {
        stockWarnings.push(orderTemplate.id)
      }

      map[orderTemplate.id] = newStock
    }
  }

  if (Object.keys(map).length === 0) return

  let query = "mutation {"
  for (const id in map) {
    query += `  ${id}: updateOrderTemplate(where: { id: "${id}" }, data: { stock: ${map[id]} }){ id stock }\n`
  }
  query += "}"

  await ctx.db.request(query)

  if (stockWarnings.length > 0) createNotificationForStockWarning(ctx, { id_in: stockWarnings })
}

async function addOrder(ctx: Context, input: OrderInput, status: OrderStatus) {

  const orderCreateInput = {
    orderedAt: new Date(),
    orderNumber: await getNextOrderNumberByContext(ctx, input.store),
    poNumber: input.poNumber,
    comments: createCommentCreateInput(ctx, input.comment),
    status,
    store: { connect: input.store },
    items: { create: [] },
    createdBy: { connect: { id: ctx.userId } },
    address: { create: input.address },
  } as OrderCreateInput

  const items = orderCreateInput.items.create as OrderItemCreateInput[]

  for (const order of input.order) {

    items.push(await createOrderCreateInput(ctx, order))
  }

  const { id } = await ctx.db.mutation.createOrder({ data: orderCreateInput })

  return id
}

async function createOrderCreateInput(ctx: Context, input: OrderItemInput) {

  const ot = await ctx.db.query.orderTemplate(
    { where: input.orderTemplate },
    "{ id properties { name price currency } product { id } }",
  )

  // TODO: Validate that amount is actually within the valid range
  const res = {
    amount: input.amount || ot.defaultOrderAmount,
    name: ot.properties.name,
    price: ot.properties.price,
    currency: ot.properties.currency,
    orderTemplate: { connect: input.orderTemplate },
    items: { create: [] },
    product: ot.product ? { connect: { id: ot.product.id } } : {},
  } as OrderItemCreateInput

  // Add the children
  if (input.children) {

    const items = res.items.create as OrderItemCreateInput[]

    for (const child of input.children) {
      items.push(await createOrderCreateInput(ctx, child))
    }
  }

  return res
}

function createCommentCreateInput(ctx: Context, comment: any) {

  const id = getUserId(ctx)

  return comment ? { create: { content: comment, user: { connect: { id } } } } as CommentCreateManyWithoutOrderInput : {}
}

export async function updateOrder(parent, args: { input: OrderUpdateInput, where: OrderWhereUniqueInput }, ctx: Context, info) {

  const authorized = await hasPermission(ctx, "UPDATE_ALL", "ORDER") ||
    (
      await hasPermission(ctx, "UPDATE_OWN", "ORDER") &&
      await hasOrder(ctx, args.where)
    )

  if (!authorized) throw new AuthorizationError("E1102")

  const previousOrderState = await ctx.db.query.order({ where: args.where }, "{ status }")

  if (args.input.status && args.input.status !== previousOrderState.status) {

    await createNotificationForOrderStatusUpdate(ctx, args.where, args.input.status)

    // Update the stock if needed
    if (args.input.status === "CANCELLED") {
      await updateStock(ctx, "add", args.where)
    } else if (previousOrderState.status === "CANCELLED") {
      await updateStock(ctx, "sub", args.where)
    }
  }

  if (args.input.comments && args.input.comments.create) {
    await createNotificationForOrderComment(ctx, args.where)
  }

  return ctx.db.mutation.updateOrder({ data: args.input, where: args.where }, info)
}
