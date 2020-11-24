import React from 'react'
import { useTable, usePagination, useSortBy } from 'react-table'
import styled from 'styled-components'
import IconButton from '../icon-button'
import LoadingSpinner from '../loading-spinner'

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
  & thead > tr > th {
    padding: 10px 0;
    & > span {
      display: inline-block;
      &.active {
        color: ${({ theme }) => theme.colorPrimary};
      }
    }
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

const Table = ({ columns, data, loading }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex }
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 15 }
    },
    useSortBy,
    usePagination
  )
  if (loading) return <LoadingSpinner />
  return (
    <>
      <TableWrapper {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, i) => (
            <tr key={i}>
              {headerGroup.headers.map((column, i) => (
                <th
                  align="left"
                  key={i}
                  {...column.getHeaderProps({
                    ...column.getSortByToggleProps(),
                    style: { width: column.maxWidth }
                  })}
                  style={{ column }}
                >
                  <span className={column.isSorted ? 'active' : ''}>
                    {column.render('Header')}
                  </span>
                  <span>
                    {column.isSorted ? (
                      <IconButton
                        invert
                        size="15px"
                        icon={column.isSortedDesc ? 'arrowUp' : 'arrowDown'}
                      />
                    ) : (
                      ''
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr key={i} {...row.getRowProps()}>
                {row.cells.map((cell, i) => (
                  <td key={i} {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </TableWrapper>
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
      </div>
    </>
  )
}

export default Table
