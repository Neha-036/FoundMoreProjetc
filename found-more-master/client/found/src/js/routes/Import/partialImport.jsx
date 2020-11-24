import React, { useState } from 'react'
import Import from './import'
import brands from 'Common/graphql/queries/brands.graphql'
import { Mutation, Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Select } from 'antd'
import styled from 'styled-components'

const partialImport = gql`
  mutation PartialImport($domain: String!, $excel: Upload!) {
    partialImport(domain: $domain, excel: $excel)
  }
`

const PartialImportWrapper = styled.div`
  padding: 10px;
  margin: 10px;
  & > div:first-of-type {
    margin-bottom: 10px;
  }
`

const PartialImport = () => {
  const [domain, setDomain] = useState(null)
  return (
    <PartialImportWrapper>
      <h3>Partial import</h3>
      <p>Use this when adding new data to an existing brand.</p>
      <Query query={brands} variables={{ where: { deletedAt: null } }}>
        {({ loading, error, data }) =>
          !error && (
            <Select
              loading={loading}
              showSearch
              optionFilterProp="children"
              style={{ width: 120, marginRight: 20 }}
              placeholder="Select Brand"
              onChange={domain => setDomain(domain)}
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              {data?.brands?.map(brand => (
                <Select.Option key={brand.id} value={brand.domain}>
                  {brand.name}
                </Select.Option>
              ))}
            </Select>
          )
        }
      </Query>
      <Mutation mutation={partialImport}>
        {partialImport => (
          <Import
            buttonDisabled={!domain}
            handleUpload={file =>
              partialImport({
                variables: { excel: file, domain },
                context: { hasUpload: true }
              })
            }
          />
        )}
      </Mutation>
    </PartialImportWrapper>
  )
}

export default PartialImport
