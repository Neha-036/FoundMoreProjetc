import React, { useContext } from 'react'
import styled from 'styled-components'
import LoadingSpinner from '../fragments/loading-spinner'
import selectedOrderItems from '@/graphql/queries/selectedOrderItems.graphql'
import Button, { ButtonWrapper } from '../fragments/button'
import storesConnection from 'Common/graphql/queries/storesConnection.graphql'
import stores from 'Common/graphql/queries/stores.graphql'
import { Link } from 'react-router-dom'
import { Query, useQuery } from 'react-apollo'
import { FooterContext } from '../layout/order-sidebar'

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

const AddOrderToStoresButton = () => {
  const { loading, error, data } = useQuery(selectedOrderItems)
  const setFooterContent = useContext(FooterContext)

  if (loading || error) return null

  if (data.selectedOrderItems.length > 0) {
    setFooterContent(
      <Query
        query={storesConnection}
        variables={{
          where: {
            brand: { domain: window.location.hostname.split('.')[0] }
          }
        }}
      >
        {({ loading, error, data }) => {
          if (loading) return <LoadingSpinner />
          if (error) throw new Error(error)
          if (data.storesConnection.aggregate.count === 1) {
            return (
              <Query
                query={stores}
                variables={{
                  where: {
                    brand: {
                      domain: window.location.hostname.split('.')[0]
                    }
                  }
                }}
              >
                {({ loading, error, data }) =>
                  !loading &&
                  !error && (
                    <ButtonContainer
                      onClick={() => props.addOrderToStores(data.stores)}
                    >
                      <Button>Add to {data.stores[0].name}</Button>
                    </ButtonContainer>
                  )
                }
              </Query>
            )
          }
          return (
            <Link to="/projects/store-selection">
              <ButtonContainer>
                <Button>Select Stores</Button>
              </ButtonContainer>
            </Link>
          )
        }}
      </Query>
    )
  } else {
    setFooterContent(null)
  }
  return null
}

export default AddOrderToStoresButton
