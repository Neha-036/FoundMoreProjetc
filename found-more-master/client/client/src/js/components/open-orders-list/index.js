import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useHistory, useLocation } from 'react-router-dom'
import StoreOrderItemList from '../store-order-item-list'
import IconButton from '../fragments/icon-button'
import useIsMaxWidth from '@/helpers/useIsMaxWidth'

const Container = styled.div`
  width: calc(100vw - 40px);
  height: 87vh;
  background-color: #fff;
  overflow-y: auto;
  @media (min-width: ${({ theme }) => theme.bpTablet}) {
    width: calc(100vw - 85px);
  }
`
const Back = styled.div`
  display: flex;
  margin: 10px 0;
`
const LinkText = styled.h5`
  text-decoration: none;
  display: inline-block;
  margin-left: 10px;
  vertical-align: top;
`

const OpenOrdersList = props => {
  const history = useHistory()
  const { pathname } = useLocation()
  const [isMobile] = useIsMaxWidth('1023px')
  useEffect(() => {
    if (pathname === '/openorders' && !isMobile) {
      history.push('/projects')
    }
  }, [isMobile])
  return (
    <Container>
      <Back>
        <IconButton size="20px" icon="arrowLeft" onClick={history.goBack} />
        <LinkText>Back</LinkText>
      </Back>
      <StoreOrderItemList {...props} />
    </Container>
  )
}

export default OpenOrdersList
