import React from 'react'
import Truck from './truck'
import { NavLink } from 'react-router-dom'
import Counter from '@/pages/my-order/counter'
import styled from 'styled-components'

const CounterContainer = styled.div`
  position: absolute;
  top: 12px;
  left: 16px;
`
const OpenOrders = () => {
  return (
    <NavLink to="/openorders">
      <Truck />
      <CounterContainer>
        <Counter />
      </CounterContainer>
    </NavLink>
  )
}

export default OpenOrders
