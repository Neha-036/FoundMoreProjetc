import SelectedOrderItemFragment from '../../../fragments/selectedOrderItem.graphql'
import selectOrderItems from '../../../queries/selectedOrderItems.graphql'

export const updateSelectedOrderItem = (
  _,
  { id, amount, properties },
  { cache }
) => {
  let newAmount = amount
  if (typeof newAmount === 'string') {
    const prevAmount = cache.readFragment({
      id: `SelectedOrderItem:${id}`,
      fragment: SelectedOrderItemFragment,
      fragmentName: 'SelectedOrderItemFragment'
    }).amount
    if (newAmount.charAt(0) === '+') {
      newAmount = parseInt(prevAmount, 10) + parseInt(newAmount.charAt(1), 10)
    } else if (newAmount.charAt(0) === '-') {
      newAmount = parseInt(prevAmount, 10) - parseInt(newAmount.charAt(1), 10)
    }
  }
  if (newAmount === 0) {
    const previous = cache
      .readQuery({ query: selectOrderItems })
      .selectedOrderItems.filter(item => item.id !== id)
    cache.writeQuery({
      query: selectOrderItems,
      data: { selectedOrderItems: previous }
    })
  }
  cache.writeFragment({
    id: `SelectedOrderItem:${id}`,
    fragment: SelectedOrderItemFragment,
    data: {
      id,
      properties,
      amount: newAmount,
      __typename: 'SelectedOrderItem'
    },
    fragmentName: 'SelectedOrderItemFragment'
  })
  return null
}
