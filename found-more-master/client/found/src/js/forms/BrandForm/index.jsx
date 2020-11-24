import React from 'react'
import * as Yup from 'yup'
import { Form } from 'antd'
import users from 'Common/graphql/queries/users.graphql'
import { Field } from 'formik'
import { Query } from 'react-apollo'
import {
  TextInput,
  ColorInput,
  SelectInput,
  ImageField
} from '@/components/FormItems'
import AddressFormFragment, {
  adminAddressValidationSchema
} from '../fragments/address'
import { formItemLayout } from '@/constants'

const BrandForm = ({ mode }) => ({
  form: props => (
    <Form layout="horizontal">
      <h3>Brand details</h3>
      <Field
        name="name"
        formItemProps={{ label: 'Name', ...formItemLayout }}
        component={TextInput}
      />
      <Field
        name="domain"
        formItemProps={{ label: 'Domain', ...formItemLayout }}
        component={TextInput}
      />
      {props.values.id && (
        <Query
          query={users}
          variables={{
            where: {
              AND: [
                {
                  OR: [
                    { brand: { id: props.values.id } },
                    { role: { name: 'admin' } }
                  ],
                  deletedAt: null
                }
              ]
            }
          }}
        >
          {({ loading, data }) => (
            <Field
              name="contactPerson.connect.id"
              loading={loading}
              formItemProps={{ label: 'Contact Person', ...formItemLayout }}
              valueIndex="id"
              labelIndex={opt => `${opt.firstName} ${opt.lastName}`}
              options={data.users}
              component={SelectInput}
            />
          )}
        </Query>
      )}
      <AddressFormFragment
        prefix={mode === 'update' ? 'address.update' : 'address.create'}
        formItemLayout={formItemLayout}
      />
      <h3>Personalization</h3>
      <Field
        formItemProps={{ label: 'Primary Color', ...formItemLayout }}
        name="primaryColor"
        component={ColorInput}
      />
      <Field
        formItemProps={{ label: 'Secondary Color', ...formItemLayout }}
        name="secondaryColor"
        component={ColorInput}
      />
      <Field
        formItemProps={{ label: 'Text Color', ...formItemLayout }}
        name="textColor"
        component={ColorInput}
      />
      <Field
        uploadsKey="backgroundImage"
        formItemProps={{ label: 'Background Image' }}
        name="backgroundImage.update"
        component={ImageField}
      />
      <Field
        uploadsKey="logo"
        formItemProps={{ label: 'Logo' }}
        name="logo.update"
        component={ImageField}
      />
    </Form>
  ),
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Brand name is required'),
    domain: Yup.string().required('Brand domain is required'),
    address: Yup.object()
      .shape({
        [mode]: adminAddressValidationSchema
      })
      .nullable(),
    primaryColor: Yup.string().required('Primary color is required'),
    secondaryColor: Yup.string().required('Secondary color is required'),
    textColor: Yup.string().required('Text color is required')
  })
})

export default BrandForm
