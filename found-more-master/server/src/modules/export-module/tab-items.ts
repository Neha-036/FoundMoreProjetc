import { OrderTemplate, OrderTemplateWhereInput } from "../../generated/prisma"
import { primary } from "../color-module"
import { DataTab, ExportContext } from "./types"

export async function getTab(eCtx: ExportContext) {

  const where: OrderTemplateWhereInput = { brand: eCtx.brandWhereUniqueInput, orderable: true }

  const orderTemplates: OrderTemplate[] = await eCtx.db.query.orderTemplates({ where }, `
    {
      stock
      stockWarning
      note
      properties {
        name
        description
        articleNumber
        language {
          name
        }
        depthMm
        widthMm
        heightMm
        weightG
        color
        material
        product {
          properties {
            price
            currency
          }
        }
      }
    }
  `)

  return {
    name: "Items",
    description: "Export for the orderable items (amount of products)",
    data: orderTemplates,
    columns: [
      { color: primary,   key: "properties.name",            name: "Name",          description: "Name of the item" },
      { color: primary,   key: "note",                       name: "Note",          description: "Note on the item" },
      { color: primary,   key: "stock",                      name: "Stock",         description: "Stock of the item" },
      { color: primary,   key: "stockWarning",               name: "Stock Warning", description: "Stock Warning of the item" },

      { color: primary,   key: "properties.articleNumber",              name: "Article Number", description: "Article number item" },
      { color: primary,   key: "properties.language.name",               name: "Language", description: "Language of the item" },
      { color: primary,   key: "properties.depthMm",               name: "depthMm", description: "depthMm of the item" },
      { color: primary,   key: "properties.widthMm",               name: "widthMm", description: "widthMm of the item" },
      { color: primary,   key: "properties.heightMm",               name: "heightMm", description: "heightMm of the item" },
      { color: primary,   key: "properties.weightG",               name: "weightG", description: "weightG of the item" },
      { color: primary,   key: "properties.color",               name: "color", description: "color of the item" },
      { color: primary,   key: "properties.material",               name: "material", description: "material of the item" },
      { color: primary,   key: "properties.product.properties.price",               name: "price", description: "price of the item" },
      { color: primary,   key: "properties.product.properties.currency",               name: "currency", description: "currency of the item" },
    ],
  } as DataTab
}
