import React from 'react'
import styled from 'styled-components'
import IconButton from '../icon-button'

const Options = styled.div`
  display: none;
  color: ${({ theme }) => theme.colorPrimary};
  background-color: #ffffff;
  border: 1px solid ${({ theme }) => theme.colorPrimary};
  position: fixed;
  width: 300px;
  & li {
    padding: 5px;
    height: auto;
    font-family: ${({ theme }) => theme.fontBold};
    &:hover {
      background-color: ${({ theme }) => theme.colorPrimary};
      & > a {
        color: #fff;
        font-family: ${({ theme }) => theme.fontBold};
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.bpTablet}) {
    width: calc(100% - 60px);
  }
`

export const ButtonWrapper = styled.div`
  width: 300px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fontBold};
  font-size: 12px;
  float: ${({ isRight }) => isRight && 'right !important'};
  position: relative;
  ${({ isStickyToBottom }) =>
    isStickyToBottom && 'position: absolute; bottom: 50px;'}
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.bpTablet}) {
    width: 100%;
  }
  & :hover {
    & ${Options} {
      display: block;
    }
  }
`

const Button = styled.div`
  width: 300px;
  color: ${({ theme }) => theme.colorSecondary};
  font-size: 12px;
  border: none;
  padding: 6px 6px 6px 10px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colorPrimary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.bpTablet}) {
    width: 100%;
  }
`

const DropDownButton = ({ text, children, ...props }) => (
  <ButtonWrapper {...props}>
    <Button {...props}>
      {text}
      <IconButton size="20px" invert icon="arrowDown" />
    </Button>
    <Options>{children}</Options>
  </ButtonWrapper>
)

export default DropDownButton
