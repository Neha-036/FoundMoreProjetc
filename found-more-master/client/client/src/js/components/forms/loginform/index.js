import React from 'react'
import { useMutation } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import * as Yup from 'yup'
import gql from 'graphql-tag'
import { AUTH_TOKEN } from '@/constants'
import apiErrorFormHandler from '@/helpers/apiErrorFormHandler'
import { Formik } from 'formik'
import Input from '@/components/fragments/input'
import Button from '@/components/fragments/button'
import ResetPasswordModal from './reset-password-modal'

const loginMutation = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`

const LoginForm = ({ history, ...props }) => {
  const [login] = useMutation(loginMutation)
  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
          password: Yup.string().required('Password is required')
        })}
        onSubmit={async (values, actions) => {
          try {
            actions.setSubmitting(false)
            const res = await login({ variables: { ...values } })
            localStorage.setItem(AUTH_TOKEN, res.data.login.token)
            history.push('/')
          } catch (e) {
            const errors = e.graphQLErrors.map(error => error.message)
            actions.setErrors({
              email: apiErrorFormHandler(errors, [
                {
                  error: 'E0001',
                  message: 'Sorry, we do not know this email address'
                },
                { error: 'E0010' },
                { error: 'E0011' }
              ]),
              password: apiErrorFormHandler(errors, [
                { error: 'E0003', message: 'You entered a wrong password' }
              ])
            })
          }
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Input type="email" name="email" label="Enter your email" />
            <Input
              type="password"
              name="password"
              label="Enter your password"
            />
            <Button type="sunmit">Login</Button>
          </form>
        )}
      </Formik>
      <br />
      <ResetPasswordModal />
    </>
  )
}

export default withRouter(LoginForm)
