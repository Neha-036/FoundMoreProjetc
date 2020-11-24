import OrderItemFragment from '@/graphql/fragments/orderItem.graphql'
import StoreFragment from '@/graphql/fragments/store.graphql'

export default {
  updateStoreOrderItem: (
    _,
    { storeId, orderId, amount, comment, poNumber, deliveryAddress },
    { cache }
  ) => {
    const orderItem = cache.readFragment({
      id: `OrderItem:${orderId}`,
      fragment: OrderItemFragment,
      fragmentName: 'OrderItemFragment'
    })
    const store = cache.readFragment({
      id: `Store:${storeId}`,
      fragment: StoreFragment,
      fragmentName: 'StoreFragment'
    })

    if (amount) {
      let newAmount = amount
      if (typeof newAmount === 'string') {
        const prevAmount = orderItem.amount
        if (newAmount.charAt(0) === '+') {
          newAmount =
            parseInt(prevAmount, 10) + parseInt(newAmount.charAt(1), 10)
        } else if (newAmount.charAt(0) === '-') {
          newAmount =
            parseInt(prevAmount, 10) - parseInt(newAmount.charAt(1), 10)
        }
      }
      Object.assign(orderItem, { amount: newAmount })
    }

    if (typeof comment === 'string') Object.assign(store, { comment })
    if (typeof poNumber === 'string') Object.assign(store, { poNumber })
    if (deliveryAddress) Object.assign(store, { deliveryAddress })

    if (amount) {
      cache.writeFragment({
        id: `OrderItem:${orderId}`,
        fragment: OrderItemFragment,
        data: orderItem,
        fragmentName: 'OrderItemFragment'
      })
    }

    if (
      typeof comment === 'string' ||
      typeof poNumber === 'string' ||
      deliveryAddress
    ) {
      cache.writeFragment({
        id: `Store:${storeId}`,
        fragment: StoreFragment,
        data: store,
        fragmentName: 'StoreFragment'
      })
    }

    return null
  }
}
