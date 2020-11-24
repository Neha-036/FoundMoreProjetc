import React from 'react'
import styled from 'styled-components'

const Flex = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`

export default ({ children }) => <Flex>{children}</Flex>
