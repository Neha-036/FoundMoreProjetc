import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'redux-zero/react'
import styled from 'styled-components'
import IconButton from '../fragments/icon-button'
import Button, { ButtonWrapper } from '../fragments/button'
import OrderItem from './orderItem'

const StoreOrderItemWrapper = styled.div`
  position: relative;
`
const ButtonContainer = styled.div`
  position: fixed;
  bottom: 0px;
  width: ${props => (props.expanded ? '100%' : '31%')};
  height: 80px;
  display: flex;
  align-items: center;
  background-color: white;
  box-shadow: 0 -4px 4px -7px #333;
  margin-left: -10px;
  ${ButtonWrapper} {
    width: ${props => (props.expanded ? '31%' : '100%')};
    margin-left: 10px;
  }
`
const ButtonContainerUrl = styled(ButtonContainer)`
  width: calc(100% - 30px);
  ${ButtonWrapper} {
    width: 31%;
    @media (max-width: ${({ theme }) => theme.bpUpToTablet}) {
      width: calc(100% - 10px);
    }
  }
`

const Store = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

class StoreOrderItem extends Component {
  constructor() {
    super()
    this.state = {
      open: true
    }
    this.reroute = this.reroute.bind(this)
    this.toggleStoreOrder = this.toggleStoreOrder.bind(this)
  }
  toggleStoreOrder() {
    this.setState({ open: !this.state.open })
  }
  reroute() {
    this.props.history.push('/myorder')
  }
  render() {
    const { store, expanded, orderItems, length, index } = this.props
    const { open } = this.state
    const { url } = this.props.match
    return (
      <StoreOrderItemWrapper style={{ zIndex: `${length + 1 - index}` }}>
        <Store>
          <h4>
            {store.name} - {store.address.city}
          </h4>
          <IconButton
            onClick={this.toggleStoreOrder}
            size="20px"
            icon={open ? 'arrowUp' : 'arrowDown'}
          />
        </Store>
        {open &&
          orderItems.map(props => <OrderItem key={props.id} {...props} />)}
        {url === '/openorders' ? (
          <ButtonContainerUrl>
            <Button onClick={this.reroute}>Order</Button>
          </ButtonContainerUrl>
        ) : (
          <ButtonContainer expanded={expanded}>
            <Button onClick={this.reroute} expanded={expanded}>
              Order
            </Button>
          </ButtonContainer>
        )}
      </StoreOrderItemWrapper>
    )
  }
}

const mapProps = ({ storeOrderItems, idValues }) => {
  const getIdValue = ({ id }) => idValues[id]
  const getOrderItemsDeep = child => {
    const res = getIdValue(child)
    if (res.children) {
      return {
        ...res,
        children: res.children.map(getOrderItemsDeep),
        selectedOptions: res.selectedOptions.map(getIdValue)
      }
    }
    return res
  }
  return {
    storeOrderItems: storeOrderItems.map(({ store, orderItems }) => ({
      store,
      orderItems: orderItems.map(getOrderItemsDeep)
    }))
  }
}

export default connect(mapProps)(
  withRouter(({ storeOrderItems, store, ...props }) => (
    <React.Fragment>
      <hr />
      {storeOrderItems.length ? (
        storeOrderItems.map((item, i) => (
          <StoreOrderItem
            key={item.store.id}
            {...item}
            {...props}
            length={storeOrderItems.length}
            index={i}
          />
        ))
      ) : (
        <p>No projects added yet</p>
      )}
    </React.Fragment>
  ))
)
