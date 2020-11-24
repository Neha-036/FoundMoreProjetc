import React from 'react'
import { graphql } from 'react-apollo'
import createSupportPage from 'Common/graphql/mutations/createSupportPage.graphql'
import supportPages from 'Common/graphql/queries/supportPages.graphql'
import { AdminFormModal } from '@/components'
import { message } from 'antd'
import { SupportPageForm, validationSchema } from '../../forms/SupportPageForm'

export default graphql(createSupportPage, { name: 'createSupportPage' })(
  ({ createSupportPage }) => (
    <AdminFormModal
      form={SupportPageForm}
      modalProps={{ title: 'Create a FAQ article' }}
      validationSchema={validationSchema}
      buttonProps={{ icon: 'plus', label: 'Add' }}
      handleSubmit={({ closeModal }) => async (values, { setSubmitting }) => {
        try {
          await createSupportPage({
            variables: { input: values },
            refetchQueries: [{ query: supportPages }]
          })
          message.success('Succesfully created FAQ article')
          closeModal()
        } catch (e) {
          message.error(e)
        }
        setSubmitting(false)
      }}
    />
  )
)
