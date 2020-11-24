import React from 'react'
import { Form } from 'antd'
import { Query } from 'react-apollo'
import { Field } from 'formik'
import brands from 'Common/graphql/queries/brands.graphql'
import { TextInput, SelectInput } from '@/components/FormItems'
import * as Yup from 'yup'

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

const ProductCategoryForm = ({ mode, isRoot }) => {
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
      </Form>
    ),
    validationSchema: Yup.object().shape({
      properties: Yup.object().shape({
        [mode]: Yup.object().shape({
          name: Yup.string().required('Name is required.')
        })
      })
    })
  }
}

export default ProductCategoryForm
