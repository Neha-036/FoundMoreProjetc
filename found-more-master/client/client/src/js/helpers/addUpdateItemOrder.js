import { cache } from '../../index'
import { addSelectedOrderItem } from '@/graphql/resolvers/mutations/selectedOrderItems/addSelectedOrderItem'
import { updateSelectedOrderItem } from '@/graphql/resolvers/mutations/selectedOrderItems/updateSelectedOrderItem'
import SELECTED_ORDER_ITEMS_QUERY from '@/graphql/queries/selectedOrderItems.graphql'

export const addOrUpdateItem = ({ id, amount, ...props }) =>
  new Promise((resolve, reject) => {
    try {
      const { selectedOrderItems } = cache.readQuery({
        query: SELECTED_ORDER_ITEMS_QUERY
      })
      const inOrder = selectedOrderItems.some(item => item.id === id)
      if (inOrder) {
        updateSelectedOrderItem(
          null,
          {
            id,
            amount: amount || '+1',
            ...props
          },
          { cache }
        )
      } else {
        addSelectedOrderItem(
          null,
          { ...props, id, amount: amount || 1 },
          { cache }
        )
      }
      resolve()
    } catch (e) {
      reject(e)
    }
  })
