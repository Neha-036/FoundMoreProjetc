import React, { Component } from 'react'
import { Icon, Select, message } from 'antd'
import { graphql, Query } from 'react-apollo'
import gql from 'graphql-tag'
import { brandsQuery } from '@/graphql/queries'

const BRAND_EXPORT = gql`
  mutation($where: BrandWhereUniqueInput!) {
    brandExport(where: $where, type: found) {
      location
    }
  }
`

export default graphql(BRAND_EXPORT, { name: 'brandExport' })(
  class extends Component {
    constructor() {
      super()
      this.state = {
        brand: '',
        loading: false
      }
      this.handleDownload = this.handleDownload.bind(this)
    }
    handleDownload() {
      if (!this.state.brand) {
        message.warning('Select a brand first')
      } else {
        this.setState({ loading: true }, () =>
          this.props
            .brandExport({ variables: { where: { domain: this.state.brand } } })
            .then(({ data }) => {
              this.setState({ loading: false })
              window.location = data.brandExport.location
            })
            .catch(err => {
              this.setState({ loading: false })
            console.error(err) // eslint-disable-line
            })
        )
      }
    }
    render() {
      return (
        <React.Fragment>
          <Query query={brandsQuery}>
            {({ loading, error, data }) =>
              !loading &&
              !error && (
                <Select
                  placeholder="Select Brand"
                  style={{ display: 'block' }}
                  onChange={e => this.setState({ brand: e })}
                >
                  {data.brands.map(brand => (
                    <Select.Option key={brand.id} value={brand.domain}>
                      {brand.name}
                    </Select.Option>
                  ))}
                </Select>
              )
            }
          </Query>
          <div onClick={this.handleDownload}>
            <Icon type={this.state.loading ? 'loading' : 'download'} />
            <span>Download</span>
          </div>
        </React.Fragment>
      )
    }
  }
)
