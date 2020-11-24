import React from 'react'
import styled from 'styled-components'
import { connect } from 'redux-zero/react'

export const Amount = styled.input`
  min-width: 10px;
  max-width: 40px;
  margin: 0 6px;
  padding: 2px;
  text-align: center;
  color: ${({ theme }) => theme.colorText};
  font-family: ${({ theme }) => theme.fontBold};
  font-size: 16px;
  border-bottom: 2px solid ${({ theme }) => theme.colorText};
  border-top: none;
  border-left: none;
  border-right: none;
  -moz-appearance: textfield;
  &::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

const AmountUpd = ({ updateStoreOrderItem, value }) => (
  <Amount
    value={value}
    type="number"
    onChange={e => updateStoreOrderItem(parseInt(e.target.value || 0, 10))}
  />
)

const actions = (store, { id }) => ({
  updateStoreOrderItem: ({ idValues }, amount) => ({
    idValues: { ...idValues, [id]: { ...idValues[id], amount } }
  })
})

export default connect(null, actions)(AmountUpd)
