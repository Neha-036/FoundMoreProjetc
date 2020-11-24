import React from 'react'
import BrandImport from './brandImport'
import PartialImport from './partialImport'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
`

export default () => {
  return (
    <>
      <h1>Import</h1>
      <Wrapper>
        <PartialImport />
        <BrandImport />
      </Wrapper>
    </>
  )
}
