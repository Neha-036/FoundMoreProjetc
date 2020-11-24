import React from 'react'
import { Form, Select, Spin } from 'antd'
import { isTouchedAndErrors } from './helpers'

export default ({
  field: { name, value, onChange, onBlur },
  form: { setFieldValue, touched, errors },
  formItemProps,
  fieldProps,
  options,
  labelIndex,
  valueIndex,
  loading,
  customOnChange,
  ...props
}) => (
  <Form.Item
    {...formItemProps}
    hasFeedback
    help={isTouchedAndErrors(touched, errors, name)}
    validateStatus={isTouchedAndErrors(touched, errors, name) && 'error'}
  >
    <Select
      {...props}
      {...fieldProps}
      onChange={customOnChange ? onChange : e => setFieldValue(name, e)}
      onBlur={onBlur}
      notFoundContent={loading ? <Spin size="small" /> : null}
      value={value && typeof value === 'object' ? value[valueIndex] : value}
      showSearch
      filterOption={(input, option) =>
        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {!loading &&
        options.map(opt => (
          <Select.Option key={opt[valueIndex]} value={opt[valueIndex]}>
            {typeof labelIndex === 'function'
              ? labelIndex(opt)
              : opt[labelIndex]}
          </Select.Option>
        ))}
    </Select>
  </Form.Item>
)
