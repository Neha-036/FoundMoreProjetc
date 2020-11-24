import React from 'react'
import { withElementsBag } from './elementsBag'
import { useDrag } from 'react-dnd'
import { Icon } from 'antd'
import ItemWrapper from './itemWrapper'
import { MenuProvider } from 'react-contexify'
import ProductContextMenu from './contextMenus/productContextMenu'
import { inject } from 'mobx-react'
import ShowProductInfo from './actions/showProductInfo'

const Product = withElementsBag(
  /**
   * @param {Object} ProductProps
   * @param {import('../../stores/windowStore')['default']} ProductProps.windowStore
   */
  ({ windowStore, toggleItem, selectedItems, columnId, ...product }) => {
    const { properties } = product
    const [{ opacity }, dragRef] = useDrag({
      item: { type: 'element', product },
      collect: monitor => ({
        opacity: monitor.isDragging() ? 0.5 : 1
      })
    })
    return (
      <div ref={dragRef}>
        <MenuProvider id={product.id}>
          <ItemWrapper
            isSelected={selectedItems.some(item => item.id === product.id)}
            onClick={e => toggleItem({ id: product.id, columnId }, e)}
            onDoubleClick={() =>
              windowStore.setDrawer({
                content: <ShowProductInfo id={product.id} />,
                title: 'Product info'
              })
            }
            style={{ opacity }}
          >
            <Icon type="tag" style={{ marginRight: 10 }} />
            {properties.name}
          </ItemWrapper>
          <ProductContextMenu id={product.id} />
        </MenuProvider>
      </div>
    )
  }
)

export default inject('windowStore')(Product)
