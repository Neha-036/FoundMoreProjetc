import React from 'react'
import styled from 'styled-components'
import { useQuery } from 'react-apollo'
import { STATUSES } from 'Common/constants'
import Table from '@/components/fragments/table'
import { Indicator, Status } from '@/components/order-status/orders'
import OPEN_ORDERS_QUERY from './openOrdersQuery.graphql'
import useDomain from '@/helpers/useDomain'

const TableWrapper = styled.div`
  > table > thead {
    @media (min-width: ${({ theme }) => theme.bpDesktop}) {
      display: none;
    }
  }
`

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
    },
    status: {
      label: 'Status',
      decorator: e => (
        <div>
          <Indicator status={e} />
          <Status>{STATUSES.filter(item => item.value === e)[0].label}</Status>
        </div>
      )
    }
  },
  link: {}
}

const OpenOrders = () => {
  const domain = useDomain()
  const { loading, error, data } = useQuery(OPEN_ORDERS_QUERY, {
    variables: { domain }
  })
  if (loading || error) return null

  return (
    <TableWrapper>
      <Table data={data.orders} layout={ordersTableLayout} />
    </TableWrapper>
  )
}

export default OpenOrders
