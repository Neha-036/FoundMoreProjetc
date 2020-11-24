import variation from '@/graphql/fragments/variation.graphql'

export default {
  updateVariation: (_, { id, selectedOptions }, { cache }) => {
    const data = cache.readFragment({
      id: `Variation:${id}`,
      fragment: variation,
      fragmentName: 'VariationFragment'
    })
    Object.assign(data, {
      selectedOptions: selectedOptions.map(option => ({
        ...option,
        __typename: 'SelectedOption'
      }))
    })
    cache.writeFragment({
      id: `Variation:${id}`,
      data,
      fragment: variation,
      fragmentName: 'VariationFragment'
    })
    return data
  }
}
