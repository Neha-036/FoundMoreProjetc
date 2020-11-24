import React, { Component } from 'react'
import { Layout } from '@/components'
import gql from 'graphql-tag'
import { Route, Redirect } from 'react-router-dom'
import { withApollo } from 'react-apollo'
import { inject, observer } from 'mobx-react'

const ME_QUERY = gql`
  {
    me {
      id
    }
  }
`

const AuthWrapper = ComposedComponent => {
  @inject('windowStore')
  @observer
  class Authenticate extends Component {
    constructor(props) {
      super(props)
      this.state = {
        isAuthenticated: false,
        loading: true
      }
    }
    componentDidMount() {
      if (!this.state.isAuthenticated) {
        this.props.client
          .query({ query: ME_QUERY, fetchPolicy: 'network-only' })
          .then(({ data }) => {
            if (!data.me) throw new Error('Not Authenticated')
            this.setState({ isAuthenticated: true, loading: false })
          })
          .catch(e => this.setState({ loading: false }, () => console.error(e))) /* eslint-disable-line */
      } else {
        this.setState({ loading: false })
      }
    }
    render() {
      const { isAuthenticated, loading } = this.state
      return (
        !loading &&
        (isAuthenticated ? (
          <Layout>
            {this.props.windowStore.renderModals}
            {this.props.windowStore.renderDrawer}
            {this.props.windowStore.renderConfirmations}
            <ComposedComponent {...this.props} />
          </Layout>
        ) : (
          <Redirect to="/login" />
        ))
      )
    }
  }
  return withApollo(Authenticate)
}

export default ({ component, ...props }) => (
  <Route {...props} component={AuthWrapper(component)} />
)
