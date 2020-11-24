import React from 'react'
import { Input } from 'antd'

export default ({
  field: { name, onBlur, value },
  form: { setFieldValue },
  ...props
}) => (
  <Input.TextArea
    {...props}
    value={value}
    name={name}
    onBlur={onBlur}
    onChange={e => setFieldValue(name, e.target.value)}
  />
)
