export default (state, ownProps) => ({
  updateStoreOrderItem: (
    { storeOrderItems },
    { deliveryAddress, comment, poNumber }
  ) => {
    const storeOrderItemIndex = storeOrderItems.findIndex(
      i => i.store.id === ownProps.store.id
    )
    if (storeOrderItemIndex !== -1) {
      const storeOrderItem = { ...storeOrderItems[storeOrderItemIndex] }
      if (deliveryAddress)
        Object.assign(storeOrderItem.store, { deliveryAddress })
      if (comment) Object.assign(storeOrderItem.store, { comment })
      if (poNumber) Object.assign(storeOrderItem.store, { poNumber })
      const res = Object.assign([...storeOrderItems], {
        [storeOrderItemIndex]: storeOrderItem
      })
      return { storeOrderItems: res }
    }
    return { storeOrderItems }
  }
})
