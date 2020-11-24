import React from 'react'
import { Menu, Icon, Layout, Badge, Popover } from 'antd'
import { withRouter } from 'react-router-dom'
import gql from 'graphql-tag'
import styled from 'styled-components'
import { Query } from 'react-apollo'
import { format, isToday, distanceInWordsToNow } from 'date-fns'
import { AUTH_TOKEN } from '../../../constants'
import DownloadDataMenuItem from './downloadDataMenuItem'

const Logo = styled.div`
  text-align: center;
  margin: 16px;
  background-image: url('/images/FoundLogo.png');
  background-size: cover;
  background-position: center;
  width: calc(100% - 50px);
  height: 60px;
`

const NotificationTitle = styled.h4`
  border-bottom: 1px solid #afafaf;
`

const NOTIFICATION_QUERY = gql`
  {
    notifications(orderBy: createdAt_DESC) {
      id
      title
      createdAt
      content
    }
  }
`

const Sider = ({ history }) => (
  <Layout.Sider
    style={{ position: 'fixed', left: 0, height: '100vh' }}
    theme="light"
  >
    <Logo />
    <Menu
      selectable={false}
      defaultSelectedKeys={[window.location.pathname]}
      mode="inline"
      theme="light"
    >
      <Menu.Item>
        <Query query={NOTIFICATION_QUERY}>
          {({ loading, error, data }) => {
            if (!loading && !error) {
              const content = data.notifications.reduce((acc, curr) => {
                const dateFormat = 'YYYY-MM-DD'
                if (acc[format(curr.createdAt, dateFormat)]) {
                  acc[format(curr.createdAt, dateFormat)].push(curr)
                } else {
                  acc[format(curr.createdAt, dateFormat)] = [curr]
                }
                return acc
              }, {})
              return (
                <Popover
                  placement="rightTop"
                  title="Notifications"
                  content={Object.entries(content).map(entry => (
                    <React.Fragment key={entry[0]}>
                      <h3>
                        {isToday(entry[0])
                          ? 'Today'
                          : `${distanceInWordsToNow(entry[0])} ago`}
                      </h3>
                      {entry[1].map(not => (
                        <React.Fragment key={not.id}>
                          <NotificationTitle>{not.title}</NotificationTitle>
                          <p style={{ whiteSpace: 'pre-line' }}>
                            {not.content}
                          </p>
                        </React.Fragment>
                      ))}
                    </React.Fragment>
                  ))}
                  trigger="click"
                >
                  <Badge count={data.notifications.length}>
                    <Icon type="notification" />
                    <span>Notifications</span>
                  </Badge>
                </Popover>
              )
            }
            return (
              <Badge>
                <Icon type="notification" />
                <span>Notifications</span>
              </Badge>
            )
          }}
        </Query>
      </Menu.Item>
      <Menu.ItemGroup title="Order Management">
        <Menu.Item onClick={() => history.push('/orders')} key="/orders">
          <Icon type="ordered-list" />
          <span>Orders</span>
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup title="Client Management">
        <Menu.Item onClick={() => history.push('/brands')} key="/brands">
          <Icon type="flag" />
          <span>Brands</span>
        </Menu.Item>
        <Menu.Item onClick={() => history.push('/stores')} key="/stores">
          <Icon type="shop" />
          <span>Stores</span>
        </Menu.Item>
        <Menu.Item onClick={() => history.push('/users')} key="/users">
          <Icon type="user" />
          <span>Users</span>
        </Menu.Item>
        <Menu.Item onClick={() => history.push('/faq')} key="/faq">
          <Icon type="solution" />
          <span>Support Pages</span>
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup title="Product Management">
        <Menu.Item onClick={() => history.push('/items')} key="/products">
          <Icon type="tags" />
          <span>Items</span>
        </Menu.Item>
        <Menu.Item
          onClick={() => history.push('/elements')}
          key="/ordertemplates"
        >
          <Icon type="inbox" />
          <span>Elements</span>
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup title="Data operations">
        <Menu.Item onClick={() => history.push('/import')} key="/import">
          <Icon type="upload" />
          <span>Import</span>
        </Menu.Item>
        <Menu.Item style={{ height: 100 }}>
          <DownloadDataMenuItem />
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.Item
        onClick={() => {
          localStorage.removeItem(AUTH_TOKEN)
          history.push('/login')
        }}
        style={{ position: 'absolute', bottom: 10 }}
      >
        <Icon type="logout" />
        <span>Logout</span>
      </Menu.Item>
    </Menu>
  </Layout.Sider>
)

export default withRouter(Sider)
