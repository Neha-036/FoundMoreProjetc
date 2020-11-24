import { diff } from 'deep-object-diff'
import toPrismaObject from '@/utils/toPrismaObject'
import updateOrderTemplate from 'Common/graphql/mutations/updateOrderTemplate.graphql'
import { hasUploads } from '@/utils'
import { client } from '@/../index'
import orderTemplate from 'Common/graphql/queries/orderTemplate.graphql'
import FolderForm from '@/forms/FolderForm'
import ContextStore from '@/stores/contextStore'

export const editFolder = ({ id, parent }) => {
  const isRoot = parent === null
  const { form, validationSchema } = FolderForm({ mode: 'update', isRoot })
  // When editing a non-root folder, connect the brand of the root folder to the non-root folder.
  const getRootBrandId =
    !isRoot && !!ContextStore.history.length
      ? ContextStore.history[0].brand.id
      : null
  return {
    id,
    modalProps: { title: e => `Edit Folder ${e.properties.update.name}` },
    handleSubmit: ({ closeModal, initialValues }) => async (
      { uploads, ...values },
      actions
    ) => {
      try {
        const diffValues = diff(initialValues, values)
        if (getRootBrandId) {
          diffValues.brand = { connect: { id: getRootBrandId } }
        }
        const res = await client.mutate({
          mutation: updateOrderTemplate,
          variables: { where: { id }, input: diffValues, ...uploads },
          context: {
            hasUpload: hasUploads(uploads)
          }
        })
        actions.setSubmitting(false)
        closeModal()
        return res
      } catch (e) {
        throw new Error(e)
      }
    },
    initialValues: async () => {
      const res = await client.query({
        query: orderTemplate,
        variables: { where: { id } },
        fetchPolicy: 'cache-first'
      })
      return toPrismaObject('update', res.data.orderTemplate, {
        brand: 'connect'
      })
    },
    form,
    validationSchema
  }
}
