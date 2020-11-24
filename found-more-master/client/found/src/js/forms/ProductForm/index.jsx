import React from 'react'
import { Form } from 'antd'
import { Field } from 'formik'
import { TextInput, NumberInput, SelectInput } from '@/components/FormItems'
import languages from 'Common/graphql/queries/languages.graphql'
import PropertiesFormFragment, {
  propertiesValidationSchema
} from '../fragments/properties'
import * as Yup from 'yup'
import { Query } from 'react-apollo'

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 }
}

/**
 * @param {Object} props
 * @param {('update'|'create')} props.mode - The mode you are using this form
 * @return {import('@/jsdoc').FormObject}
 */

const ProductForm = ({ mode }) => {
  return {
    form: () => (
      <Form layout="horizontal">
        <Field
          name={
            mode === 'update'
              ? 'properties.update.name'
              : 'properties.create.name'
          }
          formItemProps={{ label: 'Name', ...formItemLayout }}
          component={TextInput}
        />
        <Field
          name="stock"
          formItemProps={{ label: 'Stock', ...formItemLayout }}
          component={NumberInput}
        />
        <Query query={languages}>
          {({ loading, data }) => (
            <Field
              loading={loading}
              formItemProps={{ label: 'Language', ...formItemLayout }}
              name={
                mode === 'update'
                  ? 'properties.update.language.connect.id'
                  : 'properties.create.language.connect.id'
              }
              component={SelectInput}
              options={data.languages}
              valueIndex="id"
              labelIndex="isoCode"
            />
          )}
        </Query>
        <PropertiesFormFragment mode={mode} formItemLayout={formItemLayout} />
      </Form>
    ),
    validationSchema: Yup.object().shape({
      properties: Yup.object().shape({
        [mode]: propertiesValidationSchema
      })
    })
  }
}

export default ProductForm
