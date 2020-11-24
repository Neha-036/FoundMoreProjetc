import React from 'react'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import LoadingSpinner from '../loading-spinner'

export const Img = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center left;
  width: 130px;
  height: 45px;
`

const BRAND_IDENTITY_QUERY = gql`
  {
    brandPersonalization {
      logo {
        location
      }
    }
  }
`

const Logo = () => (
  <Query query={BRAND_IDENTITY_QUERY}>
    {({ data, error, loading }) => {
      if (error) return 'No logo provided'
      if (loading) return <LoadingSpinner />

      return (
        <Img
          style={{
            backgroundImage: `url(${data.brandPersonalization.logo.location})`
          }}
        />
      )
    }}
  </Query>
)

export default Logo
