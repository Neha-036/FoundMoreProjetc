import React from 'react'
import { addressValidationSchema } from 'Common/validation-schemas'
import { connect } from 'redux-zero/react'
import Form from '../fragments/form'
import actions from './actions'

const changeAddressLayout = {
  fields: {
    street: {
      label: 'Street'
    },
    number: {
      label: 'Number'
    },
    addition: {
      label: 'Addition'
    },
    postalCode: {
      label: 'Zip Code'
    },
    city: {
      label: 'City'
    },
    countryCode: {
      label: 'Country'
    }
  },
  validationSchema: addressValidationSchema,
  submitLabel: 'Change Shipping Address'
}

const mapProps = ({ storeOrderItems }, { store }) => ({
  store: storeOrderItems.filter(i => i.store.id === store.id)[0].store
})

export default connect(
  mapProps,
  actions
)(({ updateStoreOrderItem, ...props }) => (
  <Form
    {...props}
    fontSize="16px"
    layout={changeAddressLayout}
    initialValues={props.store.deliveryAddress || props.store.address}
    onSubmit={deliveryAddress => {
      try {
        updateStoreOrderItem({ deliveryAddress })
        /* eslint-disable no-alert */
        alert('Your address was successfully updated')
      } catch (e) {
        Error(e)
      }
    }}
  />
))
