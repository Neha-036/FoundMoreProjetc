import selectedOrderItems from '../../../queries/selectedOrderItems.graphql'

const deleteOrderItem = {
  deleteSelectedOrderItem: (_, { id }, { cache }) => {
    const previous = cache.readQuery({ query: selectedOrderItems })
    const data = {
      orderItems: previous.selectedOrderItems.filter(item => item.id !== id)
    }
    cache.writeQuery({ query: selectedOrderItems, data })
    return null
  }
}

export default deleteOrderItem
