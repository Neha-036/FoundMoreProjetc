import React from 'react'
import OrderSidebar from '../../components/layout/order-sidebar'
import SupportFaq from '../../components/support-faq'
import Notification from '../../components/notification'

const Support = () => (
  <OrderSidebar>
    <Notification />
    <SupportFaq />
  </OrderSidebar>
)

export default Support
