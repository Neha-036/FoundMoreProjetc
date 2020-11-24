import updateProductCategory from 'Common/graphql/mutations/updateProductCategory.graphql'
import productCategories from 'Common/graphql/queries/productCategories.graphql'
import rootProductCategories from 'Common/graphql/queries/rootProductCategories.graphql'
import { client } from '@/../index'

const moveItem = (source, target, didDrop) => {
  if (didDrop) return
  const isSame =
    target &&
    (source.productCategory
      ? source.productCategory.id === target.id
      : source.product.id === target.id)
  if (isSame) return
  const res = client.mutate({
    mutation: updateProductCategory,
    variables: {
      where: target
        ? { id: target.id }
        : {
            id: source.productCategory
              ? source.productCategory.id
              : source.product.id
          },
      input: target
        ? source.productCategory
          ? {
              children: { connect: [{ id: source.productCategory.id }] }
            }
          : {
              products: { connect: [{ id: source.product.id }] }
            }
        : { parent: { disconnect: true } }
    },
    awaitRefetchQueries: true,
    refetchQueries: [
      { query: productCategories },
      { query: rootProductCategories }
    ]
  })
  return res
}

export default moveItem
