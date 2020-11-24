import { Order, OrderWhereInput } from "../../generated/prisma"
import { primary, secondary } from "../color-module"
import { DataTab, ExportContext } from "./types"
import { squashOrders } from "./utils"

export async function getTab(eCtx: ExportContext) {

  const where: OrderWhereInput = { store: { brand: eCtx.brandWhereUniqueInput } }

  const orders: Order[] = await eCtx.db.query.orders({ where }, `
    {
      items {
        amount
        product { id properties { name articleNumber price currency description weightG widthMm heightMm depthMm color material size language { isoCode } } }
        items {
          amount
          product { id properties { name articleNumber price currency description weightG widthMm heightMm depthMm color material size language { isoCode } } }
          items {
            amount
            product { id properties { name articleNumber price currency description weightG widthMm heightMm depthMm color material size language { isoCode } } }
            items {
              amount
              product { id properties { name articleNumber price currency description weightG widthMm heightMm depthMm color material size language { isoCode } } }
            }
          }
        }
      }
    }
  `)

  return {
    name: "Supplier",
    description: "Export for the supplier (amount of products)",
    data: squashOrders(orders),
    columns: [
      { color: primary,   key: "amount",                       name: "Amount",         description: "The amount to produce" },
      { color: primary,   key: "properties.articleNumber",     name: "Article Number", description: "The product's article number" },
      { color: primary,   key: "properties.name",              name: "Name",           description: "The product's name" },
      { color: secondary, key: "properties.price",             name: "Price",          description: "The product's price" },
      { color: secondary, key: "properties.currency",          name: "Currency",       description: "The product's currency" },
      { color: secondary, key: "properties.description",       name: "Description",    description: "The product's description" },
      { color: secondary, key: "properties.weightG",          name: "WeightKg",       description: "The product's weight (kg)" },
      { color: secondary, key: "properties.widthMm",           name: "WidthMm",        description: "The product's width (mm)" },
      { color: secondary, key: "properties.heightMm",          name: "HeightMm",       description: "The product's height (mm)" },
      { color: secondary, key: "properties.depthMm",           name: "DepthMm",        description: "The product's depth (mm)" },
      { color: secondary, key: "properties.color",             name: "Color",          description: "The product's color" },
      { color: secondary, key: "properties.material",          name: "Material",       description: "The product's material" },
      { color: secondary, key: "properties.size",              name: "Size",           description: "The product's size" },
      { color: secondary, key: "properties.language.isoCode",  name: "Language",       description: "The product's language" },
    ],
  } as DataTab
}
