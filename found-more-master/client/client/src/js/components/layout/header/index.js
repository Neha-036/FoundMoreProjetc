import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink, Link } from 'react-router-dom'
import Logo from '../../fragments/logo'
import useIsMaxWidth from '@/helpers/useIsMaxWidth'
import NotificationItem from './notificationItem'
import CustomerIcon from './customer'
import Mobile from './mobile'
import OpenOrders from './openOrders'

const Wrapper = styled.div`
  position: fixed;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  height: 80px;
  border-bottom: 1px solid #ebebeb;
  padding: 0 20px;
  & > img {
    max-width: 100px;
  }
  box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.1);
  @media (max-width: ${({ theme }) => theme.bpUpToTablet}) {
    padding: 0 20px;
  }
  @media (min-width: ${({ theme }) => theme.bpDesktop}) {
    padding: 0 80px;
  }
`

const NavItemsWrapper = styled.ul`
  list-style-type: none;
  display: flex;
  & li {
    padding: 0 20px;
    position: relative;
    color: grey;
    display: flex;
    align-items: center;
    & > a {
      font-size: 12px;
      text-decoration: none;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.colorText};
      &:hover {
        color: ${({ theme }) => theme.colorPrimary};
      }
      &.active {
        color: ${({ theme }) => theme.colorPrimary};
      }
    }
  }
`

const LogoWrapper = styled.div`
  width: 80px;
  z-index: 50;
`

const UserDetails = () => (
  <Link to="/userdetails">
    <CustomerIcon />
  </Link>
)

const renderNavItem = (key, item, i) => {
  if (item[key]) {
    if (item[key] instanceof Function) {
      const Item = item[key]
      return (
        <li key={i}>
          <Item />
        </li>
      )
    }
    return (
      <li key={i}>
        <NavLink to={item.path}>{item[key]}</NavLink>
      </li>
    )
  }
  return null
}

const Navigation = ({ mobileMenuActive, setMobileMenuActive }) => {
  const [isMobile] = useIsMaxWidth('1023px')
  const navItems = [
    {
      path: '/projects',
      desktop: 'Projects',
      mobile: 'Projects'
    },
    {
      path: '/orders',
      desktop: 'Orders',
      mobile: 'Orders'
    },
    {
      path: '/stores',
      desktop: 'Stores',
      mobile: 'Stores'
    },
    {
      desktop: UserDetails,
      mobile: UserDetails
    },
    {
      always: NotificationItem
    },
    {
      onHeaderWhenMobile: OpenOrders
    }
  ]
  const renderNavItems = key =>
    navItems.map((item, i) => renderNavItem(key, item, i))
  return (
    <NavItemsWrapper>
      {!isMobile && renderNavItems('desktop')}
      {renderNavItems('always')}
      {isMobile && renderNavItems('onHeaderWhenMobile')}
      {isMobile && (
        <Mobile active={mobileMenuActive} setActive={setMobileMenuActive}>
          {renderNavItems('mobile')}
        </Mobile>
      )}
    </NavItemsWrapper>
  )
}

const Header = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false)
  return (
    <Wrapper>
      <LogoWrapper onClick={() => setMobileMenuActive(false)}>
        <Link to="/">
          <Logo />
        </Link>
      </LogoWrapper>
      <Navigation
        mobileMenuActive={mobileMenuActive}
        setMobileMenuActive={setMobileMenuActive}
      />
    </Wrapper>
  )
}

export default Header
