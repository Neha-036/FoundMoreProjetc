import React, { useState } from 'react'
import * as Yup from 'yup'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { addressValidationSchema } from 'Common/validation-schemas'
import { useQuery, useMutation } from 'react-apollo'
import { connect } from 'redux-zero/react'
import CREATE_ORDER_MUTATION from 'Common/graphql/mutations/createOrder.graphql'
import confirmOrderPermission from 'Common/graphql/queries/confirmOrderPermission.graphql'
import Button, { ButtonWrapper } from '../fragments/button'
import LoadingSpinner from '../fragments/loading-spinner'

const orderValidationSchema = Yup.array().of(
  Yup.object().shape({
    store: Yup.object().shape({
      id: Yup.string().required('No store id was provided')
    }),
    address: addressValidationSchema
  })
)

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0;
  width: 100%;
  background-color: white;
  box-shadow: 0 -4px 4px -5px #333;
  margin-left: -10px;
  padding: 20px 0;
  ${ButtonWrapper} {
    position: initial;
    width: 90%;
    margin-left: ${({ theme }) => theme.spacingXs};
    @media (min-width: ${({ theme }) => theme.bpTablet}) {
      margin-left: ${({ theme }) => theme.spacingSm};
      width: 30%;
    }
    @media (min-width: ${({ theme }) => theme.bpDesktop}) {
      margin-left: ${({ theme }) => theme.spacingLg};
    }
  }
`

const OrderConfirm = props => {
  const [orderConfirmLoading, setLoading] = useState(false)
  const { loading, error, data } = useQuery(confirmOrderPermission)
  const [createOrder] = useMutation(CREATE_ORDER_MUTATION)
  const { push } = useHistory()

  const confirmOrder = async () => {
    const getSelectedOptions = ({ amount, selectedOptions, children }) =>
      selectedOptions.flatMap(({ orderTemplateId }) => {
        const orderItem = {
          amount,
          orderTemplate: { id: orderTemplateId }
        }
        if (children && children.length > 0)
          Object.assign(orderItem, {
            children: children.flatMap(getSelectedOptions)
          })
        return orderItem
      })
    const orders = props.storeOrderItems.map(({ store, orderItems }) => {
      const address = {}
      if (store.deliveryAddress) {
        Object.assign(address, store.deliveryAddress)
      } else {
        Object.assign(address, store.address)
      }
      delete address.id
      delete address.__typename
      delete address.createdAt
      delete address.updatedAt
      return {
        store: {
          id: store.id
        },
        comment: store.comment,
        poNumber: store.poNumber,
        address,
        order: orderItems.flatMap(getSelectedOptions)
      }
    })
    try {
      setLoading(true)
      await orderValidationSchema.validate(orders)
      await createOrder({ variables: { orders } })
      props.clearStoreOrderItems()
      setLoading(false)
      push('/orders')
    } catch (e) {
      setLoading(false)
      alert(e.message) /* eslint-disable-line */
    }
  }
  return (
    <>
      <ButtonContainer>
        {!loading && !error && (
          <Button onClick={confirmOrder}>
            {data.canUpdateOwnOrderStatus
              ? 'confirm order'
              : 'send order for approval'}
          </Button>
        )}
      </ButtonContainer>
      {orderConfirmLoading && <LoadingSpinner />}
    </>
  )
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

const actions = () => ({
  clearStoreOrderItems: () => ({ storeOrderItems: [] })
})

export default connect(mapProps, actions)(OrderConfirm)
