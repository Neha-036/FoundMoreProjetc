import React from 'react'
import styled from 'styled-components'
import { useQuery } from 'react-apollo'
import { Link } from 'react-router-dom'
import SELECTED_ORDER_ITEMS_QUERY from '@/graphql/queries/selectedOrderItems.graphql'
import OrderableItemAmountChanger from '../orderable-item-amount-changer'
import Button from '../fragments/button'

const Wrapper = styled.div`
  display: flex;
  & > a {
    min-width: 200px;
  }
`

const AmountChanger = orderTemplate => {
  const { loading, error, data } = useQuery(SELECTED_ORDER_ITEMS_QUERY)
  if (loading || error) return null
  return (
    <Wrapper>
      <OrderableItemAmountChanger {...orderTemplate} />
      {!!data.selectedOrderItems.length && (
        <Link to="/projects/store-selection">
          <Button>Select Stores</Button>
        </Link>
      )}
    </Wrapper>
  )
}

export default AmountChanger
