import React from 'react'
import { Form } from 'antd'
import * as Yup from 'yup'
import { FastField } from 'formik'
import { TextInput, TextArea } from '../../components/FormItems'

export const validationSchema = Yup.object().shape({
  title: Yup.string().required('This field is mandatory!'),
  content: Yup.string().required('This field is mandatory!')
})

export const SupportPageForm = () => (
  <Form layout="vertical">
    <FastField
      name="title"
      formItemProps={{ label: 'Title' }}
      component={TextInput}
    />
    <FastField
      name="content"
      formItemProps={{ label: 'Text' }}
      component={TextArea}
    />
  </Form>
)
