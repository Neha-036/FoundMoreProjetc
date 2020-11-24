import React from 'react'
import { Input } from 'antd'

export default ({
  field: { name, onBlur, value },
  form: { setFieldValue },
  ...props
}) => (
  <Input
    {...props}
    name={name}
    value={value}
    onBlur={onBlur}
    onChange={e =>
      setFieldValue(
        name,
        e.target.value === '' && props.type === 'number' ? null : e.target.value
      )
    }
  />
)
