import * as graphviz from "graphviz"
import fetch from "node-fetch"
import { OrderTemplate, OrderTemplateWhereUniqueInput, Prisma, Product } from "../generated/prisma"
import { primary, secondary } from "./color-module"
import { uploadBuffer } from "./file-module"

export async function createFileFromOrderTemplate(db: Prisma, where: OrderTemplateWhereUniqueInput) {

  // Create digraph G
  const g = await createGraphFromOrderTemplate(db, where)

  // Get the graph svg (buffer)
  const buffer = await graphToSVGBuffer(g)

  // Upload the svg
  const file = await uploadBuffer("graph.svg", buffer)

  return { file, dot: g.to_dot() }
}

/**
 * Makes a call to the graphviz server and returns the corresponding buffer
 * @param g The graph
 */
async function graphToSVGBuffer(g: graphviz.Graph) {

  const url = "http://graphviz:8080/svg"
  const response = await fetch(url, {
    method: "POST",
    body: g.to_dot(),
  })

  return await response.buffer()
}

async function createGraphFromOrderTemplate(db: Prisma, where: OrderTemplateWhereUniqueInput) {

  const g = graphviz.digraph("G")

  g.set("rankdir", "LR")

  await rec(db, where, g, null)

  return g
}

async function rec(db: Prisma, where: OrderTemplateWhereUniqueInput, g: graphviz.Graph, parentNode?: graphviz.Node) {

  const ot = await db.query.orderTemplate({ where }, `{
    id
    defaultOrderAmount
    filterOptions {
      type
      language { isoCode }
      storeType
    }
    properties {
      name
      articleNumber
    }
    children {
      id
    }
    product {
      id
      properties {
        name
        articleNumber
      }
    }
  }`)

  const otNode = g.addNode(toOTLabel(ot), { color: "#" + primary })
  otNode.set("style", "filled")

  if (parentNode) g.addEdge(parentNode, otNode)

  if (ot.product) {
    const productNode = g.addNode(toProductLabel(ot.product), { color: "#" + secondary, shape: "box" })
    productNode.set("style", "filled")
    g.addEdge(otNode, productNode)
  }

  for (const child of ot.children) {
    await rec(db, { id: child.id }, g, otNode)
  }
}

function toOTLabel(p: OrderTemplate) {
  if (p.filterOptions) {
    return `${p.properties.name} (${p.properties.articleNumber}/${p.id})
amount: ${p.defaultOrderAmount}
filterOptions:
 - type: ${p.filterOptions.type ? p.filterOptions.type : "-"}
 - language: ${p.filterOptions.language ? p.filterOptions.language.isoCode : "-"}
 - storeType: ${p.filterOptions.storeType ? p.filterOptions.storeType : "-"}
 - currency: ${p.filterOptions.currency ? p.filterOptions.currency : "-"}`
  } else {
    return `${p.properties.name} (${p.properties.articleNumber}/${p.id})
amount: ${p.defaultOrderAmount}`
  }
}

function toProductLabel(p: Product) {
  return `${p.properties.name} (${p.properties.articleNumber})`
}
