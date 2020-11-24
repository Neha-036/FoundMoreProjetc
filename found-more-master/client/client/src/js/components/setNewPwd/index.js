import React from 'react'
import styled from 'styled-components'
import queryString from 'query-string'
import * as Yup from 'yup'
import { graphql, Query } from 'react-apollo'
import gql from 'graphql-tag'
import Form from '../fragments/form'
import LoadingSpinner from '../fragments/loading-spinner'

import Logo from '../../components/fragments/logo'

const BrandBackground = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Paper = styled.div`
  background-color: #fff;
  padding: 2em;
  width: 450px;
  box-shadow: 0 0 50px 6px rgba(0, 0, 0, 0.5);
  z-index: 10;
  & > img {
    width: 200px;
    margin-bottom: 50px;
  }
`

const Found = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 150px;
  height: 80px;
  position: absolute;
  left: 15px;
  bottom: 0;
`

const BRAND_IDENTITY_QUERY = gql`
  {
    brandPersonalization {
      backgroundImage {
        location
      }
    }
  }
`

const Background = ({ children }) => (
  <Query query={BRAND_IDENTITY_QUERY}>
    {({ data, error, loading }) => {
      if (error) return 'Oops!'
      if (loading) return <LoadingSpinner />
      return (
        <BrandBackground
          style={{
            backgroundImage: `url(${data.brandPersonalization.backgroundImage.location})`
          }}
        >
          {children}
        </BrandBackground>
      )
    }}
  </Query>
)

const CHANGE_PWD_WITH_TOKEN = gql`
  mutation($loginToken: String!, $password: String!) {
    changePasswordWithToken(loginToken: $loginToken, password: $password)
  }
`

const newPasswordLayout = {
  fields: {
    password: {
      label: 'Insert your new password',
      type: 'password',
      placeholder: 'new password'
    },
    confirmPassword: {
      label: 'Repeat your new password',
      type: 'password',
      placeholder: 'repeat password'
    }
  },
  validationSchema: Yup.object().shape({
    password: Yup.string().required('Insert a new password'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Repeat your new password')
  }),
  submitLabel: 'Set new password'
}

class SetNewPwd extends React.Component {
  constructor() {
    super()
    this.state = {
      token: null
    }
  }

  componentDidMount() {
    const { token } = queryString.parse(this.props.location.search)
    this.setState({ token })
  }

  render() {
    return (
      <Background>
        <Paper>
          <Logo />
          <Form
            {...this.props}
            fontSize="16px"
            layout={newPasswordLayout}
            onSubmit={async ({ ...values }, actions) => {
              try {
                actions.setSubmitting(false)
                await this.props.changePasswordWithToken({
                  variables: {
                    loginToken: this.state.token,
                    password: values.confirmPassword
                  }
                })
                /*eslint-disable */
                alert('Your password was successfully reset')
                /* eslint-enable */
                this.props.history.push('/login')
              } catch (e) {
                throw new Error(e)
              }
            }}
          />
        </Paper>
        <Found style={{ backgroundImage: 'url(images/FoundLogo.png)' }} />
      </Background>
    )
  }
}

export default graphql(CHANGE_PWD_WITH_TOKEN, {
  name: 'changePasswordWithToken'
})(SetNewPwd)
