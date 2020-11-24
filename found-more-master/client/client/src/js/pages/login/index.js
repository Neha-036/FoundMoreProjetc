import React from 'react'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import LoginForm from '../../components/forms/loginform'
import Logo, { Img } from '../../components/fragments/logo'
import LoadingSpinner from '../../components/fragments/loading-spinner'

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
  width: 90%;
  box-shadow: 0 0 50px 6px rgba(0, 0, 0, 0.5);
  z-index: 10;
  position: relative;
  & ${Img} {
    width: 200px;
    height: 114px;
    margin-bottom: 50px;
  }
  @media (min-width: ${({ theme }) => theme.bpTablet}) {
    width: 450px;
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

const Login = () => (
  <Background>
    <Paper>
      <Logo />
      <LoginForm />
    </Paper>
    <Found style={{ backgroundImage: 'url(images/FoundLogo.png)' }} />
  </Background>
)

export default Login
