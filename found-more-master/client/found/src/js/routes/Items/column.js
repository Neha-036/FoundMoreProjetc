import React, { Component } from 'react'
import styled from 'styled-components'
import { DropTarget } from 'react-dnd'
import { ItemTypes } from '@/constants'

const columnTarget = {
  drop(props, monitor) {
    const draggedId = monitor.getItem().id
    if (draggedId !== props.id && !monitor.didDrop()) {
      props.moveFolder(props.id, draggedId)
    }
  }
}

const ColumnWrapper = styled.div`
  border-right: 4px solid #afafaf;
  padding: 10px;
  & > div:nth-child(even) {
    background-color: #ededed;
  }
  overflow-y: auto;
  width: 300px;
  height: calc(100vh - 150px);
  ${({ isOver }) => isOver && 'border: 2px solid #649DD1;'}
`

@DropTarget(ItemTypes.FOLDER, columnTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver({ shallow: true })
}))
class Column extends Component {
  render() {
    const { connectDropTarget, children, ...props } = this.props
    return connectDropTarget(
      <div>
        <ColumnWrapper {...props}>{children}</ColumnWrapper>
      </div>
    )
  }
}

export default Column
