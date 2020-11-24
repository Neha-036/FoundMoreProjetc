import storeOrderItems from '../../../queries/storeOrderItems.graphql'

export default {
  clearStoreOrderItems: (_, vars, { cache }) => {
    cache.writeQuery({ query: storeOrderItems, data: { storeOrderItems: [] } })
    return null
  }
}
