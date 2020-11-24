import { client } from '@/../index'
import updateUser from 'Common/graphql/mutations/updateUser.graphql'

const deleteUser = ({ id }) => ({
  title: 'Are you sure you want to delete this user?',
  content: 'To recover a user, you need to contact you system administrator.',
  async onOk() {
    await client.mutate({
      mutation: updateUser,
      variables: {
        where: { id },
        input: { deletedAt: new Date().toISOString() }
      }
    })
  }
})

export default deleteUser
