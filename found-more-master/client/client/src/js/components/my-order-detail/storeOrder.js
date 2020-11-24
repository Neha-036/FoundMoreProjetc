import React, { Component } from 'react'
import styled from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone'
import { connect } from 'redux-zero/react'
import IconButton from '../fragments/icon-button'
import PopupButton from '../fragments/modal'
import ChangeOrderAddressForm from './changeOrderAddress'
import AmountUpd from '../fragments/updateAmount'
import actions from './actions'

const StoreOrderItemWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => `${theme.colorText}99`};
  border-right: none;
  border-left: none;
  padding-left: 2px;
  :first-of-type {
    border-top: 1px solid ${({ theme }) => `${theme.colorText}99`};
  }
`

const StoreOrderItem = styled.div`
  display: flex;
  align-items: middle;
  justify-content: space-between;
  margin: 10px 0;
`

const OpenStoreOrderItem = styled.div`
  border-top: 1px solid ${({ theme }) => `${theme.colorText}99`};
  padding: 10px 0 20px 20px;
`

const ProjectsClosed = styled.div`
  & > button {
    margin-left: 10px;
  }
  display: flex;
  align-items: center;
`

const ProjectsOpen = styled.div`
  margin-top: 10px;
  margin-left: 20px;
`

const AddressWrapper = styled.div`
  display: flex;
  align-items: top;
  & > *:not(:first-child) {
    margin-left: 20px;
  }
`

const Text = styled.p`
  font-size: 16px;
  & svg {
    margin-right: 7px;
    > path {
      fill: ${({ theme }) => theme.colorPrimary};
    }
  }
`

const PhoneNumber = styled.span`
  font-size: 16px;
`

const Notes = styled.textarea`
  font-size: 16px;
  line-height: 1;
  width: 100%;
  height: 90px;
  max-width: 100%;
  min-width: 100%;
  -webkit-appearance: none;
  background-color: rgb(243, 243, 243);
  color: ${({ theme }) => theme.colorText};
  padding: 10px 20px;
  border: none;
  &:focus {
    outline: none;
  }
`

const Field = styled(Notes)`
  height: 50px;
`

const AmountChanger = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  padding-right: 3.5px;
`

const Project = styled.div`
  position: relative;
  display: flex;
  padding-right: 20px;
`

const orderItemActions = (store, { id }) => ({
  updateStoreOrderItem: ({ idValues }, amount) => ({
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

const OrderItem = connect(
  null,
  orderItemActions
)(({ id, properties, amount, updateStoreOrderItem, removeOrderItem }) => (
  <Project>
    <h6>{properties.name}</h6>
    <AmountChanger>
      {amount > 1 && (
        <IconButton
          size="13px"
          icon="minus"
          onClick={() => updateStoreOrderItem(-1)}
        >
          -
        </IconButton>
      )}
      <AmountUpd value={amount} id={id} />
      <IconButton
        size="13px"
        icon="plus"
        onClick={() => updateStoreOrderItem(+1)}
      >
        +
      </IconButton>
      <IconButton
        size="13px"
        icon="times"
        marginLeft="60px"
        backgroundColor="#ff6767"
        onClick={() => removeOrderItem({ variables: { id } })}
      />
    </AmountChanger>
  </Project>
))
export default connect(
  null,
  actions
)(
  class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        storeOpen: this.props.index === 0,
        projectsOpen: false
      }
    }

    toggleStoreOrder() {
      this.setState({ storeOpen: !this.state.storeOpen })
    }
    toggleProjects() {
      this.setState({ projectsOpen: !this.state.projectsOpen })
    }
    render() {
      const { store, orderItems, updateStoreOrderItem } = this.props
      const { storeOpen, projectsOpen } = this.state
      const { deliveryAddress, address } = store
      return (
        <StoreOrderItemWrapper>
          <StoreOrderItem onClick={() => this.toggleStoreOrder()}>
            <h5>
              {store.name} - {store.address.city}
            </h5>
            <IconButton
              size="20px"
              icon={!storeOpen ? 'arrowDown' : 'arrowUp'}
            />
          </StoreOrderItem>
          {storeOpen && (
            <OpenStoreOrderItem>
              <ProjectsClosed onClick={() => this.toggleProjects()}>
                <h4>
                  {orderItems.length} {orderItems.length > 1 ? 'items' : 'item'}{' '}
                  in order for store
                </h4>
                <IconButton
                  size="15px"
                  icon={!projectsOpen ? 'arrowDown' : 'arrowUp'}
                />
              </ProjectsClosed>
              {projectsOpen && (
                <ProjectsOpen>
                  {orderItems.map(orderItem => (
                    <OrderItem key={orderItem.id} {...orderItem} />
                  ))}
                </ProjectsOpen>
              )}
              <AddressWrapper>
                <React.Fragment>
                  <h4>Shipping address:</h4>
                  {deliveryAddress ? (
                    <div>
                      <Text>{`${deliveryAddress.street ||
                        ''} ${deliveryAddress.number ||
                        ''} ${deliveryAddress.addition || ''}`}</Text>
                      <Text>{deliveryAddress.postalCode}</Text>
                      <Text>{deliveryAddress.city}</Text>
                      <Text>{deliveryAddress.countryCode}</Text>
                    </div>
                  ) : (
                    <div>
                      <Text>{`${address.street || ''} ${address.number ||
                        ''} ${address.addition || ''}`}</Text>
                      <Text>{address.postalCode}</Text>
                      <Text>{address.city}</Text>
                      <Text>{address.countryCode}</Text>
                    </div>
                  )}
                </React.Fragment>
              </AddressWrapper>
              <div>
                <h4>Contact person:</h4>
                {store.contactPerson || store.phone ? (
                  <React.Fragment>
                    <Text>{store.contactPerson}</Text>
                    <Text>
                      <a href={`tel:${store.phone}`}>
                        <FontAwesomeIcon size="md" icon={faPhone} />
                        <PhoneNumber>{store.phone}</PhoneNumber>
                      </a>
                    </Text>
                  </React.Fragment>
                ) : (
                  <Text>No contactinformation provided</Text>
                )}
              </div>

              <PopupButton
                title={`Change shipping address for ${store.name} - ${store.address.city}`}
                body={<ChangeOrderAddressForm {...this.props} />}
              >
                <a>Change shipping address</a>
              </PopupButton>
              <br />
              <h4>Notes:</h4>
              <Notes
                onChange={e =>
                  updateStoreOrderItem({ comment: e.target.value })
                }
                value={this.props.store.comment}
                placeholder="If you have additional information about this order, changes in contact details or other remarks, please indicate this here."
              />
              <h4>PO Number:</h4>
              <Field
                onChange={e =>
                  updateStoreOrderItem({ poNumber: e.target.value })
                }
                value={this.props.store.poNumber}
                placeholder="If there is a PO number available, please add here"
              />
            </OpenStoreOrderItem>
          )}
        </StoreOrderItemWrapper>
      )
    }
  }
)
