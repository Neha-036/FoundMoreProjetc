import React from 'react'
import { Menu, animation, Separator } from 'react-contexify'
import IconMenuItem from '@/fragments/iconMenuItem'
import windowStore from '@/stores/windowStore'
import editProduct from '../actions/editProduct'
import deleteProduct from '../actions/deleteProduct'
import ShowProductInfo from '../actions/showProductInfo'

class ProductContextMenu extends React.Component {
  render() {
    return (
      <Menu id={this.props.id} animation={animation.pop}>
        <IconMenuItem
          onClick={() =>
            windowStore.setDrawer({
              content: <ShowProductInfo id={this.props.id} />,
              title: 'Product Info'
            })
          }
          icon="info"
        >
          Show Info
        </IconMenuItem>
        <Separator />
        <IconMenuItem
          onClick={() =>
            windowStore.addModal(editProduct({ id: this.props.id }))
          }
          icon="edit"
        >
          Edit Product
        </IconMenuItem>
        <IconMenuItem
          icon="delete"
          onClick={() =>
            windowStore.addConfirmation(deleteProduct({ id: this.props.id }))
          }
        >
          Delete Product
        </IconMenuItem>
      </Menu>
    )
  }
}
export default ProductContextMenu
