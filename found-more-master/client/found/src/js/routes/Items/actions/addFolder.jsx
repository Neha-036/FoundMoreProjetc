import createOrderTemplate from 'Common/graphql/mutations/createOrderTemplate.graphql'
import { client } from '@/../index'
import FolderForm from '@/forms/FolderForm'
import { hasUploads } from '@/utils'
import orderTemplates from '../orderTemplates.graphql'
import orderTemplate from '../orderTemplate.graphql'
import ContextStore from '@/stores/contextStore'

export const addFolder = ({ parent }) => {
  const isRoot = parent === null
  // When creating a non-root folder, connect the brand of the root folder to the non-root folder.
  const { form, validationSchema } = FolderForm({ mode: 'create', isRoot })
  const getRootBrandId =
    !isRoot && !!ContextStore.history.length
      ? ContextStore.history[0].brand.id
      : null
  return {
    modalProps: { title: 'Add folder' },
    handleSubmit: ({ closeModal }) => async (
      { uploads, ...values },
      actions
    ) => {
      try {
        const res = await client.mutate({
          mutation: createOrderTemplate,
          variables: { input: values, ...uploads },
          context: {
            hasUpload: hasUploads(uploads)
          },
          awaitRefetchQueries: true,
          refetchQueries: [
            parent
              ? { query: orderTemplate, variables: { where: { id: parent } } }
              : {
                  query: orderTemplates,
                  variables: { where: { parent: null } }
                }
          ]
        })
        actions.setSubmitting(false)
        closeModal()
        return res
      } catch (e) {
        throw new Error(e)
      }
    },
    initialValues: {
      parent: parent ? { connect: { id: parent } } : null,
      properties: {
        create: {
          name: ''
        }
      },
      brand: { connect: { id: getRootBrandId } }
    },
    form,
    validationSchema
  }
}
