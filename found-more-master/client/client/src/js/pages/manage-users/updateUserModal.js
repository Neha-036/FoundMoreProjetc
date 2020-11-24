import React from 'react'
import Modal from '@/components/fragments/modal'
import UPDATE_USER_MUTATION from 'Common/graphql/mutations/updateUser.graphql'
import { useMutation, useQuery } from 'react-apollo'
import UserForm from '../../components/forms/userform'
import { diff } from '@/helpers/diff'
import gql from 'graphql-tag'

const { form, validationSchema, removeData } = UserForm('update')

const USER_QUERY = gql`
  query UserQuery($where: UserWhereUniqueInput!) {
    user(where: $where) {
      email
      firstName
      lastName
      phoneNumber
      role {
        id
      }
      stores {
        id
      }
      brand {
        id
      }
    }
  }
`

const UpdateUserModal = ({ id }) => {
  const { loading, error, data } = useQuery(USER_QUERY, {
    variables: { where: { id } }
  })

  const [updateUser] = useMutation(UPDATE_USER_MUTATION)

  if (loading || error) return null

  return (
    <Modal.Form
      initialValues={!loading && !error && data?.user}
      buttonProps={{ text: 'Update', style: { width: 100 } }}
      modalProps={{ title: 'Edit user details', style: { minWidth: 600 } }}
      form={form}
      validationSchema={validationSchema}
      handleSubmit={(closeModal, initialValues) => async values => {
        try {
          await updateUser({
            variables: {
              where: { id },
              input: removeData(values, initialValues)
            }
          })
          closeModal()
        } catch (e) {
          console.log(e)
        }
      }}
    />
  )
}

export default UpdateUserModal
