import React from 'react'
import { useField } from 'formik'
import Select from 'react-select'

const MultiSelect = ({ name, options }) => {
  const [field, form] = useField(name)
  return (
    <Select
      isMulti
      options={options}
      defaultValue={field.value}
      onChange={e => console.log(e)}
    />
  )
}

export default MultiSelect
