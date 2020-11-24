import gql from 'graphql-tag'

export default gql`
  {
    brands(where: { AND: { deletedAt: null, domain_not: "found" } }) {
      id
      name
      domain
      users {
        id
      }
      stores {
        id
      }
      address {
        id
        city
      }
    }
  }
`
