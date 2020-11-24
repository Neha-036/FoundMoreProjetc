import React from 'react'
import { Menu, animation } from 'react-contexify'
import IconMenuItem from '@/fragments/iconMenuItem'
import windowStore from '@/stores/windowStore'
import addProduct from '../actions/addProduct'
import addProductCategory from '../actions/addProductCategory'

class ColumnContextMenu extends React.Component {
  render() {
    return (
      <Menu id={`column-${this.props.id}`} animation={animation.pop}>
        <IconMenuItem
          onClick={() =>
            windowStore.addModal(
              addProductCategory({
                parent: this.props.id,
                isRoot: this.props.isRoot
              })
            )
          }
          icon="folder-add"
        >
          Add Folder
        </IconMenuItem>
        <IconMenuItem
          onClick={() =>
            windowStore.addModal(addProduct({ parent: this.props.id }))
          }
          disabled={this.props.isRoot}
          icon="file-add"
        >
          Add Product
        </IconMenuItem>
      </Menu>
    )
  }
}

export default ColumnContextMenu
