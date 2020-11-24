import React from 'react'
import styled from 'styled-components'
import { Query, useQuery } from 'react-apollo'
import { Link, useParams } from 'react-router-dom'
import order from 'Common/graphql/queries/order.graphql'
import confirmOrderPermission from 'Common/graphql/queries/confirmOrderPermission.graphql'
import IconButton from '../fragments/icon-button'
import Spacing from '../fragments/spacing'
import Status from './status'
import Title from '../fragments/title'
import Backorder from './backorder'
import CheckOrder from './checkOrder'
import { useMeStore } from '@/stores/meStore'

const LinkText = styled.h5`
  text-decoration: none;
  display: inline-block;
  margin-left: 10px;
  vertical-align: top;
`
const RightButtonText = styled(LinkText)`
  margin-left: 0;
  margin-right: 10px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
const Back = styled.div`
  display: flex;
  margin: 10px 0;
`

const AddressDetailContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`
const Item = styled.div`
  flex-basis: 50%;
  @media (min-width: ${({ theme }) => theme.bpDesktop}) {
    flex-basis: 25%;
  }
`
const Adress = styled.div`
  flex-basis: 100%;
  margin-top: 20px;
`
const Results = styled.p`
  font-size: 16px;
`
const CommentsContainer = styled.div`
  margin-top: 20px;
`
const ItemsContainer = styled.div``

export const ItemsInner = styled.div`
  display: flex;
`
export const ItemProp = styled.p`
  flex-basis: 30%;
`
const CheckOrderContainer = styled.div`
  width: 40%;
  margin-top: 20px;
`

const AddressDetails = props => (
  <AddressDetailContainer>
    <Item>
      <p>Order Number</p>
      <Results>{props.orderNumber}</Results>
    </Item>
    <Item>
      <p>Order Date</p>
      <Results>{new Date(props.orderedAt).toLocaleDateString()}</Results>
    </Item>
    <Item>
      <p>Store</p>
      <Results>{props.store.name}</Results>
    </Item>
    {props.createdBy && (
      <Item>
        <p>Ordered by</p>
        <Results>
          {props.createdBy.firstName} {props.createdBy.lastName}
        </Results>
      </Item>
    )}
    <Adress>
      <p>
        <b>Address</b>
      </p>
      <Results>
        {props.address.street} {props.address.number}
      </Results>
      <Results>
        {props.address.postalCode} {props.address.city}
      </Results>
    </Adress>
  </AddressDetailContainer>
)

const Comments = props => {
  const renderComments = props.comments.map(comment => (
    <p key={comment.id}>
      {comment.content} -{' '}
      <b>
        {comment.user.firstName} {comment.user.lastName}
      </b>
    </p>
  ))
  return (
    <CommentsContainer>
      <p>
        <b>Comments</b>
      </p>
      {props.comments.length > 0 ? (
        renderComments
      ) : (
        <p>No comments were placed for this order</p>
      )}
      <p />
    </CommentsContainer>
  )
}

const Items = props => {
  const renderItems = props.items.map(item => (
    <ItemsInner key={item.id}>
      <ItemProp>{item.name}</ItemProp>
      <ItemProp>{item.amount}</ItemProp>
    </ItemsInner>
  ))
  return (
    <ItemsContainer>
      <p>
        <b>Order</b>
      </p>
      {renderItems}
    </ItemsContainer>
  )
}

const Detail = () => {
  const { id } = useParams()
  const { id: meId } = useMeStore()
  const { loading, error, data } = useQuery(order, {
    variables: { where: { id } }
  })
  if (loading || error) return null
  return (
    <>
      <Title>Order Detail</Title>
      <Spacing space="32px" />
      <ButtonContainer>
        <Link to="/orders">
          <Back>
            <IconButton size="20px" icon="arrowLeft" />
            <LinkText>Back</LinkText>
          </Back>
        </Link>
        <RightButtonText>Create Note</RightButtonText>
        <Backorder userId={meId} id={id} />
      </ButtonContainer>
      <hr />
      <AddressDetails {...data?.order} />
      <Status {...data?.order} />
      <Query query={confirmOrderPermission}>
        {({ loading, error, data: confirmData }) =>
          !loading &&
          !error &&
          data?.order?.status === 'WAITING_FOR_APPROVAL' &&
          confirmData.canUpdateOwnOrderStatus && (
            <CheckOrderContainer>
              <CheckOrder items={data?.order?.items} id={id} />
            </CheckOrderContainer>
          )
        }
      </Query>
      <Comments {...data?.order} />
      <p>
        <b>PO Number</b>
      </p>
      <p>
        {data?.order.poNumber
          ? data?.order.poNumber
          : 'No PO number specified for this order'}
      </p>
      <Items {...data?.order} />
    </>
  )
}

export default Detail
