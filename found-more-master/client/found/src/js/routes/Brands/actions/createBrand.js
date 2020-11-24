import { client } from '@/../index'
import createBrandMutation from 'Common/graphql/mutations/createBrand.graphql'
import brands from 'Common/graphql/queries/brands.graphql'
import BrandForm from '@/forms/BrandForm'

const { form, validationSchema } = BrandForm({ mode: 'create' })

const createBrand = () => {
  return {
    modalProps: { title: 'Create a brand' },
    handleSubmit: ({ closeModal }) => async (
      { uploads, ...values },
      actions
    ) => {
      try {
        const res = await client.mutate({
          mutation: createBrandMutation,
          variables: { input: values, ...uploads },
          context: {
            hasUpload: true
          },
          refetchQueries: [{ query: brands }]
        })
        closeModal()
        return res
      } catch (e) {}
      actions.setSubmitting(false)
    },
    initialValues: {
      name: '',
      domain: '',
      primaryColor: '',
      secondaryColor: '',
      textColor: '',
      address: {
        create: {
          street: '',
          number: '',
          postalCode: '',
          countryCode: '',
          city: ''
        }
      }
    },
    form,
    validationSchema
  }
}

export default createBrand
