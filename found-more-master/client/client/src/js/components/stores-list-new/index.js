import React, { useMemo } from 'react'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo'
import Table from '../fragments/newTable'
import StoreDetail from './store-detail'

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

const StoresList = ({ search, columns }) => {
  const { loading, error, data } = useQuery(STORES_QUERY, {
    variables: { search }
  })
  if (error || loading) return null
  return <Table data={data?.stores} columns={columns} />
}

export default StoresList
