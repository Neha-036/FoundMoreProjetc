import createOrderTemplate from 'Common/graphql/mutations/createOrderTemplate.graphql'
import { client } from '@/../index'
import OrderableItemForm from '@/forms/OrderableItemForm'
import orderTemplate from '../orderTemplate.graphql'
import ContextStore from '@/stores/contextStore'

export const addOrderableItem = ({ parent }) => {
  const { form, validationSchema } = OrderableItemForm({ mode: 'create' })
  const isRootFolder = parent === null
  const getRootBrandId =
    !isRootFolder && !!ContextStore.history.length
      ? ContextStore.history[0].brand.id
      : null
  return {
    modalProps: { title: 'Add orderable item' },
    handleSubmit: ({ closeModal }) => async (
      { uploads, ...values },
      actions
    ) => {
      try {
        const res = await client.mutate({
          mutation: createOrderTemplate,
          variables: { input: values, ...uploads },
          context: {
            hasUpload: true
          },
          awaitRefetchQueries: true,
          refetchQueries: [
            { query: orderTemplate, variables: { where: { id: parent } } }
          ]
        })
        closeModal()
        return res
      } catch (e) {
        throw new Error(e)
      }
      actions.setSubmitting(false)
    },
    initialValues: {
      orderable: true,
      properties: {
        create: { name: '', description: '' }
      },
      parent: { connect: { id: parent } },
      children: { create: [] },
      brand: { connect: { id: getRootBrandId } }
    },
    form,
    validationSchema
  }
}
