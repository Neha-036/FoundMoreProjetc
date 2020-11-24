import React from 'react'
import styled from 'styled-components'
import { DebounceInput } from 'react-debounce-input'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch'

export const Container = styled.div`
  position: relative;
  width: 25%;
  margin-top: auto;
  & > svg {
    position: absolute;
    right: 0;
    bottom: 15px;
    &:hover {
      transform: scale(1.2);
    }
  }
  & > input {
    width: 100%;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-color: #afafaf;
    height: 40px;
    color: #afafaf;
    font-size: 14px;
    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colorPrimary};
    }
  }
`

const Searchbar = ({ placeholder, onChange, value }) => (
  <Container>
    <DebounceInput
      debounceTimeout={500}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      autoFocus
    />
    <FontAwesomeIcon
      icon={faSearch}
      size="1x"
      style={{ color: '#afafaf', cursor: 'pointer' }}
    />
  </Container>
)

export default Searchbar
