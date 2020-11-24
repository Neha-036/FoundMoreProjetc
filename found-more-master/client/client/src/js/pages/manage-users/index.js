import React from 'react'
import Title from '@/components/fragments/title'
import styled from 'styled-components'
import Spacing from '@/components/fragments/spacing'
import { useMeStore } from '@/stores/meStore'
import USERS_QUERY from 'Common/graphql/queries/users.graphql'
import Table from '@/components/fragments/newTable'
import { useQuery } from 'react-apollo'
import UpdateUserModal from './updateUserModal'
import CreateUserModal from './createUserModal'
import useDomain from '@/helpers/useDomain'

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.bpTablet}) {
    display: block;
  }
`

const Button = styled.button``

const ManageUsers = () => {
  const { hasPermission } = useMeStore()
  const domain = useDomain()
  const { loading, data } = useQuery(USERS_QUERY, {
    where: { brand: { domain } }
  })

  const canCreateUsers = hasPermission('CREATE_OWN', 'USER')
  const canUpdateUsers = hasPermission('UPDATE_ALL', 'USER')

  if (!canCreateUsers || !canUpdateUsers) {
    return <span>You do not have access to this page</span>
  }

  const columns = [
    {
      Header: 'Name',
      accessor: 'firstName'
    },
    {
      Header: 'Name',
      accessor: 'firstName'
    },
    {
      Header: 'Last Name',
      accessor: 'firstName'
    },
    {
      Header: 'Email',
      accessor: 'email'
    },
    {
      id: 'edit',
      accessor: 'id',
      Cell: ({ cell: { value } }) => <UpdateUserModal id={value} />
    }
  ]
  return (
    <>
      <Header>
        <Title>Manage Users</Title>
        <CreateUserModal />
      </Header>
      <Spacing space="32px" />
      <Table loading={loading} data={data?.users || []} columns={columns} />
    </>
  )
}

export default ManageUsers
