import { client } from '@/../index'
import updateProductCategory from 'Common/graphql/mutations/updateProductCategory.graphql'

const deleteProductCategory = ({ id, parent }) => ({
  title: 'Are you sure you want to delete this folder?',
  content:
    'This folder, underlaying subfolders and all products will be deleted.',
  async onOk() {
    await client.mutate({
      mutation: updateProductCategory,
      variables: {
        where: { id },
        input: { deletedAt: new Date().toISOString() }
      }
    })
  }
})

export default deleteProductCategory
