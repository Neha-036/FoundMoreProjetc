import React, { Component } from 'react'
import styled from 'styled-components'
import { Icon } from 'antd'
import { Query } from 'react-apollo'
import { inject } from 'mobx-react'
import { MenuProvider } from 'react-contexify'
import { client } from '@/../index'
import updateOrderTemplate from 'Common/graphql/mutations/updateOrderTemplate.graphql'
import { setLoading, Loading } from '@/fragments/loading'
import ORDER_TEMPLATES_QUERY from './orderTemplates.graphql'
import ORDER_TEMPLATE_QUERY from './orderTemplate.graphql'
import Folder from './folder'
import Column from './column'
import OrderableItem from './orderableItem'
import ColumnContextMenu from './contextMenus/columnContextMenu'

const Columns = styled.div`
  display: flex;
`

const sortByIndex = (a, b) => {
  return a.sortIndex === b.sortIndex ? 0 : a.sortIndex >= b.sortIndex ? 1 : -1
}

@inject('contextStore')
class FolderColumn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      column: {
        id: this.props.id || null
      },
      selectedFolder: {
        id: null
      },
      selectedOrderableItem: {
        id: null
      }
    }
    this.moveFolder = this.moveFolder.bind(this)
  }
  toggleCurrentFolder(id, parent, name, brand) {
    if (this.state.selectedFolder.id !== id) {
      this.props.contextStore.setCurrentFolder({
        id,
        parent,
        name,
        brand
      })
      this.setState({ selectedFolder: { id } })
    } else {
      this.props.contextStore.unsetCurrentFolder()
      this.setState({ selectedFolder: { id: null } })
    }
  }
  toggleSelectedOrderableItem(id) {
    // DoubleClick interval
    this.isClicked = !this.isClicked
    setTimeout(() => {
      if (this.isClicked) {
        this.isClicked = false
        if (this.state.selectedOrderableItem.id !== id) {
          this.setState({ selectedOrderableItem: { id } })
        } else {
          this.setState({ selectedOrderableItem: { id: null } })
        }
      }
    }, 150)
  }
  async moveFolder(target, source) {
    const { setLoading } = this.props
    const targetOptions = {
      variables: {
        where: { id: target || source },
        input: target
          ? {
              children: { connect: { id: source } }
            }
          : {
              parent: { disconnect: true }
            }
      },
      awaitRefetchQueries: true,
      refetchQueries: [
        {
          query: ORDER_TEMPLATES_QUERY
        },
        {
          query: ORDER_TEMPLATES_QUERY,
          variables: { where: { parent: null } }
        }
      ]
    }
    try {
      setLoading(true)
      const res = await client.mutate({
        mutation: updateOrderTemplate,
        ...targetOptions
      })
      setLoading(false)
      return res
    } catch (e) {
      throw new Error(e)
    }
  }
  render() {
    const { column, selectedFolder, selectedOrderableItem } = this.state
    const {
      data: { orderTemplates, orderTemplate }
    } = this.props
    const renderOrderableItem = ({ id, properties }) => (
      <OrderableItem
        active={selectedOrderableItem.id === id}
        key={id}
        id={id}
        onClick={() => this.toggleSelectedOrderableItem(id)}
      >
        <Icon type="tag" />
        <p>{properties?.name}</p>
      </OrderableItem>
    )
    const renderFolder = ({ id, properties, brand, parent }) => (
      <Folder
        active={selectedFolder.id === id}
        id={id}
        key={id}
        parent={parent || null}
        onClick={() =>
          this.toggleCurrentFolder(id, parent || null, properties.name, brand)
        }
        moveFolder={this.moveFolder}
        brand={parent === null && brand.name}
      >
        <Icon
          style={{ fontSize: '16px' }}
          type={selectedFolder.id === id ? 'folder-open' : 'folder'}
        />
        <p>{properties?.name}</p>
      </Folder>
    )
    const folderOrOrderableItem = item => {
      if (item.deletedAt) return null
      if (item.orderable) return renderOrderableItem(item)
      return renderFolder(item)
    }
    return (
      <div>
        <MenuProvider id={`column-${column.id}`}>
          <Columns>
            <Column id={column.id} moveFolder={this.moveFolder}>
              {orderTemplates && orderTemplates.map(folderOrOrderableItem)}
              {orderTemplate &&
                orderTemplate.children
                  .sort(sortByIndex)
                  .map(folderOrOrderableItem)}
            </Column>
            {selectedFolder.id && (
              <Query
                query={ORDER_TEMPLATE_QUERY}
                variables={{ where: { id: selectedFolder.id } }}
                fetchPolicy="network-only"
              >
                {({ loading, error, data }) => {
                  if (loading && !error) return <Loading />
                  if (!error && !loading) {
                    return (
                      <FolderColumnWithLoader
                        id={selectedFolder.id}
                        data={data}
                      />
                    )
                  }
                  return null
                }}
              </Query>
            )}
          </Columns>
          <ColumnContextMenu id={column.id} />
        </MenuProvider>
      </div>
    )
  }
}

const FolderColumnWithLoader = setLoading(FolderColumn)

export default FolderColumnWithLoader
