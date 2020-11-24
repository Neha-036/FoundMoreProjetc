import gql from 'graphql-tag'

export default gql`
  fragment OrderTemplatePropertiesParts on Properties {
    id
    name
    articleNumber
    widthMm
    heightMm
    depthMm
    language {
      isoCode
    }
  }

  fragment OrderTemplateProductParts on Product {
    id
    stock
    properties {
      ...OrderTemplatePropertiesParts
    }
  }

  fragment OrderTemplateParts on OrderTemplate {
    id
    calculatedStock
    brand {
      name
    }
    properties {
      ...OrderTemplatePropertiesParts
    }
    product {
      ...OrderTemplateProductParts
    }
  }

  query {
    orderTemplates(where: { parent: null }) {
      ...OrderTemplateParts
      children {
        ...OrderTemplateParts
        children {
          ...OrderTemplateParts
          children {
            ...OrderTemplateParts
            children {
              ...OrderTemplateParts
            }
          }
        }
      }
    }
  }
`
