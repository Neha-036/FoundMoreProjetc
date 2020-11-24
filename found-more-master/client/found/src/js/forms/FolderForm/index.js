import React from 'react'
import * as Yup from 'yup'
import { Form } from 'antd'
import { Field } from 'formik'
import { Query } from 'react-apollo'
import brands from 'Common/graphql/queries/brands.graphql'
import {
  TextInput,
  SelectInput,
  ImageField,
  DateField
} from '@/components/FormItems'
import { propertiesValidationSchema } from '../fragments/properties'

const brand = Yup.object().shape({
  connect: Yup.object().shape({
    id: Yup.string().required('Brand is required')
  })
})

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 }
}

/**
 *
 * @param {Object} props
 * @param {('create'|'update')} props.mode
 * @param {Boolean} props.isRoot
 * @return {import('@/jsdoc').FormObject}
 */

const FolderForm = ({ mode, isRoot }) => ({
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
      <Form.Item label="Visible" {...formItemLayout}>
        <Field
          name="visibleFrom"
          fieldProps={{ placeholder: 'From' }}
          component={DateField}
        />
        <Field
          name="visibleUntil"
          fieldProps={{ placeholder: 'Until' }}
          component={DateField}
        />
      </Form.Item>
      {isRoot && (
        <Query query={brands}>
          {({ loading, data }) => (
            <Field
              name="brand.connect.id"
              loading={loading}
              formItemProps={{ label: 'Brand', ...formItemLayout }}
              labelIndex="name"
              valueIndex="id"
              options={data.brands}
              component={SelectInput}
            />
          )}
        </Query>
      )}
      <Field
        uploadsKey="images"
        name={
          mode === 'update'
            ? 'properties.update.images.initial[0]'
            : 'properties.create.images.initial[0]'
        }
        component={ImageField}
      />
    </Form>
  ),
  validationSchema: Yup.object().shape({
    properties: Yup.object().shape({
      [mode]: propertiesValidationSchema
    }),
    brand
  })
})

export default FolderForm
