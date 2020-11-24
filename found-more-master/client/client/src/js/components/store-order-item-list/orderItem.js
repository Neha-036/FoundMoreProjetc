import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'redux-zero/react'
import IconButton from '../fragments/icon-button'
import VarationSwitcher from './variationSwitcher'
import AmountUpd from '../fragments/updateAmount'

const Variations = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  background-color: white;
  z-index: 1;
`

const AmountChanger = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.bpUpToDesktop}) {
    position: absolute;
    right: 0;
  }
`

const OrderItemWrapper = styled.div`
  max-width: calc(100% - 130px);
  display: flex;
  align-items: center;
  padding: 2px 0;
  & > p {
    line-height: 25px;
  }
`
const OrderItemName = styled.p`
  margin-left: 8px;
`
const Warning = styled.p`
  color: #ff6767;
`

class OrderItem extends Component {
  constructor() {
    super()
    this.state = {
      variationsOpen: true
    }
    this.toggleVariations = this.toggleVariations.bind(this)
  }
  toggleVariations() {
    this.setState({ variationsOpen: !this.state.variationsOpen })
  }
  render() {
    const { properties, amount, id, children, filterOptions } = this.props
    const { variationsOpen } = this.state
    const childrenWithVariations =
      (filterOptions || {}).type && children ? (
        <VarationSwitcher
          type={filterOptions.type}
          variations={children}
          {...this.props}
        />
      ) : (
        []
      )
    const notSelectedVar =
      children &&
      children
        .filter(({ filterOptions }) => filterOptions)
        .map(
          props =>
            props.selectedOptions.length < 1 && (
              <Warning key={props.id}>
                Please select a configuration to continue with the order
              </Warning>
            )
        )
    return (
      <React.Fragment>
        <OrderItemWrapper>
          {!!childrenWithVariations.length && (
            <IconButton
              onClick={this.toggleVariations}
              size="13px"
              icon={variationsOpen ? 'arrowUp' : 'arrowDown'}
            />
          )}
          <OrderItemName>{properties.name}</OrderItemName>
          <AmountChanger>
            {amount > 1 && (
              <IconButton
                size="13px"
                icon="minus"
                onClick={() => this.props.updateOrderItem(-1)}
              >
                -
              </IconButton>
            )}
            <AmountUpd value={amount} id={id} />
            <IconButton
              size="13px"
              icon="plus"
              onClick={() => this.props.updateOrderItem(1)}
            >
              -
            </IconButton>
            <IconButton
              size="13px"
              icon="times"
              marginLeft="20px"
              backgroundColor="#ff6767"
              onClick={this.props.removeOrderItem}
            >
              -
            </IconButton>
          </AmountChanger>
        </OrderItemWrapper>
        {childrenWithVariations && variationsOpen && (
          <Variations>{childrenWithVariations}</Variations>
        )}
        {childrenWithVariations && notSelectedVar}
      </React.Fragment>
    )
  }
}

const actions = (store, { id }) => ({
  updateOrderItem: ({ idValues }, amount) => ({
    idValues: {
      ...idValues,
      [id]: { ...idValues[id], amount: idValues[id].amount + amount }
    }
  }),
  removeOrderItem: ({ storeOrderItems }) => {
    const res = {
      storeOrderItems: storeOrderItems.reduce((acc, curr) => {
        const orderItems = curr.orderItems.filter(i => i.id !== id)
        if (orderItems.length) return [...acc, { ...curr, orderItems }]
        return acc
      }, [])
    }
    return res
  }
})

export default connect(null, actions)(OrderItem)
