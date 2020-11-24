import React from 'react'
import { Formik } from 'formik'
import styled from 'styled-components'
import Button from '../../fragments/button'
import Input from '../../fragments/input'
import InputLabel from '../../fragments/inputlabel'

export const Innerdiv = styled.div`
  & > label {
    color: ${({ theme }) => theme.colorText};
  }
`

const setEmptyInitialValues = fields => {
  const values = {}
  Object.keys(fields).forEach(field => {
    values[field] = ''
  })
  return values
}

const Form = styled.form`
  height: 100%;
  & > button {
    max-width: 100%;
  }
`

const FormGenerator = ({
  initialValues,
  layout,
  buttonIsStickyToBottom,
  buttonIsRight,
  ...props
}) => (
  <Formik
    validationSchema={layout.validationSchema}
    {...props}
    initialValues={initialValues || setEmptyInitialValues(layout.fields)}
    render={({
      errors,
      values,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting
    }) => (
      <Form
        onSubmit={handleSubmit}
        onChange={props.type === 'checkbox' ? handleSubmit : handleChange}
      >
        {Object.entries(layout.fields).map(input => (
          <Innerdiv key={input[0]}>
            <InputLabel {...props}>{input[1].label}</InputLabel>
            <Input
              {...props}
              type={input[1].type || 'text'}
              value={values[input[0]] || ''}
              checked={values[input[0]]}
              name={input[0]}
              error={errors[input[0]] && touched[input[0]] && errors[input[0]]}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={input[1].placeholder}
            />
          </Innerdiv>
        ))}
        {props.type !== 'checkbox' && (
          <Button
            isStickyToBottom={buttonIsStickyToBottom}
            isRight={buttonIsRight}
            type="submit"
            disabled={
              isSubmitting ||
              (Object.keys(errors).length > 0 &&
                Object.keys(touched).length > 0)
            }
          >
            {layout.submitLabel}
          </Button>
        )}
      </Form>
    )}
  />
)

export default FormGenerator
