import StoreFragment from '../../fragments/store.graphql'

export default {
  store: (_, { id }, { cache }) =>
    cache.readFragment({
      fragment: StoreFragment,
      id: `Store:${id}`,
      fragmentName: 'StoreFragment'
    })
}
