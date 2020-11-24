import SelectedOrderItemFragment from '../../fragments/selectedOrderItem.graphql'

export default {
  selectedOrderItem: (_, { id }, { cache }) =>
    cache.readFragment({
      fragment: SelectedOrderItemFragment,
      id: `SelectedOrderItem:${id}`,
      fragmentName: 'SelectedOrderItemFragment'
    })
}
