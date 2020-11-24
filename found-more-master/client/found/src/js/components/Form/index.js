import React from 'react'
import { Formik, FastField } from 'formik'
import { Form, Button } from 'antd'
import { FormModal } from '@/components'
import { matcher } from '@/utils'
import ColorField from './ColorField'
import SelectField from './SelectField'
import InputField from './InputField'
import ImageField from './ImageField'
import FilesField from './FilesField'
import ImagesField from './ImagesField'
import TextArea from './TextArea'

const componentSwitcher = type => {
  switch (type) {
    case 'select':
      return SelectField
    case 'color':
      return ColorField
    case 'image':
      return ImageField
    case 'images':
      return ImagesField
    case 'files':
      return FilesField
    case 'textArea':
      return TextArea
    default:
      return InputField
  }
}

const formLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 }
}

const FormGenerator = ({
  initialValues,
  layout,
  inModal,
  onValueChange,
  ...props
}) => (
  <Formik
    {...props}
    validationSchema={layout.validationSchema}
    enableReinitialize
    initialValues={initialValues}
    render={({ errors, values, touched, handleSubmit, isSubmitting }) => {
      const id = (values && values.id) || 'form'
      const FormContent = (
        <Form id={id} onSubmit={handleSubmit}>
          {Object.entries(layout.fields).map((input, i) => {
            const FormItemContent = (inputField, fieldProps) => (
              <Form.Item
                {...formLayout}
                key={inputField}
                label={fieldProps.placeholder}
                hasFeedback
                validateStatus={
                  (matcher(inputField, values) &&
                    !matcher(inputField, errors) &&
                    'success') ||
                  (matcher(inputField, errors) &&
                    matcher(inputField, touched) &&
                    'error') ||
                  ''
                }
                help={
                  matcher(inputField, touched) && matcher(inputField, errors)
                }
              >
                <FastField
                  {...props}
                  {...fieldProps}
                  id={`${id}${i}`}
                  name={inputField}
                  component={componentSwitcher(fieldProps.type)}
                />
              </Form.Item>
            )
            return FormItemContent(input[0], input[1])
          })}
          <Form.Item>
            {layout.submitButton && (
              <Button
                htmlType="submit"
                form={id}
                style={{ width: layout.submitButton.width || '' }}
                type={layout.submitButton.type || 'primary'}
                disabled={
                  isSubmitting ||
                  (Object.keys(errors).length > 0 &&
                    Object.keys(touched).length > 0)
                }
              >
                {layout.submitButton.label || 'Submit'}
              </Button>
            )}
          </Form.Item>
        </Form>
      )
      if (inModal) {
        return (
          <FormModal
            {...inModal}
            errors={errors}
            formId={id}
            confirmLoading={isSubmitting}
            okButtonDisabled={isSubmitting || Object.keys(errors).length > 0}
            handleSubmit={handleSubmit}
          >
            {FormContent}
          </FormModal>
        )
      }
      return FormContent
    }}
  />
)

export default FormGenerator
