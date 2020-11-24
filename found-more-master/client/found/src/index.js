import 'react-hot-loader'
import React from 'react'
import { hydrate } from 'react-dom'
import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink, from, split } from 'apollo-link'
import { BatchHttpLink } from 'apollo-link-batch-http'
import { onError } from 'apollo-link-error'
import { setContext } from 'apollo-link-context'
import { createUploadLink } from 'apollo-upload-client'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import omitDeep from 'omit-deep'
import App from './js/app'
import { AUTH_TOKEN } from './js/constants'

import registerServiceWorker from './registerServiceWorker'

const linkConfig = {
  uri: process.env.PRISMA_API_GATEWAY_URL || 'http://localhost:4000'
}
const wsLink = new WebSocketLink({
  uri: process.env.WEBSOCKET_ENDPOINT || 'ws://localhost:4000/graphql',
  options: {
    reconnect: true
  }
})
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN)
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})
const uploadLink = createUploadLink(linkConfig)
const batchLink = new BatchHttpLink(linkConfig)
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    ) /* eslint-disable-line no-console */
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`)
  } /* eslint-disable-line no-console */
})
const omitTypenameLink = new ApolloLink((operation, forward) => {
  omitDeep(operation.variables, ['__typename', 'initial'])
  return forward(operation)
})
const defaultLinks = [omitTypenameLink, errorLink, authLink]
const upload = from([...defaultLinks, uploadLink])
const batch = from([...defaultLinks, batchLink])
const link = split(
  operation => operation.getContext().hasUpload,
  upload,
  split(
    ({ query }) => {
      const definition = getMainDefinition(query)
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      )
    },
    wsLink,
    batch
  )
)
const cache = new InMemoryCache()
const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'all'
  },
  query: {
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'all'
  }
}

export const client = new ApolloClient({
  link,
  cache,
  defaultOptions
})

hydrate(<App client={client} />, document.getElementById('root'))

registerServiceWorker()
