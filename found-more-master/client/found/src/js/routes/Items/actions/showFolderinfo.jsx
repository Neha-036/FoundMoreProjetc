import React from 'react'
import { Query } from 'react-apollo'
import orderTemplate from 'Common/graphql/queries/orderTemplate.graphql'
import styled from 'styled-components'
import { inject } from 'mobx-react'
import { Col, Row, Button } from 'antd'
import { Loading } from '@/fragments/loading'
import { editFolder } from './editFolder'

const DescriptionItem = ({ title, content }) => (
  <div
    style={{
      fontSize: 14,
      lineHeight: '22px',
      marginBottom: 7,
      color: 'rgba(0,0,0,0.65)'
    }}
  >
    <p
      style={{
        marginRight: 8,
        display: 'inline-block',
        color: 'rgba(0,0,0,0.85)'
      }}
    >
      {title}:
    </p>
    {content}
  </div>
)

const Actions = styled.div`
  position: absolute;
  width: 90%;
  bottom: 20px;
  right: 20px;
  text-align: right;
`

export const ShowFolderInfo = inject('windowStore')(({ id, windowStore }) => {
  return (
    <Query
      query={orderTemplate}
      variables={{ where: { id } }}
      fetchPolicy="no-cache"
    >
      {({ loading, data }) => {
        if (loading) return <Loading />
        if (!loading && data) {
          const { orderTemplate } = data
          return (
            <>
              <Row>
                <Col span={12}>
                  <DescriptionItem
                    title="Folder name"
                    content={orderTemplate.properties.name}
                  />
                </Col>
                <Col span={12}>
                  <DescriptionItem
                    title="Brand"
                    content={orderTemplate.brand.name}
                  />
                </Col>
              </Row>
              <Actions>
                <Button
                  onClick={() => windowStore.addModal(editFolder({ id }))}
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
})
