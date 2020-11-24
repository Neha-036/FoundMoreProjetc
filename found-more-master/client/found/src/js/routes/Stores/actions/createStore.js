import { client } from '@/../index'
import createStoreMutation from 'Common/graphql/mutations/createStore.graphql'
import stores from 'Common/graphql/queries/stores.graphql'
import StoreForm from '@/forms/StoreForm'

const { form, validationSchema } = StoreForm({ mode: 'create' })

const createStore = () => {
  return {
    modalProps: { title: 'Create a store' },
    handleSubmit: ({ closeModal }) => async (
      { uploads, ...values },
      actions
    ) => {
      try {
        const res = await client.mutate({
          mutation: createStoreMutation,
          variables: { input: values, ...uploads },
          context: {
            hasUpload: true
          },
          refetchQueries: [{ query: stores }]
        })
        closeModal()
        return res
      } catch (e) {}
      actions.setSubmitting(false)
    },
    initialValues: {
      name: '',
      storeNumber: '',
      brand: { connect: { id: '' } },
      language: { connect: { id: '' } }
      // users: { connect: [] }
    },
    form,
    validationSchema
  }
}

export default createStore
