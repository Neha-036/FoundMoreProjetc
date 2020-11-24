import { diff } from 'deep-object-diff'
import { client } from '@/../index'
import updateUser from 'Common/graphql/mutations/updateUser.graphql'
import user from 'Common/graphql/queries/user.graphql'
import toPrismaObject from '@/utils/toPrismaObject'
import UserForm from '@/forms/UserForm'

const { form, validationSchema } = UserForm({ mode: 'update' })

const editUser = ({ id }) => {
  return {
    id,
    modalProps: { title: 'Edit user' },
    handleSubmit: ({ closeModal, initialValues }) => async (
      values,
      actions
    ) => {
      try {
        const diffValues = diff(initialValues, values)
        const res = await client.mutate({
          mutation: updateUser,
          variables: { where: { id }, input: diffValues }
        })
        closeModal()
        return res
      } catch (e) {}
      actions.setSubmitting(false)
    },
    initialValues: async () => {
      const res = await client.query({
        query: user,
        variables: { where: { id } },
        fetchPolicy: 'cache-first'
      })
      return toPrismaObject('update', res.data.user, {
        brand: 'connect',
        role: 'connect'
      })
    },
    form,
    validationSchema
  }
}

export default editUser
