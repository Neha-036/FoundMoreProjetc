import React from 'react'
import { Query } from 'react-apollo'
import Column from './column'
import { Loading } from '@/fragments/loading'

const ColumnPopulator = ({ query, variables, isRoot }) => (
  <Query query={query} variables={variables}>
    {({ loading, error, data }) => {
      if (loading) return <Loading />
      if (error) throw new Error(error)
      return <Column isRoot={isRoot} {...data} />
    }}
  </Query>
)

export default ColumnPopulator
