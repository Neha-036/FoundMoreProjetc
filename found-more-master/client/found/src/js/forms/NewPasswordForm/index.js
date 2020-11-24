import React from 'react'
import { Mutation } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import * as Yup from 'yup'
import gql from 'graphql-tag'
import { Icon } from 'antd'
import { Form } from '@/components'

const changePasswordWithToken = gql`
  mutation($loginToken: String!, $password: String!) {
    changePasswordWithToken(loginToken: $loginToken, password: $password)
  }
`

const Layout = {
  fields: {
    password: {
      label: 'Enter a new password',
      prefix: <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />,
      type: 'password',
      placeholder: 'New password',
      size: 'large'
    },
    confirmPassword: {
      label: 'Enter your password',
      type: 'password',
      prefix: <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />,
      placeholder: 'Password',
      size: 'large'
    }
  },
  validationSchema: Yup.object().shape({
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Repeat your new password')
  }),
  submitButton: {
    label: 'Reset Password',
    type: 'primary',
    width: '100%'
  }
}

const LoginForm = ({ token, history }) => (
  <Mutation mutation={changePasswordWithToken}>
    {changePasswordWithToken => (
      <Form
        layout={Layout}
        onSubmit={async (values, actions) => {
          try {
            const res = await changePasswordWithToken({
              variables: { password: values.password, loginToken: token }
            })
            if (res) {
              history.push('/login')
            } else {
              throw new Error('Failed to reset password')
            }
          } catch (e) {
              console.warn(e) // eslint-disable-line
          }
          actions.setSubmitting(false)
        }}
      />
    )}
  </Mutation>
)

export default withRouter(LoginForm)
