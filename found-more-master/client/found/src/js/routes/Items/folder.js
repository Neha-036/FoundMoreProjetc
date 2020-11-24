import React, { Component } from 'react'
import styled from 'styled-components'
import { MenuProvider } from 'react-contexify'
import { DragSource, DropTarget } from 'react-dnd'
import FolderContextMenu from './contextMenus/folderContextMenu'
import { ItemTypes } from '../../constants'

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

const Brand = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
`

export const FolderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 20px;
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
  cursor: pointer;
  & > ${Brand} {
    font-size: 12px;
    margin: 3px;
  }
  &:hover,
  &:active {
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
class Folder extends Component {
  render() {
    const {
      isDragging,
      id,
      parent,
      connectDragSource,
      connectDropTarget,
      children,
      brand,
      ...props
    } = this.props
    return connectDragSource(
      connectDropTarget(
        <div>
          <MenuProvider id={`folder-${id}`}>
            <FolderWrapper style={{ opacity: isDragging ? 0.5 : 1 }} {...props}>
              {children}
              <Brand>{brand}</Brand>
            </FolderWrapper>
          </MenuProvider>
          <FolderContextMenu id={id} parent={parent} />
        </div>
      )
    )
  }
}

export default Folder
