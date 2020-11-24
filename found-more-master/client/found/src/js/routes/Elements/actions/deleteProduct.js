import { client } from '@/../index'
import updateProduct from 'Common/graphql/mutations/updateProduct.graphql'

const deleteProduct = ({ id }) => ({
  title: 'Are you sure you want to delete this product?',
  content: 'The product will not be available any longer after this action',
  async onOk() {
    await client.mutate({
      mutation: updateProduct,
      variables: {
        where: { id },
        input: { deletedAt: new Date().toISOString() }
      }
    })
  }
})

export default deleteProduct
