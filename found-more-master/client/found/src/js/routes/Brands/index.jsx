import React from 'react'
import { Query } from 'react-apollo'
import { Table, Divider, Button } from 'antd'
import { stringSort } from '@/utils'
import { SpaceBetween } from '@/fragments'
import { ROW_AMOUNT } from '@/constants'
import windowStore from '@/stores/windowStore'
import editBrand from './actions/editBrand'
import createBrand from './actions/createBrand'
import brands from 'Common/graphql/queries/brands.graphql'
import deleteBrand from './actions/deleteBrand'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: (a, b) => stringSort(a.name, b.name)
  },
  {
    title: 'Domain',
    dataIndex: 'domain',
    sorter: (a, b) => stringSort(a.domain, b.domain)
  },
  {
    title: 'User amount',
    align: 'right',
    dataIndex: 'usersConnection.aggregate.count',
    sorter: (a, b) =>
      a.usersConnection.aggrgate.count > b.usersConnection.aggrgate.count
  },
  {
    title: 'Stores amount',
    align: 'right',
    dataIndex: 'storesConnection.aggregate.count',
    sorter: (a, b) =>
      a.storesConnection.aggregate.count > b.storesConnection.aggregate.count
  },
  {
    title: 'City',
    dataIndex: 'address.city'
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
          onClick={() => windowStore.addModal(editBrand({ id }))}
        >
          Edit
        </Button>
        <Divider type="vertical" />
        <a onClick={() => windowStore.addConfirmation(deleteBrand({ id }))}>
          Delete
        </a>
      </span>
    )
  }
]

const Brands = () => {
  return (
    <React.Fragment>
      <SpaceBetween>
        <h1>Brands</h1>
        <Button
          icon="flag"
          type="primary"
          onClick={() => windowStore.addModal(createBrand())}
        >
          Add
        </Button>
      </SpaceBetween>
      <Query
        query={brands}
        variables={{ where: { deletedAt: null } }}
        fetchPolicy="cache-and-network"
      >
        {({ loading, data }) => (
          <Table
            loading={loading}
            pagination={{ pageSize: ROW_AMOUNT }}
            rowKey="id"
            dataSource={data.brands}
            columns={columns}
          />
        )}
      </Query>
    </React.Fragment>
  )
}

export default Brands
