import React, { Component } from 'react'
import { Query, withApollo, Mutation } from 'react-apollo'
import {
  Table,
  Divider,
  Input,
  Icon,
  Pagination,
  Button,
  Popconfirm
} from 'antd'
import gql from 'graphql-tag'
import { DebounceInput } from 'react-debounce-input'
import { stringSort } from '@/utils'
import { SpaceBetween } from '@/fragments'
import stores from 'Common/graphql/queries/stores.graphql'
import { ROW_AMOUNT } from '@/constants'
import windowStore from '@/stores/windowStore'
import createStore from './actions/createStore'
import editStore from './actions/editStore'
import deleteStore from 'Common/graphql/mutations/deleteStore.graphql'

const storeAmount = gql`
  query($search: String) {
    storesConnection(search: $search) {
      aggregate {
        count
      }
    }
  }
`

export default withApollo(
  class extends Component {
    constructor() {
      super()
      this.state = {
        searchValue: '',
        storeAmount: 0,
        currentPage: 1
      }
      this.setCurrentPage = this.setCurrentPage.bind(this)
      this.handleSearch = this.handleSearch.bind(this)
    }
    componentDidMount() {
      this.setStoreAmount()
    }
    setStoreAmount() {
      this.props.client
        .query({
          query: storeAmount,
          variables: { search: this.state.searchValue },
          fetchPolicy: 'network-only'
        })
        .then(({ data }) =>
          this.setState({ storeAmount: data.storesConnection.aggregate.count })
        )
    }

    setCurrentPage(num) {
      this.setState({ currentPage: num })
    }
    handleSearch(e) {
      this.setState({ searchValue: e.target.value }, () =>
        this.setStoreAmount()
      )
      this.setCurrentPage(1)
    }
    render() {
      const { currentPage, storeAmount, searchValue } = this.state
      return (
        <React.Fragment>
          <SpaceBetween>
            <h1>Stores</h1>
            <Button
              type="primary"
              icon="plus"
              onClick={() => windowStore.addModal(createStore())}
            >
              Add Store
            </Button>
          </SpaceBetween>
          <DebounceInput
            style={{ width: 400, marginBottom: 20 }}
            prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
            element={Input}
            debounceTimeout={250}
            onChange={this.handleSearch}
          />
          <Query
            query={stores}
            variables={{
              where: { deletedAt: null },
              search: searchValue,
              skip: ROW_AMOUNT * (currentPage - 1),
              last: ROW_AMOUNT * currentPage
            }}
            fetchPolicy="cache-and-network"
          >
            {({ loading, error, data }) =>
              !error && (
                <React.Fragment>
                  <Pagination
                    pageSize={ROW_AMOUNT}
                    current={currentPage}
                    total={storeAmount}
                    onChange={this.setCurrentPage}
                  />
                  <Table
                    loading={loading}
                    rowKey="id"
                    pagination={false}
                    dataSource={data.stores}
                    columns={[
                      {
                        title: 'Name',
                        dataIndex: 'name',
                        sorter: (a, b) => stringSort(a.name, b.name)
                      },
                      {
                        title: 'Brand',
                        dataIndex: 'brand.name',
                        sorter: (a, b) =>
                          stringSort(a.brand.domain, b.brand.domain)
                      },
                      {
                        title: 'City',
                        dataIndex: 'address.city',
                        sorter: (a, b) =>
                          stringSort(a.address.city, b.address.city)
                      },
                      {
                        title: 'Street',
                        dataIndex: 'address.street',
                        sorter: (a, b) =>
                          stringSort(a.address.street, b.address.street)
                      },
                      {
                        title: 'Type',
                        dataIndex: 'type',
                        sorter: (a, b) => stringSort(a.type, b.type)
                      },
                      {
                        key: 'actions',
                        align: 'right',
                        rowKey: 'actions',
                        render: ({ id }) => (
                          <span>
                            <Button
                              type="primary"
                              icon="edit"
                              onClick={() =>
                                windowStore.addModal(editStore({ id }))}
                            >
                              Edit
                            </Button>
                            <Divider type="vertical" />
                            <Mutation mutation={deleteStore}>
                              {deleteStore => (
                                <Popconfirm
                                  title="Sure to delete?"
                                  onConfirm={() =>
                                    deleteStore({
                                      variables: { where: { id } },
                                      refetchQueries: [{
                                        query: stores,
                                        variables: {
                                          where: { deletedAt: null },
                                          search: searchValue,
                                          skip: ROW_AMOUNT * (currentPage - 1),
                                          last: ROW_AMOUNT * currentPage
                                        }
                                      }]
                                    })
                                  }
                                >
                                  <a>Delete</a>
                                </Popconfirm>
                              )}
                            </Mutation>
                          </span>
                        )
                      }
                    ]}
                  />
                </React.Fragment>
              )
            }
          </Query>
        </React.Fragment>
      )
    }
  }
)
