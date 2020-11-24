import React from 'react'
import styled from 'styled-components'
import { useQuery, useMutation } from 'react-apollo'
import { addOrUpdateItem } from '@/helpers/addUpdateItemOrder'
import { Amount } from '../fragments/updateAmount'
import UPDATE_SELECTED_ORDER_ITEM_MUTATION from '@/graphql/mutations/updateSelectedOrderItem.graphql'
import SELECTED_ORDER_ITEM_QUERY from '@/graphql/queries/selectedOrderItem.graphql'
import IconButton from '../fragments/icon-button'

const AmountContainer = styled.div`
  display: flex;
`

const AmountChanger = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 20px;
`

const OrderableItemAmountChanger = ({ properties, id }) => {
  const [updateSelectedOrderItem] = useMutation(
    UPDATE_SELECTED_ORDER_ITEM_MUTATION
  )

  const { loading, error, data, refetch } = useQuery(
    SELECTED_ORDER_ITEM_QUERY,
    {
      variables: { id }
    }
  )

  if (error || loading) return null

  const amount = ((data || {}).selectedOrderItem || {}).amount || 0

  const addOrUpdate = async e => {
    await addOrUpdateItem({ id, properties, amount: e || amount + 1 })
    refetch()
  }

  return (
    <AmountContainer>
      <AmountChanger>
        {amount > 0 && (
          <IconButton
            size="15px"
            icon="minus"
            onClick={() =>
              updateSelectedOrderItem({
                variables: { id, properties, amount: '-1' }
              })
            }
          >
            -
          </IconButton>
        )}
        <Amount
          value={amount}
          type="number"
          onChange={e => addOrUpdate(parseInt(e.target.value, 10))}
        />
        <IconButton size="15px" icon="plus" onClick={() => addOrUpdate()}>
          +
        </IconButton>
      </AmountChanger>
    </AmountContainer>
  )
}

export default OrderableItemAmountChanger
