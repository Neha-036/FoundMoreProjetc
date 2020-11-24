import React from 'react'
import { useQuery } from 'react-apollo'
import { Link } from 'react-router-dom'
import gql from 'graphql-tag'
import styled from 'styled-components'
import OrderSidebar from '../../components/layout/order-sidebar'
import Spacing from '../../components/fragments/spacing'
import Checkbox from '../../components/forms/checkbox'
import Logout from '../../components/logout'
import Button from '@/components/fragments/button'
import { useMeStore } from '@/stores/meStore'
import UpdateUserModal from './updateUserModal'
import UpdatePasswordModal from './updatePasswordModal'

const USER_QUERY = gql`
  {
    me {
      id
      firstName
      lastName
      email
      phoneNumber
    }
  }
`

const TitleHeader = styled.div`
  padding: 30px 0;
`

const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  & > a {
    flex-basis: 45%;
  }
`

const UserDetails = () => {
  const { hasPermission } = useMeStore()
  const canManageStores = hasPermission('CREATE_OWN', 'STORE')
  const canManageUsers = hasPermission('CREATE_OWN', 'USER')
  const { loading, error, data } = useQuery(USER_QUERY)
  if (error || loading) return null
  return (
    <OrderSidebar>
      <TitleHeader>
        <h2>Account Settings</h2>
      </TitleHeader>
      <hr />
      <h5>Login Settings</h5>
      <Spacing space="38px" />
      <table>
        <tbody>
          <tr>
            <td>
              <p>Email adress</p>
            </td>
            <td>
              <UpdateUserModal id={data.me.id} />
            </td>
          </tr>
          <tr>
            <td>{data.me.email}</td>
          </tr>
          <tr>
            <td>
              <p>Phone number</p>
            </td>
          </tr>
          <tr>
            <td>{data.me.phoneNumber}</td>
          </tr>
          <tr>
            <td>
              <p>Password</p>
            </td>
            <td>
              <UpdatePasswordModal />
            </td>
          </tr>
          <tr>
            <td>*********</td>
          </tr>
        </tbody>
      </table>
      <hr />
      <h5>Notifications Settings</h5>
      <Checkbox />
      <ActionButtons>
        {canManageStores && (
          <Link to="/userdetails/stores">
            <Button>Manage Stores</Button>
          </Link>
        )}
        {canManageUsers && (
          <Link to="/userdetails/users">
            <Button>Manage Users</Button>
          </Link>
        )}
      </ActionButtons>
      <Logout />
    </OrderSidebar>
  )
}
export default UserDetails
