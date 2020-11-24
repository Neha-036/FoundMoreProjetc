import shortid from 'shortid'
import ORDER_TEMPLATE_QUERY from './orderTemplateQuery.graphql'
import selectedOrderItemsQuery from '@/graphql/queries/selectedOrderItems.graphql'
import storeOrderItemsQuery from '@/graphql/queries/storeOrderItems.graphql'
import selectedOrderItemFragment from '@/graphql/fragments/selectedOrderItem.graphql'
import { client } from '../../../../index'

export default {
  addOrderToStores: async (_, { stores }, { cache }) => {
    const { storeOrderItems } = cache.readQuery({ query: storeOrderItemsQuery })
    const { selectedOrderItems } = cache.readQuery({
      query: selectedOrderItemsQuery
    })

    const fetchOrderItems = async ({ id, amount, filterOptions }) => {
      const { data } = await client.query({
        query: ORDER_TEMPLATE_QUERY,
        variables: { where: { id } },
        fetchPolicy: 'network-only'
      })
      if (!data.orderTemplate.children) return data.orderTemplate
      const children = await Promise.all(
        data.orderTemplate.children.map(
          ({ id, defaultOrderAmount, filterOptions }) =>
            fetchOrderItems({
              id,
              amount: defaultOrderAmount * amount,
              filterOptions
            })
        )
      )
      return {
        ...data.orderTemplate,
        id: shortid.generate(),
        orderTemplateId: id,
        amount,
        selectedOptions: !filterOptions ? [data.orderTemplate] : [],
        children: children.length > 0 ? children : null
      }
    }

    const addOrderItemOrUpdateAmount = async (acc, orderItem) => {
      const accProm = await acc
      const orderItemIndex = accProm.findIndex(
        i => i.orderTemplateId === orderItem.id
      )
      if (orderItemIndex !== -1) {
        return Object.assign([...acc], {
          [orderItemIndex]: {
            ...acc[orderItemIndex],
            amount: acc[orderItemIndex].amount + orderItem.amount
          }
        })
      }
      const newOrderItem = await fetchOrderItems(orderItem)
      return [...accProm, newOrderItem]
    }

    const newStoreOrderItemOrAddToExisting = async (acc, store) => {
      const accProm = await acc
      const storeIndex = accProm.findIndex(i => i.store.id === store.id)
      if (storeIndex !== -1) {
        return Object.assign([...acc], {
          [storeIndex]: {
            store: acc[storeIndex].store,
            orderItems: await selectedOrderItems.reduce(
              addOrderItemOrUpdateAmount,
              acc[storeIndex].orderItems
            )
          }
        })
      }
      return [
        ...accProm,
        {
          store: { ...store, comment: '', poNumber: '' },
          orderItems: await Promise.all(selectedOrderItems.map(fetchOrderItems))
        }
      ]
    }

    const newStoreOrderItems = await stores.reduce(
      newStoreOrderItemOrAddToExisting,
      storeOrderItems
    )

    cache.writeData({ data: { storeOrderItems: newStoreOrderItems } })
    cache.writeData({ data: { selectedOrderItems: [] } })

    selectedOrderItems.forEach(item => {
      cache.writeFragment({
        id: `SelectedOrderItem:${item.id}`,
        fragment: selectedOrderItemFragment,
        data: {
          ...item,
          amount: 0
        },
        fragmentName: 'SelectedOrderItemFragment'
      })
    })

    return null
  }
}
