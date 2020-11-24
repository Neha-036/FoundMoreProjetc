import React from 'react'
import { Form, InputNumber } from 'antd'
import { isTouchedAndErrors } from './helpers'

export default ({
  form: { errors, touched, setFieldValue },
  field,
  formItemProps,
  ...props
}) => (
  <Form.Item
    {...formItemProps}
    hasFeedback
    help={isTouchedAndErrors(touched, errors, field.name)}
    validateStatus={isTouchedAndErrors(touched, errors, field.name) && 'error'}
  >
    <InputNumber
      {...field}
      {...props}
      onChange={e => setFieldValue(field.name, parseInt(e || '0', 10))}
    />
  </Form.Item>
)
