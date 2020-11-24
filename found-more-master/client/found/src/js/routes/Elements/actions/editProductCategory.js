import { diff } from 'deep-object-diff'
import { client } from '@/../index'
import updateProductCategory from 'Common/graphql/mutations/updateProductCategory.graphql'
import productCategory from 'Common/graphql/queries/productCategory.graphql'
import toPrismaObject from '@/utils/toPrismaObject'
import ProductCategoryForm from '@/forms/ProductCategoryForm'

const editProductCategory = ({ id, isRoot }) => {
  const { form, validationSchema } = ProductCategoryForm({
    mode: 'update',
    isRoot
  })

  return {
    id,
    modalProps: { title: e => `Edit Folder ${e.properties.update.name}` },
    handleSubmit: ({ closeModal, initialValues }) => async (
      values,
      actions
    ) => {
      try {
        const diffValues = diff(initialValues, values)
        const res = await client.mutate({
          mutation: updateProductCategory,
          variables: { where: { id }, input: diffValues }
        })
        closeModal()
        return res
      } catch (e) {}
      actions.setSubmitting(false)
    },
    initialValues: async () => {
      const res = await client.query({
        query: productCategory,
        variables: { where: { id } },
        fetchPolicy: 'cache-first'
      })
      return toPrismaObject('update', res.data.productCategory, {
        brand: 'connect'
      })
    },
    form,
    validationSchema
  }
}

export default editProductCategory
