import * as React from 'react'
import styled from 'styled-components'
import rootProductCategories from 'Common/graphql/queries/rootProductCategories.graphql'
import productCategory from 'Common/graphql/queries/productCategory.graphql'
import { DndProvider } from 'react-dnd'
import createHTML5Backend from 'react-dnd-html5-backend'
import ColumnPopulator from './columnPopulator'
import { ElementsBag } from './elementsBag'
import BreadCrumbs from '@/fragments/breadCrumbs'
import BrandDomainFilter from '@/fragments/filters/brandDomainFilter'
import handleFilterChange from '@/utils/handleFilterChange'

const ColumnsWrapper = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
`

export default () => {
  const [history, setHistory] = React.useState([])
  const [selectedItems, setSelectedItems] = React.useState([])
  const [filters, setFilters] = React.useState({})

  const pushToHistory = historyObject => {
    const { id, parent } = historyObject
    const historyIndex = history.findIndex(item => item.id === id)
    if (historyIndex !== -1) {
      setHistory(history.slice(0, historyIndex))
      return
    }
    const parentIndex = history.findIndex(
      item => item.parent?.id === parent?.id
    )
    if (parentIndex !== -1) {
      setHistory([...history.slice(0, parentIndex), historyObject])
      return
    }
    setHistory([...history, historyObject])
  }

  const setCurrent = productCategory => {
    if (productCategory?.id) {
      const historyIndex = history.findIndex(
        item => item.id === productCategory.id
      )
      setHistory([...history.slice(0, historyIndex + 1)])
      return
    }
    setHistory([])
  }

  const toggleItem = ({ id, columnId }, e) => {
    if (!e.shiftKey) {
      setSelectedItems([
        ...selectedItems.filter(item => item.columnId !== columnId),
        { id, columnId }
      ])
      return
    }
    setSelectedItems([...selectedItems, { id, columnId }])
  }

  return (
    <>
      <h1>Elements</h1>
      <span>Brand: </span>
      <BrandDomainFilter
        onChange={domain =>
          handleFilterChange(
            domain,
            { 'brand.domain': domain },
            filters,
            filter => {
              setFilters(filter)
              setHistory([])
            }
          )
        }
      />
      <BreadCrumbs
        history={history.map(item => ({
          name: item.properties.name,
          id: item.id
        }))}
      />
      <ElementsBag.Provider
        value={{
          pushToHistory,
          history,
          setCurrent,
          selectedItems,
          toggleItem,
          filters
        }}
      >
        <DndProvider backend={createHTML5Backend}>
          <ColumnsWrapper>
            <ColumnPopulator isRoot query={rootProductCategories} />
            {history.map(item => (
              <ColumnPopulator
                key={item.id}
                query={productCategory}
                variables={{ where: { id: item.id } }}
              />
            ))}
          </ColumnsWrapper>
        </DndProvider>
      </ElementsBag.Provider>
    </>
  )
}
