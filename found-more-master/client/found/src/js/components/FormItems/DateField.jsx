import React from 'react'
import { DatePicker } from 'antd'
import * as moment from 'moment'

/**
 * DateField to use in conjunction with a Formik <Field />
 * @type {React.SFC<import('formik').FieldProps & { fieldProps: { placeholder: string }}>}
 */

const DateField = ({ form, field, fieldProps }) => {
  return (
    <DatePicker
      showTime
      format="DD-MM-YYYY HH:mm"
      placeholder={fieldProps.placeholder}
      onChange={e => form.setFieldValue(field.name, e ? e.format() : null)}
      value={field.value ? moment(field.value) : null}
    />
  )
}

export default DateField
