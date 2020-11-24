import updateOrderTemplate from 'Common/graphql/mutations/updateOrderTemplate.graphql'
import { client } from '@/../index'
import toPrismaObject from '@/utils/toPrismaObject'
import { diff } from '@/utils/diff'
import OrderableItemForm from '@/forms/OrderableItemForm'
import orderTemplate from '../orderTemplate.graphql'

export const editOrderableItem = ({ id }) => {
  const { form, validationSchema } = OrderableItemForm({ mode: 'update' })
  return {
    id,
    modalProps: { title: 'Edit orderable item' },
    handleSubmit: ({ closeModal, initialValues }) => async (
      { uploads, ...values },
      actions
    ) => {
      try {
        const diffValues = diff(initialValues, values)
        const res = await client.mutate({
          mutation: updateOrderTemplate,
          variables: { where: { id }, input: diffValues, ...uploads },
          context: {
            hasUpload: true
          }
        })
        closeModal()
        return res
      } catch (e) {
        throw new Error(e)
      }
      actions.setSubmitting(false)
    },
    initialValues: async () => {
      const res = await client.query({
        query: orderTemplate,
        variables: { where: { id } },
        fetchPolicy: 'cache-first'
      })
      return toPrismaObject('update', res.data.orderTemplate, {
        language: 'connect',
        brand: 'connect',
        product: 'connect'
      })
    },
    form,
    validationSchema
  }
}
