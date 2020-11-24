import React from 'react'
import Modal from '@/components/fragments/modal'
import StoreForm from './storeForm'
import STORE_QUERY from 'Common/graphql/queries/store.graphql'
import CREATE_STORE_MUTATION from 'Common/graphql/mutations/createStore.graphql'
import { useQuery, useMutation } from 'react-apollo'
import { diff } from '@/helpers/diff'
import toPrismaObject from '@/helpers/toPrismaObject'
import gql from 'graphql-tag'
import * as Yup from 'yup'
const { form, removeData } = StoreForm('update')

const createStoreModal = ({ id, isMobile }) => {
  const [updateStore] = useMutation(CREATE_STORE_MUTATION)

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
        brand: {
          id: data.brand.id
        },
        name: '',
        storeNumber: '',
        address: {
          street: '',
          number: '',
          city: '',
          countryCode: '',
          postalCode: ''
        },
        contactPerson: '',
        contactEmail: '',
        phone: '',
        language: '',
        website: '',
        size: '',
        type: ''
      }}
      modalProps={{ title: 'Create Store' }}
      form={form}
      validationSchema={Yup.object().shape({
        name: Yup.string().required('Store name is required'),
        storeNumber: Yup.string().required('Store number is required'),
        address: Yup.object()
          .shape({
            street: Yup.string().required('Street is required.'),
            number: Yup.string()
              .matches(/^[\d-]+$/, {
                excludeEmptyString: true,
                message: 'You can only use numbers or -'
              })
              .required('Number is required.'),
            city: Yup.string().required('City is required.'),
            postalCode: Yup.string().required('Postal code is required.'),
            countryCode: Yup.string().required('Country is required.')
          })
          .nullable(),
        language: Yup.string().required('Language is required')
      })}
      handleSubmit={(closeModal, initialValues) => async values => {
        try {
          const { language, ...rest } = values

          const newLanguage = {
            id: language.id
          }

          const newValues = {
            language: newLanguage,
            ...rest
          }

          await updateStore({
            variables: {
              input: toPrismaObject('create', newValues, {
                brand: 'connect',
                language: 'connect'
              })
            }
          })
          closeModal()
          alert('Store has been created')
        } catch (e) {}
      }}
      buttonProps={{ text: 'Create', style: { width: 100 } }}
    />
  )
}

export default createStoreModal
