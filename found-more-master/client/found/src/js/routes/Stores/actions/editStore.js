import { client } from '@/../index'
import updateStore from 'Common/graphql/mutations/updateStore.graphql'
import store from 'Common/graphql/queries/store.graphql'
import toPrismaObject from '@/utils/toPrismaObject'
import StoreForm from '@/forms/StoreForm'
import { diff } from '@/utils/diff'

const { form, validationSchema } = StoreForm({ mode: 'update' })

const editStore = ({ id }) => {
  return {
    id,
    modalProps: { title: e => `Edit store ${e.name}` },
    handleSubmit: ({ closeModal, initialValues }) => async (
      { uploads, ...values },
      actions
    ) => {
      try {
        const diffValues = diff(initialValues, values)
        console.log(diffValues)
        const res = await client.mutate({
          mutation: updateStore,
          variables: { where: { id }, input: diffValues, ...uploads },
          context: {
            hasUpload: true
          }
        })
        closeModal()
        return res
      } catch (e) {}
      actions.setSubmitting(false)
    },
    initialValues: async () => {
      const res = await client.query({
        query: store,
        variables: { where: { id } },
        fetchPolicy: 'cache-first'
      })
      return toPrismaObject('update', res.data.store, {
        users: 'connect',
        language: 'connect',
        brand: 'connect'
      })
    },
    form,
    validationSchema
  }
}

export default editStore
