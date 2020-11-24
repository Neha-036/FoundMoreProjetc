import React, { useState } from 'react'
import StoresList from '@/components/stores-list-new'
import OrderSidebar from '@/components/layout/order-sidebar'
import Title from '@/components/fragments/title'
import Spacing from '@/components/fragments/spacing'
import Searchbar from '@/components/fragments/searchbar'
import styled from 'styled-components'

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.bpTablet}) {
    display: block;
  }
`

const columns = [
  {
    Header: 'Store Number',
    accessor: 'storeNumber'
  },
  {
    Header: 'Name',
    accessor: 'name'
  },
  {
    Header: 'City',
    accessor: 'address.city'
  },
  {
    Header: 'Street',
    accessor: 'address.street',
    width: 100
  },
  {
    Header: 'Country',
    accessor: 'address.countryCode'
  }
]

const Stores = () => {
  const [search, setSearch] = useState('')
  return (
    <OrderSidebar>
      <Header>
        <Title>Stores</Title>
        <Searchbar onChange={e => setSearch(e.target.value)} value={search} />
      </Header>
      <Spacing space="32px" />
      <StoresList search={search} columns={columns} />
    </OrderSidebar>
  )
}

export default Stores
