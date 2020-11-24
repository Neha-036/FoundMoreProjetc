import React from 'react'
import { Query } from 'react-apollo'
import styled from 'styled-components'
import { inject } from 'mobx-react'
import { Button, Descriptions, List } from 'antd'
import orderTemplate from '../orderTemplate.graphql'
import { Loading } from '@/fragments/loading'
import PropertiesDescriptions from '@/fragments/descriptions/properties'
import { editOrderableItem } from './editOrderableItem'

const Actions = styled.div`
  position: absolute;
  width: 90%;
  bottom: 20px;
  right: 20px;
  text-align: right;
`

export const ShowOrderableItemInfo = inject('windowStore')(
  ({ id, windowStore }) => {
    return (
      <Query query={orderTemplate} variables={{ where: { id } }}>
        {({ loading, data }) => {
          if (loading) return <Loading />
          if (!loading && data) {
            const { orderTemplate } = data
            return (
              <>
                <PropertiesDescriptions dataSource={orderTemplate} />
                <Descriptions
                  title={`Elements ${
                    orderTemplate.children.some(child => child.filterOptions)
                      ? 'with varations'
                      : ''
                  }`}
                />
                <List
                  bordered
                  dataSource={orderTemplate.children}
                  renderItem={(item, i) =>
                    item.filterOptions ? (
                      <>
                        <List.Item>
                          <List.Item.Meta
                            title={item.properties.name}
                            description={`Language: ${item.filterOptions.language.isoCode}`}
                          />
                          <List
                            dataSource={item.children}
                            renderItem={item => (
                              <List.Item>
                                {item.properties.name}
                                {` x ${item.defaultOrderAmount}`}
                              </List.Item>
                            )}
                          />
                        </List.Item>
                      </>
                    ) : (
                      <List.Item>
                        <List.Item.Meta title={item.product.properties.name} />
                        <div>x{item.defaultOrderAmount}</div>
                      </List.Item>
                    )
                  }
                />
                <Actions>
                  <Button
                    onClick={() =>
                      windowStore.addModal(editOrderableItem({ id }))
                    }
                    type="primary"
                    icon="form"
                  >
                    Edit
                  </Button>
                </Actions>
              </>
            )
          }
          return null
        }}
      </Query>
    )
  }
)
