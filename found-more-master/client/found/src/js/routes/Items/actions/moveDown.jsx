import SetOrderTemplateOrder from 'Common/graphql/mutations/setOrderTemplateOrder.graphql'
import { client } from '@/../index'

export const moveDown = async ({ id }) => {
  await client.mutate({
    mutation: SetOrderTemplateOrder,
    variables: { where: { id }, direction: 'down' }
  })
}