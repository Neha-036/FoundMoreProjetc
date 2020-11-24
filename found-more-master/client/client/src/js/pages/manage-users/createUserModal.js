import React from 'react'
import Modal from '@/components/fragments/modal'
import USER_QUERY from 'Common/graphql/queries/user.graphql'
import ROLES_QUERY from 'Common/graphql/queries/roles.graphql'
import CREATE_USER_MUTATION from 'Common/graphql/mutations/createUser.graphql'
import { useLazyQuery, useMutation, useQuery } from 'react-apollo'
import UserForm from '../../components/forms/userform'
import { diff } from '@/helpers/diff'
import gql from 'graphql-tag'
import LoadingSpinner from '@/components/fragments/loading-spinner'

const { form, validationSchema, removeData } = UserForm('create')

const CreateUserModal = () => {
  const [createUser] = useMutation(CREATE_USER_MUTATION)

  const BRAND_QUERY = gql`
    query SupportQuery {
      brand(where: {domain: "${window.location.hostname.split('.')[0]}"}) {
        id
      }
    }
`

  const { loading, error, data } = useQuery(BRAND_QUERY)

  if (loading || error) return null

  return (
    <Modal.Form
      initialValues={{
        password: '',
        brand: {
          id: data.brand.id
        }
      }}
      buttonProps={{ text: 'Create', style: { width: 100 } }}
      modalProps={{ title: 'Create new user', style: { minWidth: 600 } }}
      form={form}
      validationSchema={validationSchema}
      handleSubmit={(closeModal, initialValues) => async values => {
        try {
          await createUser({
            variables: { input: removeData(values, initialValues) }
          })
          closeModal()
        } catch (e) {
          console.log(e)
        }
      }}
    />
  )
}

export default CreateUserModal
