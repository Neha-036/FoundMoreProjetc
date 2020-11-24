import React, { useState } from 'react'
import styled from 'styled-components'
import { useQuery } from 'react-apollo'
import { useHistory } from 'react-router-dom'
import gql from 'graphql-tag'
import { connect } from 'redux-zero/react'
import Table from '../fragments/newTable'
import Searchbar, { Container } from '../fragments/searchbar'
import Button, { ButtonWrapper } from '../fragments/button'
import Title from '../fragments/title'
import Spacing from '../fragments/spacing'
import IconButton from '../fragments/icon-button'
import actions from './actions'
import { FooterContext } from '../layout/order-sidebar'

const STORES_QUERY = gql`
  query StoresQuery($search: String){
    stores(where: { 
      brand: { domain: "${window.location.hostname.split('.')[0]}" },
      deletedAt: null
    } search: $search orderBy: name_ASC) {
      id
      storeNumber
      name
      language {
        id
        isoCode
      }
      address {
        id
        city
        postalCode
        addition
        number
        countryCode
        street
      }
      type
    }
  }
`

const TitleContainer = styled.div`
  position: relative;
  & ${Container} {
    position: relative;
    width: 100%;
    @media (min-width: ${({ theme }) => theme.bpUpToTablet}) {
      position: absolute;
      right: 20px;
      bottom: 0;
      width: 25%;
      top: 20px;
    }
  }
`

const MainContainer = styled.div`
  margin-bottom: 90px;
`

const ButtonContainer = styled.div`
  ${ButtonWrapper} {
    position: initial;
    margin-left: ${({ theme }) => theme.spacingXs};
    width: 90%;
    margin-bottom: 10px;
    @media (min-width: ${({ theme }) => theme.bpTablet}) {
      width: 30%;
    }
  }
`

const LinkText = styled.h5`
  text-decoration: none;
  display: inline-block;
  margin-left: 10px;
  vertical-align: top;
`

const Back = styled.div`
  display: flex;
  margin: 10px 0;
`

const SelectStores = props => {
  const [selectedStores, setSelectedStores] = useState([])
  const [search, setSearch] = useState('')
  const { goBack } = useHistory()
  const { loading, error, data } = useQuery(STORES_QUERY, {
    variables: { search }
  })

  const storeExists = store => {
    return selectedStores.some(i => i.id === store.id)
  }
  const addOrRemoveStore = store => {
    if (!storeExists(store)) {
      return setSelectedStores([store, ...selectedStores])
    }
    setSelectedStores(selectedStores.filter(i => i.id !== store.id))
  }
  const toggleSelectAllStores = stores => {
    if (selectedStores.length !== stores.length) {
      setSelectedStores(stores)
    } else {
      setSelectedStores([])
    }
  }
  const addSelectedItemsToStoresOrder = () => {
    props.addOrderToStores(selectedStores)
    goBack()
  }

  const columns = [
    {
      Header: 'Name',
      accessor: 'name'
    },
    {
      Header: 'City',
      accessor: 'address.city'
    },
    {
      id: 'select',
      Header: () => (
        <IconButton
          border={selectedStores.length !== data.stores.length}
          invert={selectedStores.length !== data.stores.length}
          onClick={() => toggleSelectAllStores(data.stores)}
          icon={selectedStores.length !== data.stores.length ? 'plus' : 'check'}
          size="20px"
        />
      ),
      Cell: ({ row, ...props }) => (
        <IconButton
          dd={console.log(row)}
          border={!storeExists(row.original)}
          invert={!storeExists(row.original)}
          onClick={() => addOrRemoveStore(row.original)}
          size="20px"
          icon={storeExists(row.original) ? 'check' : 'plus'}
        />
      )
    }
  ]

  if (error) throw new Error(error)
  return (
    <>
      <TitleContainer>
        <Title>Select stores</Title>
        <Searchbar
          placeholder="Search for a store"
          onChange={e => setSearch(e.target.value)}
          value={search}
        />
      </TitleContainer>
      <Spacing space="32px" />
      <Back onClick={goBack}>
        <IconButton size="20px" icon="arrowLeft" />
        <LinkText>Back</LinkText>
      </Back>
      <MainContainer>
        <Table columns={columns} data={data?.stores || []} loading={loading} />
      </MainContainer>
      <FooterContext.Consumer>
        {setFooterContent => {
          selectedStores.length > 0
            ? setFooterContent(
                <ButtonContainer>
                  <Button onClick={addSelectedItemsToStoresOrder}>
                    Add to {selectedStores.length} store(s)
                  </Button>
                </ButtonContainer>
              )
            : setFooterContent(null)
          return null
        }}
      </FooterContext.Consumer>
    </>
  )
}

export default connect(null, actions)(SelectStores)
