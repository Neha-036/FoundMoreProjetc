import { client } from '@/../index'
import createUserMutation from 'Common/graphql/mutations/createUser.graphql'
import users from 'Common/graphql/queries/users.graphql'
import UserForm from '@/forms/UserForm'

const { form, validationSchema } = UserForm({ mode: 'create' })

const createUser = () => {
  return {
    modalProps: { title: 'Create a User' },
    handleSubmit: ({ closeModal }) => async (values, actions) => {
      try {
        const res = await client.mutate({
          mutation: createUserMutation,
          variables: { input: values },
          refetchQueries: [{ query: users }]
        })
        closeModal()
        return res
      } catch (e) {}
      actions.setSubmitting(false)
    },
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      brand: {
        connect: { id: '' }
      },
      role: { connect: { id: '' } }
    },
    form,
    validationSchema
  }
}

export default createUser
