import { client } from '@/../index'
import createProductCategory from 'Common/graphql/mutations/createProductCategory.graphql'
import ProductCategoryForm from '@/forms/ProductCategoryForm'
import productCategory from 'Common/graphql/queries/productCategory.graphql'
import rootProductCategories from 'Common/graphql/queries/rootProductCategories.graphql'

const addProductCategory = ({ parent, isRoot }) => {
  const { form, validationSchema } = ProductCategoryForm({
    mode: 'create',
    isRoot
  })

  return {
    modalProps: { title: 'Add folder' },
    handleSubmit: ({ closeModal }) => async (values, actions) => {
      try {
        const res = await client.mutate({
          mutation: createProductCategory,
          variables: { input: values },
          awaitRefetchQueries: true,
          refetchQueries: [
            parent
              ? {
                  query: productCategory,
                  variables: { where: { id: parent } }
                }
              : {
                  query: rootProductCategories
                }
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
      parent: parent ? { connect: { id: parent } } : null,
      properties: {
        create: {
          name: ''
        }
      }
    },
    validationSchema,
    form
  }
}

export default addProductCategory
