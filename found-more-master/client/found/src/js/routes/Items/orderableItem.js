import React, { Component } from 'react'
import styled from 'styled-components'
import { MenuProvider } from 'react-contexify'
import { DragSource, DropTarget } from 'react-dnd'
import { ItemTypes } from '@/constants'
import OrderableItemContextMenu from './contextMenus/orderableItemContextMenu'
import { inject } from 'mobx-react'
import { ShowOrderableItemInfo } from './actions/showOrderableItemInfo'

const folderSource = {
  beginDrag({ id }) {
    return { id }
  }
}

const folderTarget = {
  drop(props, monitor) {
    const draggedId = monitor.getItem().id
    if (draggedId !== props.id) {
      props.moveFolder(props.id, draggedId)
    }
  }
}

export const OrderableItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 3px;
  position: relative;
  & > p {
    margin-left: 10px;
    font-size: 16px;
  }
  ${({ active }) =>
    active &&
    `
    border-radius: 2px;
    background: #E1EDF5!important;
  `}
  ${({ isOver }) => isOver && 'border: 2px solid #649DD1;'}
  &:hover, &:active {
    outline: 2px solid #649dd1;
  }
`

@DropTarget(ItemTypes.FOLDER, folderTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver({ shallow: true })
}))
@DragSource(ItemTypes.FOLDER, folderSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))
@inject('windowStore')
class OrderableItem extends Component {
  render() {
    const {
      isDragging,
      id,
      connectDragSource,
      connectDropTarget,
      children,
      ...props
    } = this.props
    return connectDragSource(
      connectDropTarget(
        <div>
          <MenuProvider id={`item-${id}`}>
            <OrderableItemWrapper
              onDoubleClick={() =>
                this.props.windowStore.setDrawer({
                  content: <ShowOrderableItemInfo id={id} />,
                  title: 'Orderable item info'
                })
              }
              style={{ opacity: isDragging ? 0.5 : 1 }}
              {...props}
            >
              {children}
            </OrderableItemWrapper>
          </MenuProvider>
          <OrderableItemContextMenu id={id} />
        </div>
      )
    )
  }
}

export default OrderableItem
