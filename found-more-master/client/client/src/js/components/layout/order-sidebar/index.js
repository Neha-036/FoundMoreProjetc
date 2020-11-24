import React, { createContext, useState } from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import StoreOrderItemList from '../../store-order-item-list'
import Button from '../../fragments/button'
import useIsMaxWidth from '@/helpers/useIsMaxWidth'

const Wrapper = styled.div`
  display: flex;
  height: calc(100vh - 80px);
`

const Sidebar = styled.div`
  flex: 0 0 30%;
  border-left: 1px solid #afafaf;
  margin: 16px 20px;
  padding: 16px;
  background-color: #fff;
  transition: all 0.3s ease;
  overflow-y: auto;
  border-bottom: 65px solid white;
`

const Overlay = styled.div`
  ::before {
    content: '';
    position: fixed;
    bottom: 81px;
    width: ${props => (props.expanded ? 'calc(100% - 80px)' : '30%')};
    text-align: center;
    padding: 15px 0;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #fff);
  }
`

const Content = styled.div`
  overflow-y: auto;
  position: relative;
  background-color: #fff;
  flex-grow: 1;
`

const ButtonContainer = styled.div`
  width: ${props => (props.expanded ? '31%' : '100%')};
  transition: all 0.3s ease;
`

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  box-shadow: 0 -4px 4px -5px #333;
  padding: 20px ${({ theme }) => theme.spacingXs};

  @media (min-width: ${({ theme }) => theme.bpTablet}) {
    padding: 20px ${({ theme }) => theme.spacingSm};
  }

  @media (min-width: ${({ theme }) => theme.bpDesktop}) {
    padding: 20px ${({ theme }) => theme.spacingLg};
  }
`

export const FooterContext = createContext(null)

const OrderSidebar = ({ children }) => {
  const [footerContent, setFooterContent] = useState(null)
  const [isMobile] = useIsMaxWidth('1023px')
  const { pathname } = useLocation()

  return (
    <FooterContext.Provider value={setFooterContent}>
      <Wrapper>
        <Content>{children}</Content>
        {!isMobile && (
          <Sidebar>
            <h6>MY ORDER</h6>
            {pathname === '/' && (
              <ButtonContainer>
                <Link to="/projects">
                  <Button>Order Projects</Button>
                </Link>
              </ButtonContainer>
            )}
            <StoreOrderItemList />
            <Overlay />
          </Sidebar>
        )}
        {footerContent && <Footer>{footerContent}</Footer>}
      </Wrapper>
    </FooterContext.Provider>
  )
}

export default OrderSidebar
