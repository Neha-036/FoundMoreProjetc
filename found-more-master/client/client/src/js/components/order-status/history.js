import React, { useRef } from 'react'
import { useQuery } from 'react-apollo'
import Table from '../fragments/table'
import LoadingSpinner from '../fragments/loading-spinner'
import ORDERS_QUERY from './ordersHistoryQuery.graphql'
import { subDays } from 'date-fns'

const ordersTableLayout = {
  columns: {
    orderNumber: {
      label: 'Order No.'
    },
    createdAt: {
      label: 'Order Date',
      decorator: e => new Date(e).toLocaleDateString()
    },
    'store.name': {
      label: 'Store'
    },
    'store.address.city': {
      label: 'Location'
    }
  },
  link: {}
}

const History = ({ search }) => {
  const { current: updatedAt_lte } = useRef(subDays(new Date(), 7))
  const { loading, error, data } = useQuery(ORDERS_QUERY, {
    variables: {
      search,
      updatedAt_lte
    }
  })
  if (error) return null
  if (loading) return <LoadingSpinner />
  return <Table data={data.orders} layout={ordersTableLayout} />
}

export default History
