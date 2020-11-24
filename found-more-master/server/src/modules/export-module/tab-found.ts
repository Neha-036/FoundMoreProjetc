import { Order, OrderWhereInput } from "../../generated/prisma"
import { primary, quaternary, secondary, tertiary } from "../color-module"
import { DataTab, ExportContext } from "./types"
import { squashItem } from "./utils"

export async function getTab(eCtx: ExportContext) {

  const where: OrderWhereInput = { store: { brand: eCtx.brandWhereUniqueInput } }

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
    createdBy {
      email
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
      product { id properties { name articleNumber } }
      items {
        amount
        product { id properties { name articleNumber } }
        items {
          amount
          product { id properties { name articleNumber } }
          items {
            amount
            product { id properties { name articleNumber } }
          }
        }
      }
    }
  }`)

  const data = []

  for (const order of orders) {
    for (const item of order.items) {
      data.push({ ...order, item, elements: squashItem(item) })
    }
  }

  return {
    name: "Found",
    description: "Full export, each row containing a sub-order. Containing all stores and orders, for Found use only.",
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
      { color: secondary, key: "createdBy.email", name: "Ordered By", description: "The email of the person who placed the order" },
      { color: secondary, key: "orderedAt", name: "Ordered At", description: "The order date" },
      { color: secondary, key: "status", name: "Status", description: "The order status" },
      { color: tertiary, key: "item.amount", name: "Amount", description: "The item amount" },
      { color: tertiary, key: "item.orderTemplate.properties.name", name: "Name", description: "The item name" },
      { color: tertiary, key: "item.price", name: "Price", description: "The item price" },
      {
        color: quaternary, key: "elements", name: "Elements (Amount, Article Number, Name)", description: "The elements in the order (multiple columns)", maxSubColumnRepeats: 10, subColumns: [
          { color: quaternary, key: "amount", name: "", description: "" },
          { color: quaternary, key: "properties.articleNumber", name: "", description: "" },
          { color: quaternary, key: "properties.name", name: "", description: "" },
        ],
      },
    ],
  } as DataTab
}
