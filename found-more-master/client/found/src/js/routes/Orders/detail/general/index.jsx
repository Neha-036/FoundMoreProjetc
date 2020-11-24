import React from 'react'
import { Select } from 'antd'
import { SpaceBetween } from '@/fragments'
import { Form as FormGenerator } from '@/components'
import styled from 'styled-components'
import order from 'Common/graphql/queries/order.graphql'
import { STATUSES } from 'Common/constants'
import ChangeShippingAddress from './changeShippingAddress'

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`

export default ({ address, poNumber, updateOrder, id, status }) => (
  <FlexColumn>
    <h4>Shipping address</h4>
    <SpaceBetween>
      {address ? (
        <div style={{ lineHeight: '10px' }}>
          <p>{`${address.street} ${address.number} ${address.addition ||
            ''}`}</p>
          <p>{address.postalCode}</p>
          <p>{`${address.city}, ${address.countryCode}`}</p>
        </div>
      ) : (
        <p>No shipping information provided.</p>
      )}
      <ChangeShippingAddress initialValues={{ address }} id={id} />
    </SpaceBetween>
    <h4>PO Number</h4>
    <SpaceBetween>
      <p>{poNumber || 'No PO number provided.'}</p>
      <FormGenerator
        inModal={{ buttonText: 'Change', title: 'Change PO number' }}
        initialValues={{ poNumber }}
        layout={{
          fields: {
            poNumber: {
              placeholder: 'PO number'
            }
          }
        }}
        onSubmit={async ({ poNumber }, actions) => {
          try {
            await updateOrder({
              variables: { where: { id }, input: { poNumber } },
              refetchQueries: [{ query: order, variables: { where: { id } } }]
            })
          } catch (e) {
            console.log(e) /* eslint-disable-line */
          }
          actions.setSubmitting(false)
        }}
      />
    </SpaceBetween>
    <h4>Order status</h4>
    <Select
      defaultValue={status}
      onChange={status =>
        updateOrder({
          variables: {
            where: { id },
            input: { status }
          },
          refetchQueries: [{ query: order, variables: { where: { id } } }]
        })
      }
    >
      {STATUSES.map(({ value, label }) => (
        <Select.Option key={value} value={value}>
          {label}
        </Select.Option>
      ))}
    </Select>
  </FlexColumn>
)
