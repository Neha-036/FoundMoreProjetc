import React from 'react'
import { Form, Input } from 'antd'
import { isTouchedAndErrors } from './helpers'

export default ({
  form: { errors, touched },
  field,
  formItemProps,
  fieldProps
}) => (
  <Form.Item
    {...formItemProps}
    hasFeedback
    help={isTouchedAndErrors(touched, errors, field.name)}
    validateStatus={isTouchedAndErrors(touched, errors, field.name) && 'error'}
  >
    <Input {...fieldProps} {...field} />
  </Form.Item>
)
