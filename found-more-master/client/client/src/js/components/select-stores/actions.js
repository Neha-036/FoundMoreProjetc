import shortid from 'shortid'
import selectedOrderItemsQuery from '../../../graphql/queries/selectedOrderItems.graphql'
import selectedOrderItemFragment from '../../../graphql/fragments/selectedOrderItem.graphql'
import { client } from '../../../index'
import ORDER_TEMPLATE_QUERY from './orderTemplateQuery.graphql'

const addOrderToStores = async (
  { storeOrderItems, idValues, ...state },
  stores
) => {
  const { cache } = client
  const { selectedOrderItems } = cache.readQuery({
    query: selectedOrderItemsQuery
  })
  const newIdValues = { ...idValues }
  let currentStoreIndex = 0

  const optionSelector = children => {
    const store = stores[currentStoreIndex]
    const { isoCode } = store.language
    const populatedChildren = children.map(child => newIdValues[child.id])
    const firstMatchedChild = populatedChildren.reduce((acc, curr, i) => {
      if (acc.length <= 1 && isoCode === curr.filterOptions.language.isoCode)
        return [children[i]]
      return acc
    }, [])
    return firstMatchedChild
  }

  const fetchOrderItems = async ({ id, amount, filterOptions }) => {
    const { data } = await client.query({
      query: ORDER_TEMPLATE_QUERY,
      variables: { where: { id } },
      fetchPolicy: 'network-only'
    })
    const newId = shortid.generate()
    const orderItemChild = {
      ...data.orderTemplate,
      id: newId,
      orderTemplateId: data.orderTemplate.id,
      amount
    }
    if (data.orderTemplate.children) {
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
      Object.assign(orderItemChild, {
        children: children.length > 0 ? children : null
      })
      if ((data.orderTemplate.filterOptions || {}).type) {
        Object.assign(orderItemChild, {
          selectedOptions: optionSelector(children)
        })
      } else {
        Object.assign(orderItemChild, {
          selectedOptions: [
            {
              id: newId,
              amount,
              filterOptions,
              orderTemplateId: id
            }
          ]
        })
      }
    }
    Object.assign(newIdValues, { [newId]: orderItemChild })
    return { id: newId }
  }

  const addOrderItemOrUpdateAmount = async (acc, orderItem) => {
    const accProm = await acc
    const populatedAcc = accProm.map(i => idValues[i.id])
    const orderItemIndex = populatedAcc.findIndex(
      i => i.orderTemplateId === orderItem.id
    )
    if (orderItemIndex !== -1) {
      Object.assign(newIdValues, {
        [populatedAcc[orderItemIndex].id]: {
          ...populatedAcc[orderItemIndex],
          amount: populatedAcc[orderItemIndex].amount + orderItem.amount
        }
      })
      return accProm
    }
    const newOrderItem = await fetchOrderItems(orderItem)
    return [...accProm, newOrderItem]
  }

  const newStoreOrderItemOrAddToExisting = async (acc, store, i) => {
    const accProm = await acc
    const storeIndex = accProm.findIndex(i => i.store.id === store.id)
    currentStoreIndex = i
    if (storeIndex !== -1) {
      return Object.assign([...accProm], {
        [storeIndex]: {
          store: accProm[storeIndex].store,
          orderItems: await selectedOrderItems.reduce(
            addOrderItemOrUpdateAmount,
            accProm[storeIndex].orderItems
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

  return {
    storeOrderItems: newStoreOrderItems,
    idValues: newIdValues,
    ...state
  }
}

export default () => ({
  addOrderToStores
})
