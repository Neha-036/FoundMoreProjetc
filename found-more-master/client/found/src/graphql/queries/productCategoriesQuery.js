import gql from 'graphql-tag'

export default gql`
  fragment PropertiesParts on Properties {
    id
    name
    articleNumber
    widthMm
    heightMm
    depthMm
  }

  fragment ProductParts on Product {
    id
    stock
    properties {
      ...PropertiesParts
    }
  }

  fragment ProductCategoryParts on ProductCategory {
    id
    properties {
      ...PropertiesParts
    }
    products {
      ...ProductParts
    }
  }

  query {
    productCategories(where: { parent: null }) {
      ...ProductCategoryParts
      children {
        ...ProductCategoryParts
        children {
          ...ProductCategoryParts
        }
      }
    }
  }
`
