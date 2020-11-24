import React from 'react'
import styled from 'styled-components'
import { connect } from 'redux-zero/react'

const CounterContainer = styled.div`
  border-radius: 50%;
  background-color: #ff6767;
  width: 16px;
  height: 16px;
`
const Number = styled.p`
  color: #fff;
  margin: 0 auto;
  line-height: 14px;
  text-align: center;
  font-family: ${({ theme }) => theme.fontBold};
`

const Counter = ({ storeOrderItems }) =>
  storeOrderItems.length > 0 && (
    <CounterContainer>
      <Number>{storeOrderItems.length}</Number>
    </CounterContainer>
  )

const mapProps = ({ storeOrderItems }) => ({ storeOrderItems })

export default connect(mapProps)(Counter)
