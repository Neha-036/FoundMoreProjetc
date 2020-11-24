import { hot } from 'react-hot-loader/root'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import windowStore from './stores/windowStore'
import contextStore from './stores/contextStore'
import { Provider } from 'mobx-react'
import Routes from './routes'

const App = ({ client }) => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Provider contextStore={contextStore} windowStore={windowStore}>
        <Routes />
      </Provider>
    </ApolloProvider>
  </BrowserRouter>
)

export default hot(App)
