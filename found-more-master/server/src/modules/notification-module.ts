import { NotificationCreateInput, OrderStatus, OrderTemplateWhereInput, OrderWhereInput, OrderWhereUniqueInput, User } from "../generated/prisma"
import { Context } from "../typings"
import { getClientOrderLink, getClientOrdersLink, getFoundDashboardLink, getFoundOrderLink, getFoundOrdersLink } from "./link-module"
import { FoundLogger } from "./logger-module"
import { sendEmail } from "./mail-module"
import { NotificationEmail } from "./mail-module/emails/notification/type"
import { getUserId } from "./token-module"
import { userCanUpdateOrderStatus, userIsFound } from "./user-module"

/*
*
*  Nieuwe orders:
*
*    Voor de besteller zelf:
*
*      title: `Succesfully added ${orders.length} orders`,
*        content: `For more details, refer the 'Orders' page`,
*        link: Client-Orders
*
*        Voor ANDERE gebruikers die bij de stores horen waarvoor de orders geplaatst zijn:
*
*      (Found):
*
*        geen manager voor store & state WAITING_FOR_APPROVAL:
*
*          title: `New order(s) waiting for approval`,
*            content: `One or more orders by ${user.firstName} from ${user.brand.name} could not be approved by the manager and are waiting for your approval.`,
*            link: Found-Orders
*
*            (Other user):
*
*        manager & state WAITING_FOR_APPROVAL:
*
*          title: `New order(s) waiting for approval`
*            content: `One or more orders by ${user.firstName} from ${user.brand.name} are waiting for your approval.`
*            link: Client-Orders
*
*            anders
*
*          title: `${user.firstName} from ${user.brand.name} placed one or more orders`,
*            content: `For more details, refer the 'Orders' page`,
*            link: Client-Orders
*
*            Nieuwe statusupdate:
*
*    Voor ANDERE gebruikers die bij de store horen waarvoor de order geplaatst is:
*
*      link: (Found) ? Found-Order-Detail : Client-Order-Detail
*
*        Als state PENDING:
*
*        (Found):
*
*          title: `New order #${order.orderNumber}`
*            content: `${user.firstName} from ${user.brand.name} has approved order #${order.orderNumber}`,
*
*            (Other user):
*
*          title: `Order #${order.orderNumber} approved`,
*            content: `${user.firstName} from ${user.brand.name} has approved order #${order.orderNumber}.`,
*
*            Andere state:
*
*        title: `Status update for order #${order.orderNumber}`,
*          content: `${user.firstName} from ${user.brand.name} has changed the status of order #${order.orderNumber} to: ${status}.`,
*
*          Nieuwe comment:
*
*    Voor ANDERE gebruikers die bij de store horen waarvoor de order geplaatst is:
*
*      title: `New comment on order #${order.orderNumber}`,
*        content: `${user.firstName} from ${user.brand.name} has added a comment to order #${order.orderNumber}.`
*        link: (Found andere link)
*
*
*/

export async function createNotificationForOrderStatusUpdate(ctx: Context, orderWhereUniqueInput: OrderWhereUniqueInput, status: OrderStatus) {

  const id = getUserId(ctx)

  const order = await ctx.db.query.order({ where: orderWhereUniqueInput }, `{
    id
    orderNumber
    store {
      brand { domain }
      users {
        id
        brand {
          name
          domain
        }
      }
    }
  }`)

  const user = await ctx.db.query.user({ where: { id } }, `{
    firstName
    lastName
    brand {
      name
      domain
    }
  }`)

  // Send a notification to the other users
  for (const storeUser of order.store.users) {

    if (storeUser.id !== user.id) {

      const link = userIsFound(storeUser) ?
        getFoundOrderLink(order.id) :
        getClientOrderLink(order.store.brand.domain, order.id)

      if (status === "PENDING") {

        if (userIsFound(storeUser)) {

          await createNotification(ctx, {
            title: `New order #${order.orderNumber}`,
            content: `${user.firstName} from ${user.brand.name} has placed an approved order #${order.orderNumber}.`,
            user: { connect: { id: storeUser.id } },
            link,
          })
        } else {

          await createNotification(ctx, {
            title: `Order #${order.orderNumber} approved`,
            content: `${user.firstName} from ${user.brand.name} has approved order #${order.orderNumber}.`,
            user: { connect: { id: storeUser.id } },
            link,
          })
        }
      } else {

        await createNotification(ctx, {
          title: `Status update for order #${order.orderNumber}`,
          content: `${user.firstName} from ${user.brand.name} has changed the status of order #${order.orderNumber} to ${status}.`,
          user: { connect: { id: storeUser.id } },
          link,
        })
      }
    }
  }
}

