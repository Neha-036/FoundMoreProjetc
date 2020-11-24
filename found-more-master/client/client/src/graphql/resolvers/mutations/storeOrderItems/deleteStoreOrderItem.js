import gql from 'graphql-tag'

export default {
  deleteStoreOrderItem: (_, { id }, { cache }) => {
    const query = gql`
      {
        storeOrderItems @client {
          __typename
          store {
            id
          }
          orderItems {
            __typename
            id
            amount
            properties {
              name
              articleNumber
            }
          }
        }
      }
    `
    const fragment = gql`
      fragment OrderItemAmount on OrderItem {
        __typename
        amount
      }
    `
    const storeOrderItems = cache
      .readQuery({ query })
      .storeOrderItems.map(storeOrderItem => {
        const orderItems = storeOrderItem.orderItems.filter(
          item => item.id !== id
        )
        return { ...storeOrderItem, orderItems }
      })

    cache.writeFragment({
      id: `OrderItem:${id}`,
      fragment,
      data: { amount: 0, __typename: 'OrderItem' }
    })

    storeOrderItems.forEach((storeOrderItem, i) => {
      if (storeOrderItem.orderItems.length === 0) storeOrderItems.splice(i, 1)
    })

    cache.writeQuery({ query, data: { storeOrderItems } })
    return null
  }
}
