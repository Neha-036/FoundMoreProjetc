import gql from 'graphql-tag'

export default gql`
  {
    users(where: { deletedAt: null }) {
      id
      email
      firstName
      lastName
      brand {
        id
        name
        domain
      }
      role {
        id
        name
      }
      stores {
        id
        name
        contactPerson
        contactEmail
        address {
          id
          city
        }
      }
    }
  }
`
