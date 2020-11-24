import React from 'react'
import { ThemeProvider } from 'styled-components'
import gql from 'graphql-tag'
import { ApolloProvider, useQuery } from 'react-apollo'
import { BrowserRouter } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import { Provider } from 'redux-zero/react'
import Router from './pages'
import getTheme from '../styles'
import GlobalStyle from '../styles/defaults/global'
import LoadingSpinner from './components/fragments/loading-spinner'
import { MeStoreProvider } from './stores/meStore'
import { client } from '../index'
import store from '../store'

const PERSONALIZATION_QUERY = gql`
  query personalizationQuery {
    brandPersonalization {
      primaryColor
      secondaryColor
      textColor
    }
  }
`

const App = () => {
  const { loading, error, data } = useQuery(PERSONALIZATION_QUERY)
  if (error) return "Can't find this brand"
  if (loading) return <LoadingSpinner />
  const theme = getTheme(
    data.brandPersonalization.primaryColor,
    data.brandPersonalization.secondaryColor,
    data.brandPersonalization.textColor
  )
  return (
    <MeStoreProvider>
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Router />
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    </MeStoreProvider>
  )
}

const AppWithApollo = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

export default hot(AppWithApollo)
