import React from 'react'
import styled from 'styled-components'
import Title from '../../components/fragments/title'
import Spacing from '../../components/fragments/spacing'

import MyOrderDetail from '../../components/my-order-detail'

const OrderListContainer = styled.div`
  overflow-y: auto;
  margin-bottom: 110px;
  & > button {
    position: absolute;
    bottom: 40px;
    @media (min-width: ${({ theme }) => theme.bpTablet}) {
      width: 40%;
    }
  }
`

const MyOrder = () => (
  <React.Fragment>
    <Title>My orders</Title>
    <Spacing space="32px" />
    <OrderListContainer>
      <MyOrderDetail />
    </OrderListContainer>
  </React.Fragment>
)

export default MyOrder
