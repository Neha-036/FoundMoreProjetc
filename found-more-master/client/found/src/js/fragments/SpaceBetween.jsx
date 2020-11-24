import React from 'react'
import styled from 'styled-components'

const TitleWithCreate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default ({ children }) => <TitleWithCreate>{children}</TitleWithCreate>
