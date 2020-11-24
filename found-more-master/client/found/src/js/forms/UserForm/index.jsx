import React from 'react'
import * as Yup from 'yup'
import { Form } from 'antd'
import roles from 'Common/graphql/queries/roles.graphql'
import brands from 'Common/graphql/queries/brands.graphql'
import { FastField, Field } from 'formik'
import { Query } from 'react-apollo'
import { TextInput, SelectInput } from '@/components/FormItems'
import { formItemLayout } from '@/constants'
import StoreTransfer from './storeTransfer'

const UserForm = ({ mode }) => ({
  form: ({ values }) => (
    <Form layout="horizontal">
      <h3>User details</h3>
      <FastField
        name="email"
        formItemProps={{ label: 'Email', ...formItemLayout }}
        component={TextInput}
      />
      <FastField
        name="firstName"
        formItemProps={{ label: 'First name', ...formItemLayout }}
        component={TextInput}
      />
      <FastField
        name="lastName"
        formItemProps={{ label: 'Last Name', ...formItemLayout }}
        component={TextInput}
      />
      <h3>System details</h3>
      <Query query={brands} variables={{ where: { deletedAt: null } }}>
        {({ loading, data }) => (
          <Field
            name="brand.connect.id"
            render={props => (
              <SelectInput
                {...props}
                form={{
                  ...props.form,
                  setFieldValue: (name, value) => {
                    props.form.setFieldValue(name, value)
                    if (props.form?.values?.stores?.connect)
                      props.form.setFieldValue('stores.connect', [])
                    if (
                      props.form?.values?.stores?.disconnect ||
                      props.form?.values?.stores?.initial
                    )
                      if (!!props.form?.values?.stores?.initial?.length)
                        props.form.setFieldValue(
                          'stores.disconnect',
                          props.form.values.stores.initial.map(store => ({
                            id: store.id
                          }))
                        )
                      else props.form.setFieldValue('stores.disconnect', [])
                  }
                }}
                options={data.brands}
                labelIndex="name"
                valueIndex="id"
                formItemProps={{ label: 'Brand', ...formItemLayout }}
                loading={loading}
              />
            )}
          />
        )}
      </Query>
      <Query query={roles}>
        {({ loading, data }) => (
          <Field
            name="role.connect.id"
            loading={loading}
            formItemProps={{ label: 'Role', ...formItemLayout }}
            valueIndex="id"
            labelIndex="name"
            options={data.roles}
            component={SelectInput}
          />
        )}
      </Query>
      <h3>Stores</h3>
      <Field name="stores" component={StoreTransfer} />
    </Form>
  ),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Please fill in a valid email address')
      .required('Email is required'),
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    brand: Yup.object().shape({
      connect: Yup.object().shape({
        id: Yup.string().required('Brand is required')
      })
    }),
    role: Yup.object().shape({
      connect: Yup.object().shape({
        id: Yup.string().required('Role is required')
      })
    })
  })
})

export default UserForm
