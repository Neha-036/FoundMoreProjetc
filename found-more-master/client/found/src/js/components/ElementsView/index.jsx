import React, { useState } from 'react'
import { Query } from 'react-apollo'
import { DndProvider, useDrag } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import { Input, Breadcrumb, List, Icon } from 'antd'
import styled from 'styled-components'
import rootProductCategories from './rootProductCategories.graphql'
import productCategory from './productCategory.graphql'

const ElementsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 180px);
`

const ProductGategoryWrapper = styled.div`
  display: flex;
  flex: 1;
  border: 1px solid #d3d3d3;
  padding: 20px;
  border-radius: 5px;
  flex-wrap: wrap;
  overflow-y: auto;
`

const Background = styled.div`
  position: absolute;
  z-index: -10;
  top: 50%;
  transform: translateY(-50%);
  background-color: none;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  transition: all 0.2s ease-out;
`

const ProductCategory = styled.div`
  position: relative;
  overflow: hidden;
  flex: 1 0 calc(50% - 20px);
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin: 10px;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
  transition: all 0.2s ease-out;
  &:hover {
    color: white;
    & > ${Background} {
      background-color: #1890ff;
      transform: scale(100);
    }
  }
  & > span {
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  }
  &:active {
    transform: translateY(1px);
  }
`

const ProductCategories = pushHistory => (category, i) => (
  <ProductCategory
    onClick={() =>
      pushHistory({ id: category.id, name: category.properties.name })
    }
    key={i}
  >
    <Background />
    <span>{category.properties.name}</span>
  </ProductCategory>
)

const Product = ({ id, properties, brand }) => {
  const [, drag] = useDrag({
    item: {
      id,
      properties,
      brand,
      type: 'elements'
    }
  })
  return (
    <div ref={drag}>
      <List.Item ref={drag}>
        <List.Item.Meta title={properties.name} />
      </List.Item>
    </div>
  )
}

const renderProducts = products => (
  <List
    style={{ width: '100%' }}
    itemLayout="horizontal"
    dataSource={products.filter(item => !item.deletedAt)}
    renderItem={item => <Product {...item} />}
  />
)

const ElementsView = ({ brandId, withDragDrop }) => {
  const [history, setHistory] = useState([])
  const pushHistory = historyObject => {
    setHistory([...history, historyObject])
  }
  const getTopHistory = !!history.length && history[history.length - 1]
  const productCategoryQuery = () => {
    if (!history.length) {
      return { query: rootProductCategories, variables: { brandId } }
    }
    return {
      query: productCategory,
      variables: { where: { id: getTopHistory.id } }
    }
  }
  const main = (
    <>
      <Input.Search placeholder="Type to search" />
      <Breadcrumb style={{ margin: '10px 0' }}>
        <Breadcrumb.Item onClick={() => setHistory([])}>
          <Icon type="home" />
        </Breadcrumb.Item>
        {history.map(({ id, name }, i) => (
          <Breadcrumb.Item
            key={id}
            style={{ cursor: i !== history.length - 1 && 'pointer' }}
            onClick={() => setHistory(history.slice(0, i + 1))}
          >
            {name}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
      <Query {...productCategoryQuery()}>
        {({ loading, data, error }) => {
          if (loading) return 'Loading...'
          if (error) throw new Error(error)
          if (data) {
            return (
              <ElementsWrapper>
                <ProductGategoryWrapper>
                  {data.productCategories &&
                    data.productCategories
                      .filter(item => !item.deletedAt)
                      .map(ProductCategories(pushHistory))}
                  {data.productCategory &&
                    !!data.productCategory.children.length &&
                    data.productCategory.children
                      .filter(item => !item.deletedAt)
                      .map(ProductCategories(pushHistory))}
                  {data.productCategory &&
                    !!data.productCategory.products.length &&
                    renderProducts(data.productCategory.products)}
                </ProductGategoryWrapper>
              </ElementsWrapper>
            )
          }
          return null
        }}
      </Query>
    </>
  )
  if (withDragDrop) {
    return <DndProvider backend={HTML5Backend}>{main}</DndProvider>
  }
  return main
}

export default ElementsView
