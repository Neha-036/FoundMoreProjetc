import React, { useState } from 'react'
import { Query, graphql } from 'react-apollo'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import { client } from '@/../index'
import FolderColumn from './folderColumnView'
import MenuBar from './menuBar'
import BreadCrumbs from './breadCrumbs'
import orderTemplates from './orderTemplates.graphql'
import orderTemplate from './orderTemplate.graphql'
import orderTemplatesSubscription from './orderTemplatesSubscription.graphql'
import { inject, observer } from 'mobx-react'
import BrandDomainFilter from '@/fragments/filters/brandDomainFilter'
import compliesWithFilters from '@/utils/compliesWithFilters'
import handleFilterChange from '@/utils/handleFilterChange'

const sortByIndex = (a, b) => {
  return a.sortIndex === b.sortIndex ? 0 : a.sortIndex >= b.sortIndex ? 1 : -1
}

const Items = props => {
  const [filters, setFilters] = useState({})
  React.useEffect(() => {
    if (
      props.orderTemplatesSubscription &&
      props.orderTemplatesSubscription.orderTemplates
    ) {
      if (props.orderTemplatesSubscription.orderTemplates.node.id) {
        client.query({
          query: orderTemplates,
          variables: { where: { parent: null } },
          fetchPolicy: 'network-only'
        })
        client.query({
          query: orderTemplate,
          variables: {
            where: {
              id: props.orderTemplatesSubscription.orderTemplates.node.id
            }
          },
          fetchPolicy: 'network-only'
        })
      }
    }
  }, [props, filters])

  return (
    <>
      <h1>Items</h1>
      <MenuBar>
        <span style={{ marginRight: 10 }}>Brand: </span>
        <BrandDomainFilter
          onChange={domain =>
            handleFilterChange(
              domain,
              { 'brand.domain': domain },
              filters,
              filter => {
                setFilters({ ...filter })
              }
            )
          }
        />
      </MenuBar>
      <BreadCrumbs history={props.contextStore.history} />
      <DndProvider backend={HTML5Backend}>
        <Query query={orderTemplates} variables={{ where: { parent: null } }}>
          {({ loading, error, data }) =>
            !loading &&
            !error && (
              <FolderColumn
                data={{
                  orderTemplates: data.orderTemplates
                    .sort(sortByIndex)
                    .filter(ot => compliesWithFilters(ot, filters))
                }}
              />
            )
          }
        </Query>
      </DndProvider>
    </>
  )
}

const ItemsWithContext = inject('contextStore')(observer(Items))

export default graphql(orderTemplatesSubscription, {
  name: 'orderTemplatesSubscription'
})(ItemsWithContext)
