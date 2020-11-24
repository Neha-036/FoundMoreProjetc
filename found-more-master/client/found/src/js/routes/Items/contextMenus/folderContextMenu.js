import React from 'react'
import { Menu, animation, Separator } from 'react-contexify'
import 'react-contexify/dist/ReactContexify.min.css'
import { inject } from 'mobx-react'
import IconMenuItem from '@/fragments/iconMenuItem'
import { editFolder } from '../actions/editFolder'
import { addFolder } from '../actions/addFolder'
import { ShowFolderInfo } from '../actions/showFolderinfo'
import { deleteFolder } from '../actions/deleteFolder'
import { moveUp } from '../actions/moveUp'
import { moveDown } from '../actions/moveDown'

const FolderContextMenu = ({ id, parent, windowStore }) => {
  return (
    <Menu id={`folder-${id}`} animation={animation.pop}>
      <IconMenuItem
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
      <IconMenuItem icon="caret-up" onClick={() => moveUp({ id })}>
        Move up
      </IconMenuItem>
      <IconMenuItem icon="caret-down" onClick={() => moveDown({ id })}>
        Move down
      </IconMenuItem>
      <Separator />
      <IconMenuItem
        icon="folder-add"
        onClick={() => windowStore.addModal(addFolder({ parent: id }))}
      >
        Add Folder
      </IconMenuItem>
      <IconMenuItem
        icon="edit"
        onClick={() => windowStore.addModal(editFolder({ id, parent }))}
      >
        Edit Folder
      </IconMenuItem>
      <IconMenuItem
        icon="delete"
        onClick={() =>
          windowStore.addConfirmation(deleteFolder({ id, parent }))
        }
      >
        Delete Folder
      </IconMenuItem>
    </Menu>
  )
}

export default inject('windowStore')(FolderContextMenu)
