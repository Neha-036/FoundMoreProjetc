import React from 'react'
import Import from './import'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'

const brandImport = gql`
  mutation BrandImport($excel: Upload!) {
    brandImport(excel: $excel)
  }
`

const BrandImportWrapper = styled.div`
  background-color: #cf1322;
  & > * {
    color: white;
  }
  overflow: hidden;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
`

const BrandImport = () => {
  return (
    <BrandImportWrapper>
      <h3>Brand import</h3>
      <p>
        This import will overwrite all brands and their data that are included
        in the import file. Only use this when importing a new brand!
      </p>
      <Mutation mutation={brandImport}>
        {brandImport => (
          <Import
            handleUpload={fileList =>
              brandImport({
                variables: { excel: fileList },
                context: { hasUpload: true }
              })
            }
          />
        )}
      </Mutation>
    </BrandImportWrapper>
  )
}

export default BrandImport
