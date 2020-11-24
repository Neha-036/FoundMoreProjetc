import React from 'react'
import { useDrop } from 'react-dnd'
import styled from 'styled-components'
import { setLoading } from '@/fragments/loading'
import moveItem from './moveItem'
import ItemWrapper from './itemWrapper'
import ProductCategory from './productCategory'
import Product from './product'
import { withElementsBag } from './elementsBag'
import { MenuProvider } from 'react-contexify'
import ColumnContextMenu from './contextMenus/columnContextMenu'
import compliesWithFilters from '@/utils/compliesWithFilters'
import { Empty } from 'antd'

const ColumnWrapper = styled.div`
  display: flex;
  width: 300px;
  border-right: 1px solid #afafaf;
  padding: 0 5px;
  min-height: 90vh;
  max-height: 90vh;
  overflow-y: auto;
  flex-direction: column;
  & > div:nth-of-type(odd) > div > ${ItemWrapper} {
    background-color: whitesmoke;
  }
`

const ColumnView = ({ style, children }) => {
  const childrenCount = React.Children.toArray(children).filter(child =>
    React.isValidElement(child)
  ).length
  return (
    <ColumnWrapper style={style}>
      {children}
      {!childrenCount && <Empty style={{ transform: 'translateY(50%)' }} />}
    </ColumnWrapper>
  )
}

const Column = withElementsBag(
  setLoading(
    ({
      productCategories,
      productCategory,
      setLoading,
      setCurrent,
      isRoot,
      filters
    }) => {
      /**
       * Return the id of the column for context-menu purposes.
       * @return {?string}
       */
      const getCurrent = () => {
        if (productCategories) return null
        return productCategory.id
      }
      const renderProductCategory = pc =>
        !pc.deletedAt &&
        (isRoot ? compliesWithFilters(pc, filters) : true) && (
          <ProductCategory
            columnId={getCurrent()}
            key={pc.id}
            isRoot={isRoot}
            {...pc}
          />
        )
      const renderProduct = product =>
        !product.deletedAt && (
          <Product columnId={getCurrent()} key={product.id} {...product} />
        )
      const [{ isOver }, drop] = useDrop({
        accept: 'element',
        async drop(item, monitor) {
          try {
            setLoading(true)
            await moveItem(item, productCategory, monitor.didDrop())
            setCurrent(productCategory)
          } catch (e) {
            throw new Error(e)
          }
          setLoading(false)
        },
        canDrop: (item, monitor) => {
          const parent = productCategories ? null : productCategory
          if (!parent && !item?.productCategory?.parent) return false
          return true
        },
        collect: monitor => ({
          isOver: monitor.isOver({ shallow: true })
        })
      })
      return (
        <div ref={drop}>
          <MenuProvider id={`column-${getCurrent()}`}>
            <ColumnView style={{ border: isOver && '2px dashed #1890ff' }}>
              {productCategories?.map(renderProductCategory)}
              {productCategory?.children?.map(renderProductCategory)}
              {productCategory?.products?.map(renderProduct)}
            </ColumnView>
            <ColumnContextMenu isRoot={isRoot} id={getCurrent()} />
          </MenuProvider>
        </div>
      )
    }
  )
)

export default Column
