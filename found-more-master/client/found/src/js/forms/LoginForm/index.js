import React from 'react'
import { graphql } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import * as Yup from 'yup'
import gql from 'graphql-tag'
import { Icon } from 'antd'
import { apiErrorFormHandler } from '@/utils'
import { Form } from '@/components'

import { AUTH_TOKEN } from '../../constants'

const loginMutation = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`

const Layout = {
  fields: {
    email: {
      label: 'Enter your email',
      prefix: <Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />,
      type: 'email',
      placeholder: 'Email',
      size: 'large'
    },
    password: {
      label: 'Enter your password',
      type: 'password',
      prefix: <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />,
      placeholder: 'Password',
      size: 'large'
    }
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string().required('Password is required')
  }),
  submitButton: {
    label: 'Login',
    type: 'primary',
    width: '100%'
  }
}

const LoginForm = ({ login, history }) => (
  <Form
    layout={Layout}
    onSubmit={async (values, actions) => {
      try {
        const {
          data: {
            login: { token }
          }
        } = await login({ variables: values })
        localStorage.setItem(AUTH_TOKEN, token)
        history.push('/')
      } catch (e) {
        const errors = e.graphQLErrors.map(error => error.message)
        actions.setErrors({
          email: apiErrorFormHandler(errors, [
            { error: 'E0001', message: 'Email not found' },
            { error: 'E0010' }
          ]),
          password: apiErrorFormHandler(errors, [
            { error: 'E0003', message: 'Wrong password' }
          ])
        })
      }
      actions.setSubmitting(false)
    }}
  />
)

const LoginFormWithRouter = withRouter(LoginForm)

export default graphql(loginMutation, { name: 'login' })(LoginFormWithRouter)
