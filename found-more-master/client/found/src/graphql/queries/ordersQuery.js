import gql from 'graphql-tag'

export default gql`
  query($filters: [OrderWhereInput!], $search: String) {
    orders(where: { AND: $filters }, orderBy: createdAt_DESC, search: $search) {
      id
      orderNumber
      orderedAt
      createdAt
      comments {
        id
      }
      store {
        id
        name
        brand {
          id
          name
        }
      }
      status
      address {
        id
        city
      }
    }
  }
`
