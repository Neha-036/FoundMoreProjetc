import { client } from '@/../index'
import createProduct from 'Common/graphql/mutations/createProduct.graphql'
import ProductForm from '@/forms/ProductForm'
import productCategory from 'Common/graphql/queries/productCategory.graphql'

const { form, validationSchema } = ProductForm({ mode: 'create' })

const addProduct = ({ parent }) => {
  return {
    modalProps: { title: 'Add product' },
    handleSubmit: ({ closeModal }) => async (
      { uploads, ...values },
      actions
    ) => {
      try {
        const res = await client.mutate({
          mutation: createProduct,
          variables: { input: values, ...uploads },
          context: {
            hasUpload: true
          },
          awaitRefetchQueries: true,
          refetchQueries: [
            {
              query: productCategory,
              variables: { where: { id: parent } }
            }
          ]
        })
        closeModal()
        return res
      } catch (e) {}
      actions.setSubmitting(false)
    },
    initialValues: {
      productCategories: { connect: { id: parent } },
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

export default addProduct
