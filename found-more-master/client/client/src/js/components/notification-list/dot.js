import React, { Component } from 'react'
import styled from 'styled-components'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const Container = styled.div`
  border-radius: 50%;
  background-color: #ff6767;
  width: 16px;
  height: 16px;
  display: ${({ showDot }) => (showDot.length > 0 ? '' : 'none')};
`

const NOTIFICATION_SUBSCRIPTION = gql`
  subscription onCreatedNotification {
    notifications {
      updatedFields
      node {
        id
      }
    }
  }
`

const NOTIFICATION_QUERY = gql`
  {
    notifications(where: { readAt: null }) {
      id
    }
  }
`

class SubscribeToMoreNotifications extends Component {
  componentDidMount() {
    this.props.subscribeToNewNotifications()
  }
  render() {
    return <Container showDot={this.props.notifications} />
  }
}

const Dot = () => (
  <Query query={NOTIFICATION_QUERY}>
    {({ subscribeToMore, loading, error, data }) =>
      !loading &&
      !error && (
        <SubscribeToMoreNotifications
          {...data}
          subscribeToNewNotifications={() =>
            subscribeToMore({
              document: NOTIFICATION_SUBSCRIPTION,
              updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data.notifications) return prev
                if (
                  subscriptionData.data.notifications.updatedFields &&
                  subscriptionData.data.notifications.updatedFields.includes(
                    'readAt'
                  )
                ) {
                  const notifications = prev.notifications.filter(
                    i => i.id !== subscriptionData.data.notifications.node.id
                  )
                  return Object.assign({}, prev, { notifications })
                }
                const newNotification = subscriptionData.data.notifications.node
                return Object.assign({}, prev, {
                  notifications: [newNotification, ...prev.notifications]
                })
              }
            })
          }
        />
      )
    }
  </Query>
)

export default Dot
