import React from 'react'
import Modal from '@/components/fragments/modal'
import StoreForm from './storeForm'
import STORE_QUERY from 'Common/graphql/queries/store.graphql'
import UPDATE_STORE_MUTATION from 'Common/graphql/mutations/updateStore.graphql'
import { useQuery, useMutation } from 'react-apollo'
import { diff } from '@/helpers/diff'
import * as Yup from 'yup'
import toPrismaObject from '@/helpers/toPrismaObject'

const { form, removeData } = StoreForm('update')

const UpdateStoreModal = ({ id, isMobile }) => {
  const { loading, error, data } = useQuery(STORE_QUERY, {
    variables: { where: { id } }
  })

  const [updateStore] = useMutation(UPDATE_STORE_MUTATION)

  if (loading || error) return null

  return (
    <Modal.Form
      modalProps={{ title: 'Update Store' }}
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
          .nullable()
      })}
      initialValues={!loading && !error && data?.store}
      handleSubmit={(closeModal, initialValues) => async values => {
        try {
          const { language, ...rest } = values

          const newLanguage = {
            connect: {
              id: language.id
            }
          }

          const newValues = {
            language: newLanguage,
            ...rest
          }
          const { address: diffAddress, ...difference } = diff(
            initialValues,
            newValues
          )

          const address = diffAddress
            ? Object.entries(diffAddress).reduce(
                (acc, curr) => {
                  acc.update[curr[0]] = curr[1]
                  return acc
                },
                { update: {} }
              )
            : null

          const finalObject = address ? { ...difference, address } : difference

          await updateStore({
            variables: { where: { id }, input: finalObject }
          })
          closeModal()
          alert('Store has been updated')
        } catch (e) {
          console.log(e)
        }
      }}
      buttonProps={{ text: 'Update', style: { width: isMobile && 100 } }}
    />
  )
}

export default UpdateStoreModal
