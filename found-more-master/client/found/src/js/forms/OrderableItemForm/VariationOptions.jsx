import React from 'react'
import styled from 'styled-components'
import languages from 'Common/graphql/queries/languages.graphql'
import { Query } from 'react-apollo'
import { Select } from 'antd'

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`

/**
 * @param {import('formik').FieldProps} props
 */

const VariationOptions = ({ form, field }) => {
  const handleLanguageChange = isoCode => {
    form.setFieldValue(`${field.name}.language`, { connect: { isoCode } })
  }

  return (
    <Wrapper>
      <Query query={languages}>
        {({ loading, error, data }) =>
          !error && (
            <Select
              showSearch
              onChange={handleLanguageChange}
              loading={loading}
              value={field.value?.language?.connect?.isoCode}
            >
              {data.languages.map(lang => (
                <Select.Option key={lang.id} value={lang.isoCode}>
                  {lang.name}
                </Select.Option>
              ))}
            </Select>
          )
        }
      </Query>
    </Wrapper>
  )
}

export default VariationOptions
