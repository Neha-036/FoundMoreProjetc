import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { faWindowClose } from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { useSubscription } from 'react-apollo'
import gql from 'graphql-tag'
import { CSSTransition } from 'react-transition-group'

const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 40px);
  top: 80px;
  margin: 20px 0;
  min-height: 50px;
  padding: 8px 0;
  background-color: ${({ theme }) => theme.colorPrimary};
  z-index: 40;

  @media (min-width: ${({ theme }) => theme.bpTablet}) {
    width: calc(100% - 80px);
  }
  @media (min-width: ${({ theme }) => theme.bpDesktop}) {
    width: calc(100% - 160px);
  }
  &.notification-enter {
    opacity: 0;
    transform: translateY(-400%);
  }
  &.notification-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 500ms, transform 500ms;
  }
  &.notification-exit {
    opacity: 1;
  }
  &.notification-exit-active {
    opacity: 0;
    transform: translateY(-400%);
    transition: opacity 500ms, transform 500ms;
  }
`

const CloseContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 15px;
`

const Close = styled(FontAwesomeIcon)`
  color: white;
  cursor: pointer;
`

const Text = styled.p`
  color: #fff;
  font-family: ${({ theme }) => theme.fontBold};
  margin: 0 40px;
`

const NOTIFICATION_SUBSCRIPTION = gql`
  subscription onCreatedNotification {
    notifications(where: { mutation_in: CREATED }) {
      node {
        id
        title
        content
      }
    }
  }
`

const Notification = () => {
  const [open, setOpen] = useState(false)
  const { data } = useSubscription(NOTIFICATION_SUBSCRIPTION)

  useEffect(() => {
    if (data?.notifications) {
      setOpen(true)
      setTimeout(() => setOpen(false), 3000)
    }
  }, [data])

  return (
    <CSSTransition
      in={open}
      unmountOnExit
      timeout={500}
      classNames="notification"
    >
      <Container>
        <Text>{data?.notifications?.node?.title}</Text>
        <Text>{data?.notifications?.node?.content}</Text>
        <CloseContainer onClick={() => setOpen(false)}>
          <Close icon={faWindowClose} />
        </CloseContainer>
      </Container>
    </CSSTransition>
  )
}

export default Notification
