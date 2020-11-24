import React from 'react'
import gql from 'graphql-tag'
import { useMutation } from 'react-apollo'
import Modal from '@/components/fragments/modal'
import * as Yup from 'yup'
import Input from '@/components/fragments/input'
import apiErrorFormHandler from '@/helpers/apiErrorFormHandler'

const UPDATE_PASSWORD_MUTATION = gql`
  mutation($oldPassword: String!, $newPassword: String!) {
    changePassword(oldPassword: $oldPassword, newPassword: $newPassword)
  }
`

const UpdatePasswordModal = () => {
  const [updatePassword] = useMutation(UPDATE_PASSWORD_MUTATION)
  return (
    <Modal.Form
      modalProps={{ title: 'Update password' }}
      button={<a>edit Password</a>}
      okText="Update Password"
      form={() => (
        <>
          <Input name="oldPassword" label="Old password" type="password" />
          <Input name="newPassword" label="New password" type="password" />
        </>
      )}
      initialValues={{ oldPassword: '', newPassword: '' }}
      handleSubmit={closeModal => async (values, actions) => {
        try {
          actions.setSubmitting(false)
          await updatePassword({ variables: values })
          alert('Your password was successfully updated')
          closeModal()
        } catch (e) {
          const errors = e.graphQLErrors.map(error => error.message)
          actions.setErrors({
            oldPassword: apiErrorFormHandler(errors, [
              { error: 'E0007', message: 'Wrong password' }
            ])
          })
        }
      }}
      validationSchema={Yup.object().shape({
        oldPassword: Yup.string().required('Put in your old password'),
        newPassword: Yup.string().required('Put in a new password')
      })}
    />
  )
}

export default UpdatePasswordModal
