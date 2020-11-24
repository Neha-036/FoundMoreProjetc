import React from 'react'
import { Query } from 'react-apollo'
import { Table, Divider, Button } from 'antd'
import users from 'Common/graphql/queries/users.graphql'
import { stringSort } from '@/utils'
import { SpaceBetween } from '@/fragments'
import windowStore from '@/stores/windowStore'
import { ROW_AMOUNT } from '@/constants'
import editUser from './actions/editUser'
import createUser from './actions/createUser'
import deleteUser from './actions/deleteUser'

const columns = [
  {
    title: 'Name',
    key: 'name',
    render: (i, j) => `${j.firstName.charAt(0)}. ${j.lastName}`,
    sorter: (a, b) => stringSort(a.firstName, b.firstName)
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email'
  },
  {
    title: 'Brand',
    children: [
      {
        title: 'Name',
        dataIndex: 'brand.name',
        key: 'brandName',
        sorter: (a, b) => stringSort(a.brand.name, b.brand.name)
      },
      {
        title: 'Domain',
        dataIndex: 'brand.domain',
        key: 'brandDomain',
        sorter: (a, b) => stringSort(a.brand.domain, b.brand.domain)
      }
    ]
  },
  {
    title: 'Stores',
    key: 'stores',
    dataIndex: 'storesConnection.aggregate.count',
    align: 'right'
  },
  {
    title: 'Role',
    key: 'roleName',
    dataIndex: 'role.name',
    sorter: (a, b) => stringSort(a.role.name, b.role.name)
  },
  {
    key: 'actions',
    align: 'right',
    rowKey: 'actions',
    render: ({ id }) => (
      <span>
        <Button
          type="primary"
          icon="edit"
          onClick={() => windowStore.addModal(editUser({ id }))}
        >
          Edit
        </Button>
        <Divider type="vertical" />
        <a onClick={() => windowStore.addConfirmation(deleteUser({ id }))}>
          Delete
        </a>
      </span>
    )
  }
]

export default ({ deleteUser }) => {
  return (
    <React.Fragment>
      <SpaceBetween>
        <h1>Users</h1>
        <Button
          icon="user"
          type="primary"
          onClick={() => windowStore.addModal(createUser())}
        >
          Add
        </Button>
      </SpaceBetween>
      <Query query={users} fetchPolicy="cache-and-network">
        {({ loading, error, data }) =>
          !error && (
            <Table
              loading={loading}
              pagination={{ pageSize: ROW_AMOUNT }}
              rowKey="id"
              dataSource={data?.users?.filter(user => !user.deletedAt)}
              columns={columns}
            />
          )
        }
      </Query>
    </React.Fragment>
  )
}
