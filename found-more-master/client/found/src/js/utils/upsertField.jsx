import React from 'react'
import { Field } from 'formik'

const UpsertField = props => {
  const { component: Component, name, subName, render, ...restProps } = props

  return (
    <Field
      name={name}
      render={
        render
          ? render
          : fieldProps => (
              <Component
                {...fieldProps}
                {...restProps}
                field={{
                  ...fieldProps.field,
                  value:
                    fieldProps.field?.value?.upsert?.update[subName] ||
                    fieldProps.field?.value?.upsert?.create[subName],
                  onChange: e => {
                    fieldProps.form.setFieldValue(
                      `${name}.upsert.create.${subName}`,
                      e
                    )
                    fieldProps.form.setFieldValue(
                      `${name}.upsert.update.${subName}`,
                      e
                    )
                  }
                }}
              />
            )
      }
    />
  )
}

export default UpsertField
