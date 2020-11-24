import React, { useState } from 'react'
import styled, { withTheme } from 'styled-components'
import { SpinReverse } from 'react-burgers'
import { CSSTransition } from 'react-transition-group'

const Bubble = styled.div`
  border-radius: 50%;
  width: 300px;
  height: 300px;
  background: #fff;
  transition: transform 300ms ease-out;
`

const NavigationItems = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: opacity 300ms ease-out;
  li {
    margin: 20px 0;
    & > a {
      font-size: 30px !important;
    }
  }
`

const MobileMenu = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 4;
  &.menu-enter {
    & > ${Bubble} {
      transform: scale(0);
    }
    & > ${NavigationItems} {
      opacity: 0;
    }
  }
  &.menu-enter-active {
    & > ${Bubble} {
      transform: scale(10);
    }
    & > ${NavigationItems} {
      opacity: 1;
    }
  }
  &.menu-enter-done {
    & > ${Bubble} {
      transform: scale(10);
    }
    & > ${NavigationItems} {
      opacity: 1;
    }
  }
  &.menu-exit {
    & > ${Bubble} {
      transform: scale(10);
    }
    & > ${NavigationItems} {
      opacity: 1;
    }
  }
  &.menu-exit-active {
    & > ${Bubble} {
      transform: scale(0);
    }
    & > ${NavigationItems} {
      opacity: 0;
    }
  }
`

const Mobile = ({ children, theme, active, setActive }) => {
  return (
    <>
      <div style={{ zIndex: 300 }}>
        <SpinReverse
          active={active}
          borderRadius={5}
          color={theme.colorPrimary}
          onClick={() => setActive(!active)}
        />
      </div>
      <CSSTransition in={active} classNames="menu" timeout={300} unmountOnExit>
        <MobileMenu>
          <Bubble onClick={() => setActive(false)} />
          <NavigationItems onClick={() => setActive(false)}>
            {children}
          </NavigationItems>
        </MobileMenu>
      </CSSTransition>
    </>
  )
}

export default withTheme(Mobile)
