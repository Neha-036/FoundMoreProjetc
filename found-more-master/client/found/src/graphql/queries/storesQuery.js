import gql from 'graphql-tag'

export default gql`
  query($search: String) {
    stores(search: $search) {
      id
      name
      type
      contactPerson
      contactEmail
      brand {
        id
        name
      }
      users {
        id
        firstName
        lastName
      }
      address {
        id
        street
        city
      }
    }
  }
`
