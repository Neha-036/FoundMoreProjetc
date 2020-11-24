import VariationFragment from '@/graphql/fragments/variation.graphql'

export default {
  variation: (_, { id }, { cache }) =>
    cache.readFragment({
      fragment: VariationFragment,
      id: `Variation:${id}`,
      fragmentName: 'VariationFragment'
    })
}
