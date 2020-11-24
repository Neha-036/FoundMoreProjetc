import React from 'react'
import { AdminFormModal } from '@/components'
import { Form } from 'antd'
import AddressFormFragment from '@/forms/fragments/address'
import updateOrder from 'Common/graphql/mutations/updateOrder.graphql'
import order from 'Common/graphql/queries/order.graphql'
import { graphql } from 'react-apollo'
import { diff } from 'deep-object-diff'

const form = () => (
  <Form>
    <AddressFormFragment />
  </Form>
)

export default graphql(updateOrder, { name: 'updateOrder' })(
  ({ initialValues, id, updateOrder }) => (
    <AdminFormModal
      form={form}
      modalProps={{ title: 'Change Shipping Address' }}
      initialValues={initialValues}
      buttonProps={{ label: 'Change shipping address' }}
      handleSubmit={({ closeModal }) => async (
        { address },
        { setSubmitting }
      ) => {
        const addressDiff = diff(initialValues.address, address)
        try {
          await updateOrder({
            variables: {
              where: { id },
              input: {
                address: {
                  update: addressDiff
                }
              }
            },
            refetchQueries: [{ query: order, variables: { where: { id } } }]
          })
        } catch (e) {
          Error(e)
        }
        setSubmitting(false)
        closeModal()
      }}
    />
  )
)
