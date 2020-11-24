import React, { Component } from 'react'
import styled from 'styled-components'
import { Query, graphql } from 'react-apollo'
import { ordersQuery } from '@/graphql/queries'
import { DebounceInput } from 'react-debounce-input'
import {
  Table,
  Select,
  DatePicker,
  Input,
  Icon,
  Menu,
  Dropdown,
  Button,
  message,
  Modal
} from 'antd'
import { stringSort } from '@/utils'
import { withRouter } from 'react-router-dom'
import updateOrder from 'Common/graphql/mutations/updateOrder.graphql'
import { SpaceBetween, VerticalAlign } from '@/fragments'
import format from 'date-fns/format'
import { STATUSES } from 'Common/constants'
import { getStatusColor } from 'Common/utils'
import Detail from './detail'
import { ROW_AMOUNT } from '../../constants'
import BrandDomainFilter from '@/fragments/filters/brandDomainFilter'

const FilterLabel = styled.span`
  margin-right: 10px;
`

const columns = [
  {
    title: 'Order date',
    dataIndex: 'orderedAt',
    render: e => format(e, 'D-M-YYYY'),
    sorter: (a, b) => stringSort(a.orderedAt, b.orderedAt)
  },
  {
    title: 'Order Nr.',
    dataIndex: 'orderNumber',
    sorter: (a, b) => stringSort(a.orderNumber, b.orderNumber)
  },
  {
    title: 'Brand',
    dataIndex: 'store.brand.name',
    sorter: (a, b) => stringSort(a.store.brand.name, b.store.brand.name)
  },
  {
    title: 'Store',
    dataIndex: 'store.name',
    sorter: (a, b) => stringSort(a.store.name, b.store.name)
  },
  {
    title: 'Status',
    render: e => (
      <span style={{ color: getStatusColor(e.status) }}>{e.status}</span>
    ),
    sorter: (a, b) => stringSort(a.status, b.status)
  },
  {
    title: 'Comments',
    render: e => (e.comments.length > 0 ? 'Yes' : 'No')
  },
  {
    render: e => <Detail title={e.orderNumber} {...e} />
  }
]

export default graphql(updateOrder, { name: 'updateOrder' })(
  withRouter(
    class extends Component {
      constructor(props) {
        super(props)
        this.state = {
          filters: {},
          searchValue: '',
          selectedOrders: []
        }
        this.handleMenuClick = this.handleMenuClick.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
      }
      setSelectedOrders(orders) {
        this.setState({ selectedOrders: orders })
      }
      handleMenuClick(e) {
        Modal.confirm({
          title: 'Warning',
          content: (
            <React.Fragment>
              <p>
                You are about to change the status of{' '}
                {this.state.selectedOrders.length} orders to &#39;{e.key}&#39;
              </p>
              <p>Are you sure?</p>
            </React.Fragment>
          ),
          onOk: () => {
            const ordersToUpdate = this.state.selectedOrders.map(({ id }) =>
              this.props.updateOrder({
                variables: { where: { id }, input: { status: e.key } }
              })
            )
            return Promise.all(ordersToUpdate)
              .then(() => {
                message.success(`Succesfully changed status(ses) to '${e.key}'`)
              })
              .catch(err => {
                Error(err)
              })
          }
        })
      }
      handleFilterChange(value, filter) {
        if (value === null) {
          const { filters } = this.state
          delete filters[Object.keys(filter)[0]]
          this.setState({ filters })
        } else {
          this.setState({ filters: { ...this.state.filters, ...filter } })
        }
      }
      handleSearch(e) {
        this.setState({ searchValue: e.target.value })
      }
      render() {
        const rowSelection = {
          onChange: (_, selectedRows) => {
            this.setSelectedOrders(selectedRows)
          }
        }
        const menu = (
          <Menu onClick={this.handleMenuClick}>
            {STATUSES.map(status => (
              <Menu.Item key={status.value}>{status.label}</Menu.Item>
            ))}
          </Menu>
        )
        const { selectedOrders, filters, searchValue } = this.state
        return (
          <React.Fragment>
            <SpaceBetween>
              <h1>Orders</h1>
            </SpaceBetween>
            <VerticalAlign>
              <DebounceInput
                style={{ width: 200, marginRight: 20 }}
                prefix={
                  <Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                element={Input}
                debounceTimeout={250}
                onChange={this.handleSearch}
              />
              <FilterLabel>Brand:</FilterLabel>
              <BrandDomainFilter
                onChange={e =>
                  this.handleFilterChange(e, {
                    store: { brand: { domain: e } }
                  })
                }
              />
              <FilterLabel>Status:</FilterLabel>
              <Select
                style={{ width: 120, marginRight: 20 }}
                defaultValue={null}
                onChange={e => this.handleFilterChange(e, { status: e })}
              >
                <Select.Option value={null}>-</Select.Option>
                {STATUSES.map(status => (
                  <Select.Option key={status.value} value={status.value}>
                    {status.label}
                  </Select.Option>
                ))}
              </Select>
              <FilterLabel>From:</FilterLabel>
              <DatePicker
                style={{ marginRight: 20 }}
                onChange={e =>
                  this.handleFilterChange(e, {
                    createdAt_gte: format(e, 'YYYY-MM-DDT[00:00:00]')
                  })
                }
                format="D-M-YYYY"
              />
              <FilterLabel>Till:</FilterLabel>
              <DatePicker
                onChange={e =>
                  this.handleFilterChange(e, {
                    createdAt_lte: format(e, 'YYYY-MM-DDT[23:59:59]')
                  })
                }
                format="D-M-YYYY"
              />
            </VerticalAlign>
            <VerticalAlign>
              <Dropdown disabled={selectedOrders.length === 0} overlay={menu}>
                <Button>
                  Set status <Icon type="down" />
                </Button>
              </Dropdown>
            </VerticalAlign>
            <Query
              query={ordersQuery}
              variables={{ filters, search: searchValue }}
            >
              {({ loading, error, data }) =>
                !error && (
                  <Table
                    loading={loading}
                    rowSelection={rowSelection}
                    pagination={{ pageSize: ROW_AMOUNT }}
                    style={{ marginTop: 20 }}
                    rowKey="id"
                    dataSource={data.orders}
                    columns={columns}
                  />
                )
              }
            </Query>
          </React.Fragment>
        )
      }
    }
  )
)
