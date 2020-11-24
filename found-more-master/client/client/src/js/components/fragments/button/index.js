import React from 'react'
import styled from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faAngleRight from '@fortawesome/fontawesome-free-solid/faAngleRight'

const Icon = styled.div`
  float: right;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.colorSecondary};
  border-radius: 2px;
  color: ${({ theme }) => theme.colorPrimary};
`

export const ButtonWrapper = styled.button`
  width: 100%;
  color: ${({ theme, cancelled }) =>
    cancelled ? theme.colorText : theme.colorSecondary};
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fontBold};
  font-size: 12px;
  border: none;
  padding: 6px 6px 6px 10px;
  border-radius: 2px;
  background-color: ${({ theme, cancelled }) =>
    !cancelled && theme.colorPrimary};
  display: flex;
  justify-content: ${({ cancelled }) =>
    cancelled ? 'center' : 'space-between'};
  float: ${({ isRight }) => isRight && 'right !important'};
  transition: background-color 0.15s ease-out;
  border: 2px solid transparent;
  cursor: pointer;
  ${({ isStickyToBottom }) =>
    isStickyToBottom && 'position: fixed!important; bottom: 50px;'}
  @media (max-width: ${({ theme }) => theme.bpTablet}) {
    width: 300px;
  }
  &:focus {
    outline: none;
  }
  &:hover {
    color: ${({ theme, cancelled }) =>
      cancelled ? 'white' : theme.colorPrimary};
    background-color: ${({ theme, cancelled }) =>
      cancelled ? 'red' : theme.colorSecondary};
    box-shadow: inset 0 0 0 2px ${({ theme, cancelled }) =>
      cancelled ? 'transparent' : theme.colorPrimary};
    ${Icon} {
      background-color: ${({ theme }) => theme.colorPrimary};
      color: ${({ theme }) => theme.colorSecondary};
    }
  }
`

const Button = ({ children, ...props }) => (
  <ButtonWrapper {...props} cancelled={props.cancelled}>
    {children}
    {!props.cancelled && (
      <Icon>
        <FontAwesomeIcon
          style={{ width: '7.5px' }}
          size="2x"
          icon={faAngleRight}
        />
      </Icon>
    )}
  </ButtonWrapper>
)

export default Button
