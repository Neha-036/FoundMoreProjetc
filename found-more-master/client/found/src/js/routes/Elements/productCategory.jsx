import React, { useRef } from 'react'
import { withElementsBag } from './elementsBag'
import { useDrop, useDrag } from 'react-dnd'
import ItemWrapper from './itemWrapper'
import { Icon } from 'antd'
import moveItem from './moveItem'
import { setLoading } from '@/fragments/loading'
import { MenuProvider } from 'react-contexify'
import ProductCategoryContextMenu from './contextMenus/productCategoryContextMenu'
import styled from 'styled-components'

const Brand = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 3px;
`

const ProductCategory = setLoading(
  withElementsBag(props => {
    const ref = useRef(null)
    const {
      pushToHistory,
      history,
      setCurrent,
      isRoot,
      ...productCategory
    } = props
    const isSelected = history.some(item => item.id === productCategory.id)
    const [, drag] = useDrag({
      item: { type: 'element', productCategory },
      collect: monitor => ({
        opacity: monitor.isDragging() ? 0.5 : 1
      }),
      begin() {
        setCurrent(productCategory.parent)
      }
    })
    const [{ isOver }, drop] = useDrop({
      accept: 'element',
      async drop(item, monitor) {
        try {
          props.setLoading(true)
          await moveItem(item, productCategory, monitor.didDrop())
        } catch (e) {
          throw new Error(e)
        }
        props.setLoading(false)
      },
      collect: monitor => ({
        isOver: monitor.isOver({ shallow: true })
      }),
      canDrop: item => {
        if (item?.productCategory?.id === productCategory?.id) {
          return false
        }
        return true
      },
      hover: (_, monitor) => {
        if (
          monitor.canDrop() &&
          !history.some(item => item.id === productCategory?.id)
        ) {
          setTimeout(() => pushToHistory(productCategory), 500)
        }
      }
    })
    drag(drop(ref))
    return (
      <div ref={ref}>
        <MenuProvider id={productCategory.id}>
          <ItemWrapper
            style={{ border: isOver && '2px dashed #1890ff' }}
            isSelected={isSelected}
            onClick={() => pushToHistory(productCategory)}
          >
            <Icon
              type={!isSelected ? 'folder' : 'folder-open'}
              style={{ marginRight: 10 }}
            />
            {productCategory?.properties?.name}
            {isRoot && <Brand>{productCategory?.brand?.name}</Brand>}
          </ItemWrapper>
          <ProductCategoryContextMenu id={productCategory.id} isRoot={isRoot} />
        </MenuProvider>
      </div>
    )
  })
)

export default ProductCategory
