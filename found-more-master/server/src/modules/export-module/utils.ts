import { Order, OrderItem, Properties } from "../../generated/prisma"

/**
 * Squashes an order into a list of elements
 *
 * @param orders The order to squash
 */
export function squashOrders(orders: Order[]) {

  // Create a summary map
  const result = {} as { [id: string]: { properties: Properties,  amount: number } }

  for (const order of orders) {
    squashItems(1, order.items, result)
  }

  return Object.values(result)
}

/**
 * Squashes an item into a list of elements
 *
 * @param item The item to squash
 */
export function squashItem(item: OrderItem) {

  // Create a summary map
  const result = {} as { [id: string]: { properties: Properties, amount: number } }

  squashItems(1, [item], result)

  return Object.values(result)
}

function squashItems(multiplier: number, items: OrderItem[], result: { [id: string]: { properties: Properties, amount: number } }) {

  for (const item of items) {

    const amount = item.amount * multiplier

    // There is a product, add it to the list
    if (item.product) {
      if (!result[item.product.id]) {
        result[item.product.id] = { properties: item.product.properties, amount }
      } else {
        result[item.product.id].amount += amount
      }
    }

    // Add the children
    if (item.items) {
      squashItems(amount, item.items, result)
    }
  }
}
