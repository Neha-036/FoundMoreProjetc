import React from 'react'
import styled from 'styled-components'
import { NewPasswordForm } from '@/forms'
import queryString from 'query-string'

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('http://www.youhavefound.com/wp-content/uploads/2012/10/foundbgabout.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

const Window = styled.div`
  border-radius: 2px;
  padding: 2em;
  width: 25%;
  min-width: 300px;
  background-color: #fff;
`

export default ({ location }) => (
  <Background>
    <Window>
      <img alt="Found Logo" src="/images/FoundLogo.png" />
      <NewPasswordForm {...queryString.parse(location.search)} />
    </Window>
  </Background>
)
