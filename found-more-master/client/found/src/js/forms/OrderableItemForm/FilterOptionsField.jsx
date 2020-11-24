import React from 'react'
import { Select, Form, Tooltip } from 'antd'
import { formItemLayout } from '@/constants'
import { inject } from 'mobx-react'
import {
  applyNewFilterOption,
  undoFilterOption,
  hasVariations
} from './helpers'

const filterOptions = [
  { value: 'ONE', label: 'One' }
  // { value: 'ONE_OR_MORE', label: 'One Or More' },
  // { value: 'ZERO_OR_ONE', label: 'Zero Or One' },
  // { value: 'ZERO_OR_MORE', label: 'Zero Or More' },
  // { value: 'ALL', label: 'All' }
]

/**
 *
 * @param {import('formik').FieldProps} props
 */

const FilterOptionsField = ({ field, form, windowStore, formMode }) => {
  const mode = form.initialValues?.filterOptions?.update ? 'update' : 'create'
  const handleChange = value => {
    if (!hasVariations(form)) {
      windowStore.addConfirmation({
        title: 'Are you sure you want to create a filter option?',
        content:
          'The current elements will be converted into a varation and cannot be undone.',
        onOk: async () => {
          form.setFieldValue(field.name, { create: { type: value } })
          applyNewFilterOption({ form, mode: formMode })
        }
      })
    } else if (value === undefined) {
      windowStore.addConfirmation({
        title: 'Are you sure you want to remove the filter option?',
        content: 'All elements in this item will be deleted',
        onOk: async () => {
          undoFilterOption({ form })
          form.setFieldValue(field.name, { disconnect: true })
        }
      })
    } else if (mode === 'update')
      form.setFieldValue(field.name, {
        update: { ...field.value.update, type: value }
      })
    else {
      form.setFieldValue(field.name, { create: { type: value } })
    }
  }
  return (
    <Form.Item label="Filter Options" {...formItemLayout}>
      <Tooltip
        trigger={['focus']}
        title="Use this to create variations, for example; languages. This option specifies out of how many options a client can choose."
      >
        <Select
          allowClear
          onChange={handleChange}
          value={field.value?.[mode]?.type}
        >
          {filterOptions.map(option => (
            <Select.Option key={option.value}>{option.label}</Select.Option>
          ))}
        </Select>
      </Tooltip>
    </Form.Item>
  )
}

export default inject('windowStore')(FilterOptionsField)
