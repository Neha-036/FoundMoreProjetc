import React from 'react'
import { Form, Collapse } from 'antd'
import * as Yup from 'yup'
import { Field, FastField } from 'formik'
import { Query } from 'react-apollo'
import brands from 'Common/graphql/queries/brands.graphql'
import languages from 'Common/graphql/queries/languages.graphql'
import gql from 'graphql-tag'
import {
  TextInput,
  SelectInput,
  SelectMultiInput,
  TextArea,
  FilesInput,
  ImageField
} from '@/components/FormItems'
import AddressFormFragment, {
  adminAddressValidationSchema
} from '../fragments/address'
import { formItemLayout } from '@/constants'

const users = gql`
  query Users($where: UserWhereInput) {
    users(where: $where) {
      id
      firstName
      lastName
    }
  }
`

const StoreForm = ({ mode }) => ({
  form: props => {
    const { values } = props
    return (
      <Form layout="horizontal">
        <h3>Store details</h3>
        <FastField
          name="name"
          formItemProps={{ label: 'Name', ...formItemLayout }}
          component={TextInput}
        />
        <FastField
          name="type"
          formItemProps={{ label: 'Type', ...formItemLayout }}
          component={TextInput}
        />
        <FastField
          name="storeNumber"
          formItemProps={{ label: 'Store Number', ...formItemLayout }}
          component={TextInput}
        />
        <FastField
          name="note"
          formItemProps={{ label: 'Note', ...formItemLayout }}
          component={TextArea}
        />
        <Query query={languages}>
          {({ loading, data }) => (
            <Field
              loading={loading}
              formItemProps={{ label: 'Language', ...formItemLayout }}
              name="language.connect.id"
              component={SelectInput}
              options={data.languages}
              valueIndex="id"
              labelIndex="isoCode"
            />
          )}
        </Query>
        <Query query={brands}>
          {({ loading, data }) => (
            <Field
              loading={loading}
              formItemProps={{ label: 'Brand', ...formItemLayout }}
              name="brand.connect.id"
              component={SelectInput}
              options={data.brands}
              valueIndex="id"
              labelIndex="name"
            />
          )}
        </Query>
        <Query
          query={users}
          variables={{ where: { brand: { id: values.brand?.connect?.id } } }}
        >
          {({ error, loading, data }) =>
            !error && (
              <Field
                disabled={values.brand?.connect?.id === null}
                loading={loading}
                formItemProps={{ label: 'Users', ...formItemLayout }}
                name="users"
                component={SelectMultiInput}
                options={data.users}
                label={({ firstName, lastName }) => `${firstName} ${lastName}`}
              />
            )
          }
        </Query>
        <AddressFormFragment
          prefix={mode === 'update' ? 'address.update' : 'address.create'}
          formItemLayout={formItemLayout}
        />
        <Collapse>
          <Collapse.Panel header="Delivery Address">
            <AddressFormFragment
              prefix={
                mode === 'update'
                  ? 'deliveryAddress.update'
                  : 'deliveryAddress.create'
              }
              formItemLayout={formItemLayout}
            />
          </Collapse.Panel>
        </Collapse>
        <FastField
          name="email"
          formItemProps={{ label: 'Email', ...formItemLayout }}
          component={TextInput}
        />
        <FastField
          name="contactPerson"
          formItemProps={{ label: 'Contact person', ...formItemLayout }}
          component={TextInput}
        />
        <FastField
          name="contactEmail"
          formItemProps={{ label: 'Contact email', ...formItemLayout }}
          component={TextInput}
        />
        <Field
          name="image.update"
          uploadsKey="image"
          formItemProps={{ label: 'Image' }}
          component={ImageField}
        />
        <Field
          name="files.update"
          formItemProps={{ label: 'Files' }}
          component={FilesInput}
        />
      </Form>
    )
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Store name is required'),
    storeNumber: Yup.string().required('Store number is required'),
    brand: Yup.object().shape({
      connect: Yup.object().shape({
        id: Yup.string().required('Brand is required')
      })
    }),
    language: Yup.object().shape({
      connect: Yup.object().shape({
        id: Yup.string().required('Language is required')
      })
    }),
    address: Yup.object()
      .shape({
        [mode]: adminAddressValidationSchema
      })
      .nullable()
  })
})

export default StoreForm
