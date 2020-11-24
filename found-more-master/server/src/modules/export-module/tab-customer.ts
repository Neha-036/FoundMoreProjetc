
import { Order, OrderWhereInput } from "../../generated/prisma"
import { primary, secondary, tertiary } from "../color-module"
import { DataTab, ExportContext } from "./types"

export async function getTab(eCtx: ExportContext) {
  const isFoundUser = await eCtx.db.query.user({ where: { id: eCtx.userId } }, "{ brand { domain } }").then((user) => user.brand.domain === "found")
  const where: OrderWhereInput = (eCtx.type === "found" || isFoundUser) ?
    { store: { brand: eCtx.brandWhereUniqueInput } } :
    { store: { brand: eCtx.brandWhereUniqueInput, users_some: { id: eCtx.userId } } }

  const orders: Order[] = await eCtx.db.query.orders({ where }, `{
    store {
      storeNumber
      name
    }
    address {
      street
      number
      postalCode
      city
      countryCode
    }
    orderNumber
    orderedAt
    status
    items {
      amount
      price
      orderTemplate {
        properties {
          name
        }
      }
    }
  }`)

  const data = []

  for (const order of orders) {
    for (const item of order.items) {
      data.push({ ...order, item })
    }
  }

  return {
    name: "Customer",
    description: "Customer export, each row containing a sub-order",
    data,
    columns: [
      { color: primary, key: "store.storeNumber", name: "Store Number", description: "The store number (can be empty)" },
      { color: primary, key: "store.name", name: "Name", description: "The store's name (can be empty)" },
      { color: primary, key: "address.street", name: "Street", description: "The delivery location (street)" },
      { color: primary, key: "address.number", name: "Number", description: "The delivery location (number)" },
      { color: primary, key: "address.postalCode", name: "Postal Code", description: "The delivery location (postal code)" },
      { color: primary, key: "address.city", name: "City", description: "The delivery location (city)" },
      { color: primary, key: "address.countryCode", name: "Country Code", description: "The delivery location (country code)" },
      { color: secondary, key: "orderNumber", name: "Order Number", description: "The unique order number" },
      { color: secondary, key: "orderedAt", name: "Ordered At", description: "The order date" },
      { color: secondary, key: "status", name: "Status", description: "The order status" },
      { color: tertiary, key: "item.amount", name: "Amount", description: "The item amount" },
      { color: tertiary, key: "item.orderTemplate.properties.name", name: "Name", description: "The item name" },
      { color: tertiary, key: "item.price", name: "Price", description: "The item price" },
    ],
  } as DataTab
}
