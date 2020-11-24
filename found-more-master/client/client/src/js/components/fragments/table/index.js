import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Modal from '../../fragments/modal'
import IconButton from '../icon-button'

const TableWrapper = styled.table`
  width: 100%;
  & tr {
    & > td {
      text-transform: capitalize;
      font-size: 14px;
      vertical-align: middle;
      height: 52px;
      padding: 0;
      line-height: 25px;
      padding-right: 15px;
      content: attr(data-label);
    }
  }
  & thead > tr > td {
    &:hover {
      color: ${({ theme }) => theme.colorPrimary};
    }
  }
  & tbody {
    overflow-y: auto;
    & > tr {
      &:hover {
        color: ${({ theme }) => theme.colorPrimary};
        a > div {
          color: ${({ theme }) => theme.colorPrimary};
        }
      }
    }
  }
  & tr {
    border-bottom: 1px solid ${({ theme }) => theme.colorText};
  }
  & td > a {
    text-decoration: none;
    color: ${({ theme }) => theme.colorText};
    font-size: 16px;
  }
  & td > a > div {
    line-height: 15px;
    @media (min-width: ${({ theme }) => theme.bpDesktop}) {
      line-height: 20px;
    }
  }
  & td > div {
    line-height: 15px;
    @media (min-width: ${({ theme }) => theme.bpDesktop}) {
      line-height: 20px;
    }
    & :hover {
      cursor: pointer;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.bpDesktop}) {
    & tr {
      & > td {
        font-size: 0.8em;
      }
    }
    & td > a {
      color: ${({ theme }) => theme.colorText};
      text-decoration: none;
      font-size: 0.8em;
    }
    & td > div {
      padding-right: 0;
    }
  }
`

const Order = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
`

const Td = styled.td`
  color: ${({ active, theme }) => active && theme.colorPrimary};
  font-family: ${({ active, theme }) => active && theme.fontBold};
  cursor: pointer;
`

class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.data,
      sortedOn: {
        key: '',
        order: ''
      }
    }
    this.PopupBody = this.props.layout.popup && this.props.layout.popup.body
    this.matcher = (column, row) =>
      column.split('.').reduce((obj, i) => obj[i], row)
    this.decorate = (decorator, value, row) => {
      if (decorator) return decorator(value, row)
      if (value) return value
      return '-'
    }
  }
  sortOn(key) {
    if (key === this.state.sortedOn.key) {
      this.setState({
        sortedOn: {
          order: this.state.sortedOn.order === 'ASC' ? 'DESC' : 'ASC',
          key
        },
        data: this.state.data.reverse()
      })
    } else {
      const data = this.state.data.slice().sort((a, b) => {
        if (this.matcher(key, a) < this.matcher(key, b)) return -1
        if (this.matcher(key, a) > this.matcher(key, b)) return 1
        return 0
      })
      this.setState({ data, sortedOn: { key, order: 'ASC' } })
    }
  }
  render() {
    const { layout } = this.props
    const { data, sortedOn } = this.state
    const { PopupBody } = this
    return (
      <TableWrapper>
        <thead>
          <tr>
            {Object.entries(layout.columns).map(column => (
              <Td
                active={column[0] === sortedOn.key}
                onClick={() =>
                  column[1].sortable !== false && this.sortOn(column[0])
                }
                key={column[0]}
              >
                <Order>
                  {column[1].label}
                  {column[0] === sortedOn.key && (
                    <IconButton
                      invert
                      size="15px"
                      icon={sortedOn.order === 'ASC' ? 'arrowDown' : 'arrowUp'}
                    />
                  )}
                </Order>
              </Td>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row.id}>
              {Object.entries(layout.columns).map(column => (
                <td
                  align={column[1].align === 'right' ? 'right' : 'left'}
                  data-label={column[1].label}
                  key={column[0]}
                >
                  {layout.popup && (
                    <Modal
                      body={<PopupBody id={row.id} />}
                      title={this.matcher(layout.popup.title, row)}
                    >
                      {this.decorate(
                        column[1].decorator,
                        this.matcher(column[0], row),
                        row
                      )}
                    </Modal>
                  )}
                  {layout.link && (
                    <Link to={`/orders/detail/${row.id}`}>
                      <div>
                        {this.decorate(
                          column[1].decorator,
                          this.matcher(column[0], row),
                          row
                        )}
                      </div>
                    </Link>
                  )}
                  {!layout.popup &&
                    !layout.link &&
                    this.decorate(
                      column[1].decorator,
                      this.matcher(column[0], row),
                      row
                    )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </TableWrapper>
    )
  }
}

export default Table
