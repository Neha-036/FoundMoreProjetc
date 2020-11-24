import { Order, OrderWhereInput } from "../../generated/prisma"
import { primary, quaternary, secondary } from "../color-module"
import { DataTab, ExportContext } from "./types"
import { squashItem } from "./utils"

// NOTE: CURRENTLY NOT USED, KEPT FOR REFERENCE IN THE FUTURE

export async function getTab(eCtx: ExportContext) {

  const where: OrderWhereInput = { store: { brand: eCtx.brandWhereUniqueInput } }

  const orders: Order[] = await eCtx.db.query.orders({ where }, `{
    orderNumber
    orderedAt
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
    name: "Handling",
    description: "Export for handling, each row containing a sub-order",
    data,
    columns: [
      { color: primary, key: "orderNumber", name: "Order Number", description: "The unique order number" },
      { color: primary, key: "orderedAt", name: "Ordered At", description: "The order date" },
      { color: primary, key: "status", name: "Status", description: "The order status" },
      { color: secondary, key: "item.amount", name: "Amount", description: "The item amount" },
      { color: secondary, key: "item.orderTemplate.properties.name", name: "Name", description: "The item name" },
      { color: secondary, key: "item.price", name: "Price", description: "The item price" },
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
