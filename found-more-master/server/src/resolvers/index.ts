import { AuthPayload } from "./AuthPayload"
import * as auth from "./Mutation/auth"
import * as brand from "./Mutation/brand"
import * as exp from "./Mutation/export"
import * as imp from "./Mutation/import"
import * as notification from "./Mutation/notification"
import * as order from "./Mutation/order"
import * as orderTemplate from "./Mutation/order-template"
import * as product from "./Mutation/product"
import * as productCategory from "./Mutation/product-category"
import * as store from "./Mutation/store"
import * as supplier from "./Mutation/supplier"
import * as support from "./Mutation/support"
import * as user from "./Mutation/user"
import * as Query from "./Query"
import * as Subscription from "./Subscription"

export default {
  Query,
  Mutation: {
    ...auth,
    ...brand,
    ...notification,
    ...order,
    ...orderTemplate,
    ...product,
    ...productCategory,
    ...store,
    ...supplier,
    ...support,
    ...user,
    ...exp,
    ...imp,
  },
  Subscription,
  AuthPayload,
}
