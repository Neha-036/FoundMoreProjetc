import { client } from '@/../index'
import updateOrderTemplate from 'Common/graphql/mutations/updateOrderTemplate.graphql'
import orderTemplates from '../orderTemplates.graphql'
import orderTemplate from '../orderTemplate.graphql'

export const deleteFolder = ({ id, parent }) => ({
  title: 'Are you sure you want to delete this folder?',
  content: 'The folder and underlaying subfolders will be deleted.',
  async onOk() {
    await client.mutate({
      mutation: updateOrderTemplate,
      variables: {
        where: { id },
        input: { deletedAt: new Date().toISOString() }
      },
      refetchQueries: [
        parent
          ? { query: orderTemplate, variables: { where: { id: parent.id } } }
          : { query: orderTemplates, variables: { where: { parent: null } } }
      ],
      awaitRefetchQueries: true
    })
  }
})
