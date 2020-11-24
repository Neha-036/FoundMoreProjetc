import React, { createContext, useContext } from 'react'
import { useLocalStore } from 'mobx-react-lite'

const meStoreContext = createContext(null)

export const createMeStore = () => {
  return {
    id: null,
    permissions: [],
    storeLanguages: [],
    isAuthenticated: false,
    setId(id) {
      this.id = id
    },
    setAuthenticated(bool) {
      this.isAuthenticated = bool
    },
    setPermissions(permissions) {
      this.permissions = permissions
    },
    setStoreLanguages(storeLanguages) {
      this.storeLanguages = storeLanguages
    },
    get isStoreLanguagesSet() {
      return Boolean(this.storeLanguages.length)
    },
    get isStorePermissionsSet() {
      return Boolean(this.permissions.length)
    },
    hasPermission(a, m) {
      return this.permissions.some(
        ({ model, action }) =>
          (model === 'ALL' || model === m) && (action === 'ALL' || action === a)
      )
    }
  }
}

export const MeStoreProvider = ({ children }) => {
  const store = useLocalStore(createMeStore)
  return (
    <meStoreContext.Provider value={store}>{children}</meStoreContext.Provider>
  )
}

export const useMeStore = () => {
  const store = useContext(meStoreContext)
  if (!store) {
    throw new Error('useMeStore must be used within a StoreProvider.')
  }
  return store
}
