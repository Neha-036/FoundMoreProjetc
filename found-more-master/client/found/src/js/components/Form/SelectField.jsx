import React from 'react'
import { Select } from 'antd'
import { matcher } from '@/utils'

export default ({
  field: { value, name, ...field },
  options,
  valueIndex,
  decorate,
  labelIndex,
  form,
  ...props
}) => (
  <Select
    {...props}
    {...field}
    onChange={e => form.setFieldValue(name, e)}
    onBlur={e => form.setFieldTouched(name, e)}
    defaultValue={value || undefined}
    showSearch
    filterOption={(input, option) =>
      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    {options.map(option => (
      <Select.Option
        value={matcher(valueIndex, option)}
        key={matcher(valueIndex, option)}
      >
        {decorate ? decorate(option) : matcher(labelIndex, option)}
      </Select.Option>
    ))}
  </Select>
)
