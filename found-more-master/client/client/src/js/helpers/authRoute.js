import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useQuery } from 'react-apollo'
import gql from 'graphql-tag'
import storeLanguages from 'Common/graphql/queries/storeLanguages.graphql'
import { useMeStore } from '@/stores/meStore'

const ME_QUERY = gql`
  {
    me {
      id
      role {
        permissions {
          action
          model
        }
      }
    }
  }
`

const Authenicate = ({ children }) => {
  const { loading: loadingMe, error: errorMe, data: dataMe } = useQuery(
    ME_QUERY
  )
  const { loading: loadingSL, error: errorSL, data: dataSL } = useQuery(
    storeLanguages
  )
  const {
    setId,
    setAuthenticated,
    setStoreLanguages,
    isStoreLanguagesSet,
    isPermissionsSet,
    setPermissions
  } = useMeStore()

  if (errorMe) {
    return <Redirect to="/login" />
  }
  if (loadingMe) return null

  if (errorSL || loadingSL) return null

  if (!isStoreLanguagesSet) {
    setStoreLanguages(dataSL.storeLanguages)
  }

  if (!isPermissionsSet) {
    setPermissions(dataMe.me.role.permissions)
  }

  setId(dataMe.me.id)
  setAuthenticated(true)
  return children
}

const AuthWrapper = ({ component: ComposedComponent, ...props }) => {
  const { isAuthenticated } = useMeStore()
  if (isAuthenticated) return <ComposedComponent {...props} />
  return (
    <Authenicate>
      <ComposedComponent {...props} />
    </Authenicate>
  )
}

export default ({ component, ...props }) => (
  <Route {...props} component={() => <AuthWrapper component={component} />} />
)
