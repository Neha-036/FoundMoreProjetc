import React from 'react'
import gql from 'graphql-tag'
import { useMutation } from 'react-apollo'
import * as Yup from 'yup'
import apiErrorFormHandler from '../../../helpers/apiErrorFormHandler'
import Modal from '@/components/fragments/modal'
import Input from '@/components/fragments/input'

const RESET_PASSWORD_MUTATION = gql`
  mutation ResetPasswordMutation($email: String!) {
    resetPassword(email: $email)
  }
`

const ResetPasswordModal = () => {
  const [resetPassword] = useMutation(RESET_PASSWORD_MUTATION)
  return (
    <Modal.Form
      initialValues={{ email: '' }}
      button={<a>Forgot your password?</a>}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Invalid email address')
          .required('Email is required')
      })}
      okText="Confirm"
      form={() => <Input label="Put in yout email" name="email" type="email" />}
      handleSubmit={closeModal => async (values, actions) => {
        try {
          await resetPassword({ variables: values })
          alert(
            'Check your email for the link to set a new password'
          ) /* eslint-disable-line */
        } catch (e) {
          const errors = e.graphQLErrors.map(error => error.message)
          actions.setErrors({
            email: apiErrorFormHandler(errors, [
              {
                error: 'E0004',
                message: 'There is no such user with this email adress'
              }
            ])
          })
        }
        closeModal()
        actions.setSubmitting(false)
      }}
    />
  )
}
export default ResetPasswordModal
