import React from 'react'
import OrderSidebar from '../../components/layout/order-sidebar'
import OrderStatus from '../../components/order-status'
import AuthRoute from '../../helpers/authRoute'
import OrderDetail from '../../components/order-detail'

const Orders = () => (
  <OrderSidebar>
    <AuthRoute exact path="/orders" component={OrderStatus} />
    <AuthRoute exact path="/orders/detail/:id" component={OrderDetail} />
  </OrderSidebar>
)

export default Orders
