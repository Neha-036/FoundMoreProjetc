import React, { Component } from 'react'
import styled from 'styled-components'
import { withApollo } from 'react-apollo'
import { Link } from 'react-router-dom'
import { AUTH_TOKEN } from '../constants/index'
import Button, { ButtonWrapper } from '../components/fragments/button'

const ButtonContainer = styled.div`
  & ${ButtonWrapper} {
    width: 90%;
    @media (min-width: ${({ theme }) => theme.bpDesktop}) {
      width: 25%;
    }
  }
`
class Logout extends Component {
  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this)
  }

  logout() {
    this.props.client.resetStore()
    localStorage.removeItem(AUTH_TOKEN)
  }

  render() {
    return (
      <Link to="/login">
        <ButtonContainer onClick={this.logout}>
          <Button isStickyToBottom>LOG OUT</Button>
        </ButtonContainer>
      </Link>
    )
  }
}

export default withApollo(Logout)
