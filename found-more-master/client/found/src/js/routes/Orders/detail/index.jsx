import React from 'react'
import { Tabs } from 'antd'
import { Modal } from '@/components'
import { Query, Mutation } from 'react-apollo'
import order from 'Common/graphql/queries/order.graphql'
import updateOrder from 'Common/graphql/mutations/order.graphql'
import addressFragment from 'Common/graphql/fragments/address.graphql'
import commentFragment from 'Common/graphql/fragments/comment.graphql'
import gql from 'graphql-tag'
import { filter } from 'graphql-anywhere'
import General from './general'
import StoreInformation from './storeInformation'
import OrderItems from './orderItems'
import Comments from './comments'

const OrderDetailFragment = gql`
  fragment OrderDetailFragment on Order {
    id
    status
    comments {
      ...CommentFragment
    }
    items {
      id
      amount
      orderTemplate {
        id
        properties {
          articleNumber
          name
          images
        }
      }
    }
    poNumber
    address {
      ...AddressFragment
    }
    store {
      id
      name
      address {
        ...AddressFragment
      }
      brand {
        id
        name
      }
    }
  }
  ${addressFragment}
  ${commentFragment}
`

export default ({ id, form, ...props }) => (
  <Modal width={600} buttonText="Details" {...props}>
    <Query query={order} variables={{ where: { id } }}>
      {({ loading, error, data }) => {
        if (!loading && !error) {
          const filteredData = filter(OrderDetailFragment, data.order)
          return (
            <Mutation mutation={updateOrder}>
              {updateOrder => (
                <Tabs defaultKey="1">
                  <Tabs.TabPane key="1" tab="General">
                    <General {...filteredData} updateOrder={updateOrder} />
                  </Tabs.TabPane>
                  <Tabs.TabPane key="2" tab="Store Information">
                    <StoreInformation {...filteredData} />
                  </Tabs.TabPane>
                  <Tabs.TabPane key="3" tab="Order items">
                    <OrderItems {...filteredData} id={id} />
                  </Tabs.TabPane>
                  <Tabs.TabPane key="4" tab="Comments">
                    <Comments {...filteredData} updateOrder={updateOrder} />
                  </Tabs.TabPane>
                </Tabs>
              )}
            </Mutation>
          )
        }
        return null
      }}
    </Query>
  </Modal>
)
