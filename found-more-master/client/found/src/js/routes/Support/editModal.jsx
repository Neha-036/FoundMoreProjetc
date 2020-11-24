import React from 'react'
import { graphql, compose, withApollo } from 'react-apollo'
import updateSupportPage from 'Common/graphql/mutations/updateSupportPage.graphql'
import supportPage from 'Common/graphql/queries/supportPage.graphql'
import { AdminFormModal } from '@/components'
import { message } from 'antd'
import { diff } from 'deep-object-diff'
import { SupportPageForm, validationSchema } from '../../forms/SupportPageForm'

export default compose(
  graphql(updateSupportPage, { name: 'updateSupportPage' }),
  withApollo
)(({ updateSupportPage, client, id }) => (
  <AdminFormModal
    initialValues={async () => {
      const { data } = await client.query({
        query: supportPage,
        variables: { where: { id } },
        fetchPolicy: 'network-only'
      })
      return data.supportPage
    }}
    form={SupportPageForm}
    modalProps={{ title: 'Edit a FAQ article' }}
    validationSchema={validationSchema}
    buttonProps={{ icon: 'form', label: 'Edit', type: 'primary' }}
    handleSubmit={({ closeModal, initialValues }) => async (
      values,
      { setSubmitting }
    ) => {
      try {
        await updateSupportPage({
          variables: { where: { id }, input: diff(initialValues, values) }
        })
        message.success('Succesfully updated support page')
        closeModal()
      } catch (e) {
        message.error(e)
      }
      setSubmitting(false)
    }}
  />
))
