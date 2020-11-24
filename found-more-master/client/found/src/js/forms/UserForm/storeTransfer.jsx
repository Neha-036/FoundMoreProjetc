import React, { useState } from 'react'
import { Query } from 'react-apollo'
import { Transfer, Input } from 'antd'
import gql from 'graphql-tag'
import { debounce } from 'lodash'
import { Loading } from '@/fragments/loading'

const storesQuery = gql`
  query Stores(
    $where: StoreWhereInput
    $orderBy: StoreOrderByInput
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
    $search: String
  ) {
    stores(
      where: $where
      orderBy: $orderBy
      skip: $skip
      after: $after
      before: $before
      first: $first
      last: $last
      search: $search
    ) {
      id
      name
      address {
        id
        city
      }
    }
  }
`

const StoreTransfer = ({ form, field }) => {
  const [search, setSearch] = useState('')
  const update = field?.value?.update || []
  const connect = field?.value?.connect || []
  const disconnect = field?.value?.disconnect || []
  const updateKeys = update.map(item => item.where.id)
  const connectKeys = connect.map(item => item.id)
  const targetKeys = [...updateKeys, ...connectKeys].filter(
    key => !disconnect.some(item => key === item.id)
  )

  const handleSearch = debounce(value => setSearch(value), 800)

  const handleChange = (targetKeys, direction, moveKeys) => {
    if (direction === 'right') {
      form.setFieldValue(`${field.name}.connect`, [
        ...connect,
        ...moveKeys.map(id => ({ id }))
      ])
    }
    if (direction === 'left') {
      const keys = moveKeys.reduce(
        (acc, curr) => {
          if (updateKeys.some(key => key === curr)) {
            acc.disconnect = [...acc.disconnect, { id: curr }]
            return acc
          }
          acc.connect = acc.connect.filter(item => item.id !== id)
          return acc
        },
        { connect, disconnect }
      )
      form.setFieldValue(`${field.name}.connect`, keys.connect)
      form.setFieldValue(`${field.name}.disconnect`, keys.disconnect)
    }
  }

  return (
    <>
      <Input.Search
        allowClear
        style={{ marginBottom: 10 }}
        // value={search}
        onChange={e => handleSearch(e.target.value)}
      />
      <Query
        query={storesQuery}
        variables={{
          where: { brand: { id: form?.values?.brand?.connect?.id } },
          search
        }}
      >
        {({ loading, error, data }) => {
          if (loading) return <Loading />
          if (error) console.log(error)
          return (
            <Transfer
              listStyle={{ width: 213, height: 500 }}
              targetKeys={targetKeys}
              filterOption={() => true}
              dataSource={data?.stores?.map(store => ({
                key: store.id,
                title: `${store.name} ${store.address.city}`,
                description: store.name
              }))}
              onChange={handleChange}
              render={item => `${item.title}`}
            />
          )
        }}
      </Query>
    </>
  )
}

export default StoreTransfer
