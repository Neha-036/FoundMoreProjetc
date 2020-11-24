import React from 'react'
import styled from 'styled-components'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Table from '../fragments/table'
import StoresDetail from './stores-detail'
import LoadingSpinner from '../fragments/loading-spinner'

const STORES_QUERY = gql`
  query StoresQuery($search: String){
    stores(where: { 
      brand: { domain: "${window.location.hostname.split('.')[0]}" },
      deletedAt: null
    } search: $search orderBy: name_ASC) {
      id
      storeNumber
      name
      address {
        id
        city
        countryCode
        street
      }
      type 
    }
  }
`

const MainContainer = styled.div`
  margin-bottom: 50px;
`

const defaultLayout = {
  columns: {
    storeNumber: {
      label: 'Nr.'
    },
    name: {
      label: 'Store'
    },
    'address.city': {
      label: 'City'
    },
    'address.countryCode': {
      label: 'Country'
    },
    'address.street': {
      label: 'Street'
    },
    type: {
      label: 'Type'
    }
  },
  popup: {
    title: 'name',
    body: StoresDetail
  }
}

const StoresList = ({ search = '', layout }) => {
  return (
    <MainContainer>
      <Query query={STORES_QUERY} variables={{ search }}>
        {({ loading, error, data }) => {
          if (loading) return <LoadingSpinner />
          if (error) throw new Error(error)
          return <Table layout={layout || defaultLayout} data={data.stores} />
        }}
      </Query>
    </MainContainer>
  )
}

export default StoresList
