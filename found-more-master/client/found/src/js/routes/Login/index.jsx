import React from 'react'
import styled from 'styled-components'
import { LoginForm, ForgotPasswordForm } from '@/forms'
import { AdminFormModal } from '@/components'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { apiErrorFormHandler } from '@/utils'
import { message } from 'antd'

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dcdcdc;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

const Window = styled.div`
  border-radius: 5px;
  padding: 2em;
  width: 25%;
  min-width: 300px;
  background-color: #fff;
`

const FloatRight = styled.div`
  float: right;
`

const ForgotPasswordModalForm = () => {
  return (
    <Mutation
      mutation={gql`
        mutation($email: String!) {
          resetPassword(email: $email)
        }
      `}
    >
      {resetPassword => (
        <AdminFormModal
          {...ForgotPasswordForm}
          initialValues={{ email: '' }}
          modalProps={{ title: 'Forgot Password' }}
          buttonProps={{ label: 'Forgot password' }}
          handleSubmit={({ closeModal }) => async (values, actions) => {
            try {
              await resetPassword({ variables: values })
              closeModal()
              message.success(
                'Succesfully resetted password, please check your email for the reset password link'
              )
            } catch (e) {
              const errors = e.graphQLErrors.map(error => error.message)
              actions.setErrors({
                email: apiErrorFormHandler(errors, [
                  { error: 'E0004', message: 'Email not found' }
                ])
              })
            }
            actions.resetForm()
            actions.setSubmitting(false)
          }}
        />
      )}
    </Mutation>
  )
}

const LoginScreen = () => (
  <Background>
    <Window>
      <img alt="Found Logo" src="/images/FoundLogo.png" />
      <LoginForm />
      <FloatRight>
        <ForgotPasswordModalForm />
      </FloatRight>
    </Window>
  </Background>
)

export default LoginScreen
