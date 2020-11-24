import React from 'react'
import styled from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus'
import faMinus from '@fortawesome/fontawesome-free-solid/faMinus'
import faArrowUp from '@fortawesome/fontawesome-free-solid/faAngleUp'
import faArrowDown from '@fortawesome/fontawesome-free-solid/faAngleDown'
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes'
import faArrowLeft from '@fortawesome/fontawesome-free-solid/faAngleLeft'
import faArrowRight from '@fortawesome/fontawesome-free-solid/faAngleRight'
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck'

const Square = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  height: ${({ size }) => `calc(${size} + 4px)`};
  width: ${({ size }) => `calc(${size} + 4px)`};
  background-color: ${({ theme, invert, backgroundColor }) =>
    backgroundColor || (invert ? theme.colorSecondary : theme.colorPrimary)};
  color: ${({ theme, invert }) =>
    invert ? theme.colorPrimary : theme.colorSecondary};
  border-radius: 3px;
  border-color: ${({ border, theme }) =>
    border ? theme.colorPrimary : 'none'};
  border-width: ${({ border }) => (border ? '1px' : 'none')};
  border-style: ${({ border }) => (border ? 'solid' : 'none')};
  margin-left: ${({ marginLeft }) => marginLeft};
  cursor: pointer;
  &:focus {
    outline: none;
  }
`

const iconSwitcher = icon => {
  switch (icon) {
    case 'plus':
      return faPlus
    case 'check':
      return faCheck
    case 'minus':
      return faMinus
    case 'times':
      return faTimes
    case 'arrowUp':
      return faArrowUp
    case 'arrowDown':
      return faArrowDown
    case 'arrowLeft':
      return faArrowLeft
    case 'arrowRight':
      return faArrowRight
    default:
      return console.log(
        'Please provide an icon'
      ) /* eslint-disable-line no-console */
  }
}

const IconButton = ({ icon, size, ...props }) => (
  <Square size={size} {...props}>
    <FontAwesomeIcon
      style={{ width: size, height: size }}
      icon={iconSwitcher(icon)}
    />
  </Square>
)

export default IconButton
