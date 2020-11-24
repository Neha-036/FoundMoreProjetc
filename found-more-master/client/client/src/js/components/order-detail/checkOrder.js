import React, { useState } from 'react'
import styled from 'styled-components'
import { useMutation } from 'react-apollo'
import UPDATE_ORDER_MUTATION from 'Common/graphql/mutations/updateOrder.graphql'
import { ItemsInner, ItemProp } from './index'
import IconButton from '../fragments/icon-button'
import { Amount } from '../fragments/updateAmount'
import Button from '../../components/fragments/button'
import Modal from '../fragments/modal'

const AmountChanger = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  padding-right: 3.5px;
  @media (min-width: ${({ theme }) => theme.bpUpToDesktop}) {
    position: absolute;
    right: 0;
  }
`
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`

const Wrapper = styled.div`
  padding: 20px;
`

const CheckOrder = ({ id, items }) => {
  const [visible, setVisible] = useState()
  const [updateOrder] = useMutation(UPDATE_ORDER_MUTATION)

  const doubleCheck = () => {
    setAskedForCheck(true)
  }

  const updateAmount = (insertedAmount, itemId) => {
    updateOrder({
      variables: {
        where: { id },
        input: {
          items: {
            update: {
              where: { id: itemId },
              data: { amount: insertedAmount }
            }
          }
        }
      }
    }).catch(e => console.log(e))
  }

  const deleteItem = itemId => {
    updateOrder({
      variables: {
        where: { id },
        input: {
          items: {
            delete: { id: itemId }
          }
        }
      }
    }).catch(e => console.log(e))
  }

  const updateStatus = status => {
    updateOrder({
      variables: {
        where: { id },
        input: {
          status
        }
      }
    })
      .then(() => setVisible(false))
      .catch(e => console.log(e))
  }

  const renderItems = items.map(item => {
    const { id, amount } = item
    return (
      <ItemsInner key={item.id}>
        <ItemProp>{item.name}</ItemProp>
        <AmountChanger>
          {amount > 1 && (
            <IconButton
              size="15px"
              icon="minus"
              onClick={() => updateAmount(amount - 1, id)}
            >
              -
            </IconButton>
          )}
          <Amount
            value={item.amount}
            type="number"
            onChange={e => updateAmount(e.target.value || 1, id)}
          />
          <IconButton
            size="15px"
            icon="plus"
            onClick={() => updateAmount(amount + 1, id)}
          >
            +
          </IconButton>
          <IconButton
            size="13px"
            icon="times"
            marginLeft="20px"
            backgroundColor="#ff6767"
            onClick={() => deleteItem(id)}
          />
        </AmountChanger>
      </ItemsInner>
    )
  })
  return (
    <>
      <Button onClick={() => setVisible(true)}>Check Order</Button>
      <Modal visible={visible} closeModal={() => setVisible(false)}>
        <Wrapper>
          <p>
            <b>Order</b>
          </p>
          {renderItems}
          <ButtonContainer>
            <Button type="button" onClick={() => updateStatus('PENDING')}>
              Confirm Order
            </Button>
            <Modal.Alert
              modalProps={{
                title: 'Are you sure?',
                okButton: (
                  <Button
                    type="button"
                    cancelled="true"
                    onClick={() => updateStatus('CANCELLED')}
                  >
                    Cancel Order
                  </Button>
                ),
                onCancel: () => setVisible(false),
                cancelText: 'Dismiss'
              }}
              button={
                <Button type="button" cancelled="true" onClick={doubleCheck}>
                  Cancel Order
                </Button>
              }
            >
              <p>Are you sure you want to cancel the order?</p>
            </Modal.Alert>
          </ButtonContainer>
        </Wrapper>
      </Modal>
    </>
  )
}

export default CheckOrder