export async function createNotificationForNewOrders(ctx: Context, orderWhereInput: OrderWhereInput[], status: OrderStatus) {

  const id = getUserId(ctx)

  const orders = await ctx.db.query.orders({ where: { OR: orderWhereInput } }, `{
    id
    orderNumber
    status
    store {
      brand { domain }
      users {
        id
        brand {
          name
          domain
        }
        role {
          permissions {
            model
            action
          }
        }
      }
    }
  }`)

  if (orders.length <= 0) return console.warn("Did not find any matching orders, this should not happen")

  // Get domain
  const domain = orders[0].store.brand.domain

  // Get the user
  const user = await ctx.db.query.user({ where: { id } }, `{
    id
    firstName
    lastName
    brand {
      name
      domain
    }
  }`)

  // Send the personal notification
  await createNotification(ctx, {
    title: `Succesfully added ${orders.length} orders`,
    content: "For more details, refer the 'Orders' page",
    link: getClientOrdersLink(domain),
    user: { connect: { id } },
  })

  // Get related userIds
  const storeUsers = [] as User[]
  for (const order of orders) {
    for (const storeUser of order.store.users) {
      if (!storeUsers.find((u) => u.id === storeUser.id)) {
        storeUsers.push(storeUser)
      }
    }
  }

  // Check if someone else can approve
  const hasSomeoneToApprove = storeUsers.find((u) =>
    !userIsFound(u) && userCanUpdateOrderStatus(u),
  )

  // Send the other notifications
  for (const storeUser of storeUsers) {

    if (storeUser.id !== user.id) {

      if (userIsFound(storeUser)) {

        if (!hasSomeoneToApprove && status === "WAITING_FOR_APPROVAL") {

          // Only send to found when there is no one else to approve
          await createNotification(ctx, {
            title: `New order(s) waiting for approval`,
            content: `One or more orders by ${user.firstName} from ${user.brand.name} could not be approved by the manager and are waiting for your approval.`,
            link: getFoundOrdersLink(),
            user: { connect: { id: storeUser.id } },
          })
        }
      } else {

        if (userCanUpdateOrderStatus(storeUser) && status === "WAITING_FOR_APPROVAL") {

          // If the user can approve, send the approval notification
          await createNotification(ctx, {
            title: `New order(s) waiting for approval`,
            content: `One or more orders by ${user.firstName} from ${user.brand.name} are waiting for your approval.`,
            link: getClientOrdersLink(domain),
            user: { connect: { id: storeUser.id } },
          })
        } else {

          // A colleague has ordered, send a minor notification
          await createNotification(ctx, {
            title: `${user.firstName} from ${user.brand.name} placed one or more orders`,
            content: "For more details, refer to the 'Orders' page.",
            link: getClientOrdersLink(domain),
            user: { connect: { id: storeUser.id } },
          })
        }
      }
    }
  }
}

export async function createNotificationForOrderComment(ctx: Context, orderWhereUniqueInput: OrderWhereUniqueInput) {

  const id = getUserId(ctx)

  const order = await ctx.db.query.order({ where: orderWhereUniqueInput }, `{
    id
    orderNumber
    store {
      brand { domain }
      users {
        id
        brand {
          domain
        }
      }
    }
  }`)

  const user = await ctx.db.query.user({ where: { id } }, `{
    firstName
    lastName
    brand {
      name
    }
  }`)

  for (const storeUser of order.store.users) {

    if (storeUser.id !== user.id) {

      const link = userIsFound(storeUser) ?
        getFoundOrderLink(order.id) :
        getClientOrderLink(order.store.brand.domain, order.id)

      // Always inform other users
      await createNotification(ctx, {
        title: `New comment`,
        content: `${user.firstName} from ${user.brand.name} has added a comment to order #${order.orderNumber}.`,
        user: { connect: { id: storeUser.id } },
        link,
      })
    }
  }
}

export async function createNotificationForImportLog(ctx: Context, logger: FoundLogger) {

  const id = getUserId(ctx)

  await createNotification(ctx, {
    title: `Import finished`,
    content: logger.getMessagesAsString(),
    user: { connect: { id } },
    link: getFoundDashboardLink(),
  })
}

export async function createNotificationForStockWarning(ctx: Context, orderTemplateWhereInput: OrderTemplateWhereInput) {

  const ots = await ctx.db.query.orderTemplates({ where: orderTemplateWhereInput }, `{
    id
    properties {
      name
    }
    stock
    brand {
      contactPerson {
        id
      }
    }
  }`)

  const rows = ots.map((ot) => `${ot.properties.name} has ${ot.stock} items left in stock`).join("\n")

  if (ots.length > 0 && ots[0].brand.contactPerson) {

    // Send the notification to the contact person of the first ot
    await createNotification(ctx, {
      title: `(Almost) out of stock`,
      content: rows,
      user: { connect: { id: ots[0].brand.contactPerson.id } },
      link: getFoundDashboardLink(),
    })

  } else {

    // A warning will do for now
    console.warn("No order template or no brand contact person found.")
  }
}

async function createNotification(ctx: Context, data: NotificationCreateInput) {

  const notification = await ctx.db.mutation.createNotification({ data }, `{
    id
    title
    content
    link
    user {
      email
      firstName
      brand { domain name contactPerson { email phoneNumber } }
      sendNotificationToEmail
    }
  }`)

  if (notification.user.sendNotificationToEmail) {

    await sendEmail<NotificationEmail>("notification", {
      user: notification.user,
      link: notification.link,
      notification,
    })
  }
}
