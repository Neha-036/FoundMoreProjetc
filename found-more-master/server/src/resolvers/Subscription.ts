import { Context } from "../typings"

export const notifications = {
  subscribe: async (parent, args, ctx: Context, info) => {
    return ctx.db.subscription.notification(args, info)
  },
}

export const orderTemplates = {
  async subscribe(parent, args, ctx: Context, info) {
    return ctx.db.subscription.orderTemplate(args, info)
  },
}
