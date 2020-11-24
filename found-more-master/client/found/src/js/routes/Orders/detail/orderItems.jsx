import React from 'react'
import { graphql } from 'react-apollo'
import updateOrder from 'Common/graphql/mutations/updateOrder.graphql'
import { List, Avatar, Button, Input } from 'antd'
import styled from 'styled-components'

const ListItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`

const AmountChanger = styled.div`
  display: flex;
  align-items: center;
`

const Amount = styled.div`
  margin: 0 10px;
`

const RenderItem = graphql(updateOrder, { name: 'updateOrder' })(
  ({ orderTemplate, amount, updateOrder, orderId, id }) => {
    const updateAmount = amount =>
      updateOrder({
        variables: {
          where: { id: orderId },
          input: {
            items: {
              update: {
                where: { id },
                data: { amount }
              }
            }
          }
        }
      })
    return (
      <List.Item>
        <ListItem>
          <List.Item.Meta
            avatar={
              <Avatar
                src={
                  orderTemplate.properties.images.length > 0 &&
                  orderTemplate.properties.images[0].location
                }
              />
            }
            title={orderTemplate.properties.name}
            description={orderTemplate.properties.articleNumber}
          />
          <AmountChanger>
            {amount > 0 && (
              <Button icon="minus" onClick={() => updateAmount(amount - 1)} />
            )}
            <Amount>
              <Input
                style={{ width: 50, textAlign: 'center' }}
                value={amount}
                onChange={e => updateAmount(e.target.value || 0)}
              />
            </Amount>
            <Button icon="plus" onClick={() => updateAmount(amount + 1)} />
          </AmountChanger>
        </ListItem>
      </List.Item>
    )
  }
)

export default ({ items, id }) => (
  <React.Fragment>
    <h4>Projects</h4>
    <List
      itemLayout="horizontal"
      dataSource={items}
      renderItem={props => <RenderItem {...props} orderId={id} />}
    />
  </React.Fragment>
)
