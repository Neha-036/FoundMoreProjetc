import selectedOrderItems from '../../../queries/selectedOrderItems.graphql'

export const addSelectedOrderItem = (_, props, { cache }) => {
  const { id, amount } = props
  const previous = cache.readQuery({ query: selectedOrderItems })
  const newSelectedOrderItem = { id, amount, __typename: 'SelectedOrderItem' }
  const data = {
    selectedOrderItems: [...previous.selectedOrderItems, newSelectedOrderItem]
  }
  cache.writeQuery({ query: selectedOrderItems, data })
  return newSelectedOrderItem
}
