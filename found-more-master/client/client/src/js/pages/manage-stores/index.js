import React, { useState } from 'react'
import Title from '@/components/fragments/title'
import Searchbar from '@/components/fragments/searchbar'
import styled from 'styled-components'
import StoresList from '@/components/stores-list-new'
import Spacing from '@/components/fragments/spacing'
import UpdateStoreModal from './updateStoreModal'
import CreateStoreModal from './createStoreModal'
import useIsMaxWidth from '@/helpers/useIsMaxWidth'
import { useMeStore } from '@/stores/meStore'
import { isPast } from 'date-fns'

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.bpTablet}) {
    display: block;
  }
`

const ManageStores = () => {
  const [search, setSearch] = useState('')
  const [isMobile] = useIsMaxWidth('600px')
  const { hasPermission } = useMeStore()

  const canManageStores = hasPermission('CREATE_OWN', 'STORE')
  if (!canManageStores) {
    return <span>You do not have access to this page</span>
  }

  const columns = [
    {
      Header: 'Store Number',
      accessor: 'storeNumber',
      show: !isMobile
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
      show: !isMobile,
      width: 100
    },
    {
      Header: 'Country',
      accessor: 'address.countryCode'
    },
    {
      id: 'edit',
      accessor: 'id',
      Cell: ({ cell: { value } }) => (
        // <p>test</p>
        <UpdateStoreModal isMobile={isMobile} id={value} />
      )
    }
  ]
  return (
    <>
      <Header>
        <Title>Manage Stores</Title>
        <Searchbar onChange={e => setSearch(e.target.value)} value={search} />
        <CreateStoreModal />
      </Header>
      <Spacing space="32px" />
      <StoresList search={search} columns={columns} />
    </>
  )
}

export default ManageStores
