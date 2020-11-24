import React from 'react'
import { Form, Select, Spin } from 'antd'

export default ({
  field: { name, value },
  form,
  formItemProps,
  options,
  loading,
  label,
  disabled
}) => (
  <Form.Item {...formItemProps}>
    <Select
      disabled={disabled}
      onChange={ids => {
        ids.forEach(id => {
          if (!(value?.connect || []).some(item => item.id === id))
            form.setFieldValue(`${name}.connect`, [
              ...(value?.connect || []),
              { id }
            ])
        })
      }}
      notFoundContent={loading ? <Spin size="small" /> : null}
      showSearch
      value={
        value?.connect &&
        value?.connect?.length &&
        value.connect
          .filter(
            ({ id }) => !(value?.disconnect || []).some(item => item.id === id)
          )
          .map(({ id }) => id)
      }
      mode="multiple"
      onDeselect={id => {
        form.setFieldValue(`${name}.disconnect`, [
          ...(value?.disconnect || []),
          { id }
        ])
      }}
      filterOption={(input, option) =>
        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {!loading &&
        (options || []).map(opt => (
          <Select.Option key={opt.id} value={opt.id}>
            {label(opt)}
          </Select.Option>
        ))}
    </Select>
  </Form.Item>
)
