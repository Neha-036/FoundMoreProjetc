import React from 'react'
import { Menu, animation } from 'react-contexify'
import IconMenuItem from '@/fragments/iconMenuItem'
import windowStore from '@/stores/windowStore'
import editProductCategory from '../actions/editProductCategory'
import deleteProductCategory from '../actions/deleteProductCategory'

class ProductCategoryContextMenu extends React.Component {
  render() {
    return (
      <Menu id={this.props.id} animation={animation.pop}>
        <IconMenuItem icon="folder-add">Add folder</IconMenuItem>
        <IconMenuItem
          onClick={() =>
            windowStore.addModal(
              editProductCategory({
                id: this.props.id,
                isRoot: this.props.isRoot
              })
            )
          }
          icon="edit"
        >
          Edit folder
        </IconMenuItem>
        <IconMenuItem
          icon="delete"
          onClick={() =>
            windowStore.addConfirmation(
              deleteProductCategory({ id: this.props.id, parent })
            )
          }
        >
          Delete Folder
        </IconMenuItem>
      </Menu>
    )
  }
}
export default ProductCategoryContextMenu
