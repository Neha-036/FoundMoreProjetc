import React from 'react'
import { hydrate } from 'react-dom'
import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import {
  InMemoryCache,
  IntrospectionFragmentMatcher
} from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'
import { ApolloLink, split } from 'apollo-link'
import { onError } from 'apollo-link-error'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import App from './js/App'
import { AUTH_TOKEN } from './js/constants'
import mutations from './graphql/resolvers/mutations'
import queries from './graphql/resolvers/queries'

import registerServiceWorker from './registerServiceWorker'
import introspectionQueryResultData from './fragmentTypes.json'

/* ####################
#### PRISMA CONFIG ####
#################### */

const httplink = new HttpLink({
  uri: process.env.PRISMA_API_GATEWAY_URL || 'http://localhost:4000'
})

const wsLink = new WebSocketLink({
  uri: process.env.WEBSOCKET_ENDPOINT || 'ws://localhost:4000/graphql',
  options: {
    reconnect: true
  }
})

const link = process.browser
  ? split(
      // only create the split in the browser
      // split based on operation type
      ({ query }) => {
        const { kind, operation } = getMainDefinition(query)
        return kind === 'OperationDefinition' && operation === 'subscription'
      },
      wsLink,
      httplink
    )
  : httplink

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN)
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
})

export const cache = new InMemoryCache({ fragmentMatcher })

export const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(
              locations
            )}, Path: ${path}`
          )
        ) /* eslint-disable-line no-console */
      }
      if (networkError)
        console.log(
          `[Network error]: ${networkError}`
        ) /* eslint-disable-line no-console */
    }),
    authLink,
    link
  ]),
  cache,
  resolvers: {
    Query: queries,
    Mutation: mutations
  }
})

cache.writeData({
  data: {
    selectedOrderItems: [],
    storeOrderItems: []
  }
})

/* ####################
## END PRISMA CONFIG ##
#################### */

hydrate(<App />, document.getElementById('root'))

registerServiceWorker()
