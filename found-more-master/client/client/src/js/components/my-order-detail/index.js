import React from 'react'
import { connect } from 'redux-zero/react'
import OrderConfirm from './orderConfirm'
import StoreOrder from './storeOrder'

const mapProps = ({ storeOrderItems, idValues }) => {
  const getIdValue = ({ id }) => idValues[id]
  const storeOrderItem = ({ store, orderItems }) => ({
    store,
    orderItems: orderItems.map(getIdValue)
  })
  return { storeOrderItems: storeOrderItems.map(storeOrderItem) }
}

export default connect(mapProps)(({ storeOrderItems, store, ...props }) => (
  <React.Fragment>
    {storeOrderItems.length ? (
      storeOrderItems.map((storeOrderItem, i) => (
        <StoreOrder
          index={i}
          key={storeOrderItem.store.id}
          {...props}
          {...storeOrderItem}
        />
      ))
    ) : (
      <h5>You don&#39;t have any projects in your order, please add them.</h5>
    )}
    {!!storeOrderItems.length && <OrderConfirm />}
  </React.Fragment>
))
