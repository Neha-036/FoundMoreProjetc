import { diff } from 'deep-object-diff'
import { client } from '@/../index'
import updateProduct from 'Common/graphql/mutations/updateProduct.graphql'
import product from 'Common/graphql/queries/product.graphql'
import toPrismaObject from '@/utils/toPrismaObject'
import ProductForm from '@/forms/ProductForm'

const { form, validationSchema } = ProductForm({ mode: 'update' })

const editProduct = ({ id }) => {
  return {
    id,
    modalProps: { title: e => `Edit product ${e.properties.update.name}` },
    handleSubmit: ({ closeModal, initialValues }) => async (
      { uploads, ...values },
      actions
    ) => {
      try {
        const diffValues = diff(initialValues, values)
        const res = await client.mutate({
          mutation: updateProduct,
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
        query: product,
        variables: { where: { id } },
        fetchPolicy: 'cache-first'
      })
      return toPrismaObject('update', res.data.product, {
        brand: 'connect',
        language: 'connect'
      })
    },
    form,
    validationSchema
  }
}

export default editProduct
