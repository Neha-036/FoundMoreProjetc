import { diff } from 'deep-object-diff'
import { client } from '@/../index'
import updateBrand from 'Common/graphql/mutations/updateBrand.graphql'
import brand from 'Common/graphql/queries/brand.graphql'
import toPrismaObject from '@/utils/toPrismaObject'
import BrandForm from '@/forms/BrandForm'

const { form, validationSchema } = BrandForm({ mode: 'update' })

const editBrand = ({ id }) => {
  return {
    id,
    modalProps: { title: e => `Edit brand ${e.name}` },
    handleSubmit: ({ closeModal, initialValues }) => async (
      { uploads, ...values },
      actions
    ) => {
      try {
        const diffValues = diff(initialValues, values)
        const res = await client.mutate({
          mutation: updateBrand,
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
        query: brand,
        variables: { where: { id } },
        fetchPolicy: 'cache-first'
      })
      return toPrismaObject('update', res.data.brand, {
        contactPerson: 'connect'
      })
    },
    form,
    validationSchema
  }
}

export default editBrand
