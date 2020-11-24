import React, { useRef } from 'react'
import { useQuery } from 'react-apollo'
import styled from 'styled-components'
import { getStatusColor } from 'Common/utils'
import { STATUSES } from 'Common/constants'
import Table from '../fragments/table'
import LoadingSpinner from '../fragments/loading-spinner'
import ORDERS_QUERY from './ordersQuery.graphql'
import useDomain from '@/helpers/useDomain'
import { subDays } from 'date-fns'

const Container = styled.div`
  @media (max-width: ${({ theme }) => theme.bpUpToDesktop}) {
    text-align: center;
  }
`

export const Indicator = styled.div`
  height: 8px;
  width: 8px;
  border-radius: 2px;
  display: inline-block;
  margin-right: 10px;
  background-color: ${({ status }) => getStatusColor(status)};
`
export const Status = styled.p`
  display: none;
  @media (min-width: ${({ theme }) => theme.bpDesktop}) {
    display: block;
    display: inline-block;
    color: ${({ theme }) => theme.colorPrimary};
  }
`
const ordersTableLayout = {
  columns: {
    orderNumber: {
      label: 'Order No.'
    },
    orderedAt: {
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
        <Container>
          <Indicator status={e} />
          <Status>{STATUSES.filter(item => item.value === e)[0].label}</Status>
        </Container>
      )
    }
  },
  link: {}
}

const Orders = ({ search }) => {
  const { current: updatedAt_gte } = useRef(subDays(new Date(), 6))
  const domain = useDomain()
  const { loading, error, data } = useQuery(ORDERS_QUERY, {
    variables: {
      search,
      domain,
      updatedAt_gte
    }
  })
  if (loading) return <LoadingSpinner />
  if (error) return null
  return <Table data={data?.orders} layout={ordersTableLayout} />
}

export default Orders
