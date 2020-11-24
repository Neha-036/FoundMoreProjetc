import React from 'react'
import styled from 'styled-components'

const ControlContainer = styled.div`
  background-color: ${({ theme, isCurrent }) =>
    isCurrent ? theme.colorPrimary : 'transparent'};
  border: 1px solid ${({ isCurrent }) => (isCurrent ? 'transparent' : '#000')};
  border-radius: 50%;
  transition: background-color 0.2s ease-out;
  display: inline-block;
  margin-right: 20px;
  width: 10px;
  height: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.colorPrimary};
    cursor: pointer;
  }

  &:last-child {
    margin-right: 0;
  }
`

const Control = ({ isCurrent, onClick }) => (
  <ControlContainer isCurrent={isCurrent} onClick={onClick} />
)

export default Control
