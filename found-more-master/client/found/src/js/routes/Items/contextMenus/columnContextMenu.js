import React from 'react'
import { Menu, animation, Separator } from 'react-contexify'
import 'react-contexify/dist/ReactContexify.min.css'
import { inject } from 'mobx-react'
import IconMenuItem from '@/fragments/iconMenuItem'
import { addFolder } from '../actions/addFolder'
import { ShowFolderInfo } from '../actions/showFolderinfo'
import { addOrderableItem } from '../actions/addOrderableItem'

const ColumnContextMenu = ({ id, windowStore }) => {
  return (
    <Menu id={`column-${id}`} animation={animation.pop}>
      <IconMenuItem
        disabled={id === null}
        icon="info"
        onClick={() =>
          windowStore.setDrawer({
            content: <ShowFolderInfo id={id} />,
            title: 'Folder info'
          })
        }
      >
        Show info
      </IconMenuItem>
      <Separator />
      <IconMenuItem
        icon="folder-add"
        onClick={() => windowStore.addModal(addFolder({ parent: id }))}
      >
        New Folder
      </IconMenuItem>
      <IconMenuItem
        icon="file-add"
        onClick={() => windowStore.addModal(addOrderableItem({ parent: id }))}
      >
        New Orderable Item
      </IconMenuItem>
    </Menu>
  )
}

export default inject('windowStore')(ColumnContextMenu)
