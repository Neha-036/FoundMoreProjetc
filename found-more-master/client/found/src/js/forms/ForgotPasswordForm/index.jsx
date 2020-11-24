import React from 'react'
import * as Yup from 'yup'
import { Icon, Form } from 'antd'
import { Field } from 'formik'
import { TextInput } from '@/components/FormItems'

export default {
  form: () => (
    <Form layout="horizontal">
      <Field
        name="email"
        component={TextInput}
        fieldProps={{
          prefix: <Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />
        }}
      />
    </Form>
  ),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Please, fill in a valid email')
      .required('Please, fill in your email')
  })
}
