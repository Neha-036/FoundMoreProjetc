import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import SubscribeToMoreNotifications from './subscribeToMore'

const OuterContainer = styled.div`
  position: absolute;
  top: 80px;
  right: 0%;
  width: 100%;
  height: 600px;
  overflow-y: auto;
  background-color: #fff;
  box-shadow: 0 0 34px 6px rgba(0, 0, 0, 0.5);
  z-index: 41;
  @media (min-width: ${({ theme }) => theme.bpTablet}) {
    right: 10%;
    width: 500px;
    height: 600px;
  }
  @media (min-width: ${({ theme }) => theme.bpDesktop}) {
    right: 30px;
  }
`
const NotificationBackground = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 3;
`

const NOTIFICATION_QUERY = gql`
  {
    notifications {
      id
      readAt
      createdAt
      content
      title
      link
    }
  }
`

const NOTIFICATION_SUBSCRIPTION = gql`
  subscription onCreatedNotification {
    notifications {
      updatedFields
      node {
        id
        readAt
        createdAt
        title
        content
        link
      }
    }
  }
`

const NotificationPopup = ({ closeNotification }) =>
  ReactDOM.createPortal(
    <React.Fragment>
      <NotificationBackground onClick={closeNotification} />
      <OuterContainer>
        <Query query={NOTIFICATION_QUERY} fetchPolicy="network-only">
          {({ loading, error, data, subscribeToMore }) =>
            !loading &&
            !error && (
              <SubscribeToMoreNotifications
                close={closeNotification}
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
                        return prev
                      }
                      const newNotification =
                        subscriptionData.data.notifications.node
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
      </OuterContainer>
    </React.Fragment>,
    document.body
  )

class NotificationList extends React.Component {
  constructor() {
    super()
    this.state = {
      openNotification: false
    }
    this.onToggleNotification = this.onToggleNotification.bind(this)
  }

  onToggleNotification() {
    this.setState({ openNotification: !this.state.openNotification })
  }
  render() {
    const { children, body } = this.props
    return (
      <React.Fragment>
        <div onClick={this.onToggleNotification}>{children}</div>
        {this.state.openNotification && (
          <NotificationPopup
            closeNotification={this.onToggleNotification}
            body={body}
          />
        )}
      </React.Fragment>
    )
  }
}

export default NotificationList
