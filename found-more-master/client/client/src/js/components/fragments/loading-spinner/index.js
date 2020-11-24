import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner'

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  color: ${({ theme }) => theme.colorPrimary};
`

export default () =>
  ReactDOM.createPortal(
    <Container>
      <FontAwesomeIcon icon={faSpinner} pulse size="4x" />
    </Container>,
    document.body
  )
