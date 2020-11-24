import React from 'react'
import brands from 'Common/graphql/queries/brands.graphql'
import { Query } from 'react-apollo'
import { Select } from 'antd'

const BrandDomainFilter = ({ onChange }) => {
  return (
    <Query query={brands} variables={{ where: { deletedAt: null } }}>
      {({ loading, error, data }) =>
        !error && (
          <Select
            loading={loading}
            showSearch
            optionFilterProp="children"
            style={{ width: 120, marginRight: 20 }}
            defaultValue={null}
            onChange={onChange}
            filterOption={(input, option) =>
              option.props.children
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
            }
          >
            <Select.Option value={null}>-</Select.Option>
            {data?.brands?.map(brand => (
              <Select.Option key={brand.id} value={brand.domain}>
                {brand.name}
              </Select.Option>
            ))}
          </Select>
        )
      }
    </Query>
  )
}

export default BrandDomainFilter
