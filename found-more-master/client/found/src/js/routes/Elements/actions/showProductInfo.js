import React from 'react'
import { Query } from 'react-apollo'
import styled from 'styled-components'
import { inject } from 'mobx-react'
import { Button, Descriptions } from 'antd'
import product from 'Common/graphql/queries/product.graphql'
import { Loading } from '@/fragments/loading'
import editProduct from './editProduct'
import PropertiesDescriptions from '@/fragments/descriptions/properties'

const Actions = styled.div`
  position: absolute;
  width: 90%;
  bottom: 20px;
  right: 20px;
  text-align: right;
`

const Wrapper = styled.div`
  overflow-y: auto;
  max-height: calc(100vh - 200px);
`

const ShowProductInfo = ({ id, windowStore }) => {
  return (
    <Wrapper>
      <Query query={product} variables={{ where: { id } }}>
        {({ loading, data }) => {
          if (loading) return <Loading />
          if (!loading && data) {
            const { product } = data
            return (
              <>
                <Descriptions title="General">
                  <Descriptions.Item span={3} label="Stock">
                    {product.stock}
                  </Descriptions.Item>
                </Descriptions>
                <PropertiesDescriptions dataSource={product} />
                <Actions>
                  <Button
                    onClick={() => windowStore.addModal(editProduct({ id }))}
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
    </Wrapper>
  )
}

export default inject('windowStore')(ShowProductInfo)
