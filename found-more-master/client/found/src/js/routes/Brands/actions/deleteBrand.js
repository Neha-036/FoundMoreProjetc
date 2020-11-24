import { client } from '@/../index'
import updateBrand from 'Common/graphql/mutations/updateBrand.graphql'

const deleteBrand = ({ id }) => ({
  title: 'Are you sure you want to delete this brand?',
  content: 'DANGER!',
  async onOk() {
    await client.mutate({
      mutation: updateBrand,
      variables: {
        where: { id },
        input: { deletedAt: new Date().toISOString() }
      }
    })
  }
})

export default deleteBrand
