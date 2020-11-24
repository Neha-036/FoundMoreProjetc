import React from 'react'
import Modal from '@/components/fragments/modal'
import USER_QUERY from 'Common/graphql/queries/user.graphql'
import UPDATE_USER_MUTATION from 'Common/graphql/mutations/updateUser.graphql'
import { useLazyQuery, useMutation } from 'react-apollo'
import UserForm from '../../components/forms/userform'
import { diff } from '@/helpers/diff'

const { form, validationSchema } = UserForm('update')

const UpdateUserModal = ({ id }) => {
  const [lazy, { loading, error, data }] = useLazyQuery(USER_QUERY, {
    variables: { where: { id } }
  })
  const [updateUser] = useMutation(UPDATE_USER_MUTATION)
  return (
    <Modal.Form
      initialValues={!loading && !error && data?.user}
      button={<a>Edit user details</a>}
      modalProps={{ title: 'Edit user details', style: { minWidth: 600 } }}
      lazy={lazy}
      form={form}
      validationSchema={validationSchema}
      handleSubmit={(closeModal, initialValues) => async values => {
        try {
          const diffValues = diff(initialValues, values)
          await updateUser({ variables: { where: { id }, input: diffValues } })
          closeModal()
        } catch (e) {
          console.log(e)
        }
      }}
    />
  )
}

export default UpdateUserModal
