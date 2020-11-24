import React from 'react'
import { Menu, animation, Separator } from 'react-contexify'
import 'react-contexify/dist/ReactContexify.min.css'
import { inject } from 'mobx-react'
import IconMenuItem from '@/fragments/iconMenuItem'
import { editOrderableItem } from '../actions/editOrderableItem'
import { ShowOrderableItemInfo } from '../actions/showOrderableItemInfo'
import { moveUp } from '../actions/moveUp'
import { moveDown } from '../actions/moveDown'

const OrderableItemContextMenu = ({ id, windowStore }) => {
  return (
    <Menu id={`item-${id}`} animation={animation.pop}>
      <IconMenuItem
        icon="info"
        onClick={() =>
          windowStore.setDrawer({
            content: <ShowOrderableItemInfo id={id} />,
            title: 'Orderable item info'
          })
        }
      >
        Show info
      </IconMenuItem>
      <Separator />
      <IconMenuItem icon="caret-up" onClick={() => moveUp({ id })}>
        Move up
      </IconMenuItem>
      <IconMenuItem icon="caret-down" onClick={() => moveDown({ id })}>
        Move down
      </IconMenuItem>
      <Separator />
      <IconMenuItem
        icon="form"
        onClick={() => windowStore.addModal(editOrderableItem({ id }))}
      >
        Edit
      </IconMenuItem>
      <IconMenuItem icon="delete">Delete</IconMenuItem>
    </Menu>
  )
}

export default inject('windowStore')(OrderableItemContextMenu)
