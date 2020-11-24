import React from 'react'
import Input from '@/components/fragments/input'
import { object, string } from 'yup'
import Select from '@/components/fragments/select'
import ROLES_QUERY from 'Common/graphql/queries/roles.graphql'
import gql from 'graphql-tag'

const BRAND_QUERY = gql`
query SupportQuery {
  brand(where: {domain: "${window.location.hostname.split('.')[0]}"}) {
    id
    stores {
      name
      id
    }
  }
}
`

const UserForm = mode => ({
  form: props => {
    if (mode === 'update') {
      return (
        <>
          <Input name="firstName" label="First Name" />
          <Input name="lastName" label="Last Name" />
          <Input name="phoneNumber" label="Phone" />
          <Input name="email" label="Email" type="email" />
          <Select
            value={props?.values?.role}
            handleChange={props.setFieldValue}
            name="role"
            label="Roles"
            query={ROLES_QUERY}
            optionsGetter={roles => roles.roles}
          />
          <Select
            value={props?.values?.stores}
            handleChange={props.setFieldValue}
            name="stores"
            label="Stores"
            isMulti
            query={BRAND_QUERY}
            optionsGetter={brand => brand.brand.stores}
          />
        </>
      )
    }
    if (mode === 'create') {
      return (
        <>
          <Input name="firstName" label="First Name" />
          <Input name="lastName" label="Last Name" />
          <Input name="phoneNumber" label="Phone" />
          <Input name="email" label="Email" type="email" />
          <Select
            value={props.values.role}
            handleChange={props.setFieldValue}
            name="role"
            label="Roles"
            query={ROLES_QUERY}
            optionsGetter={roles => roles.roles}
          />
          <Select
            value={props?.values?.stores}
            handleChange={props.setFieldValue}
            name="stores"
            label="Stores"
            isMulti
            query={BRAND_QUERY}
            optionsGetter={brand => brand.brand.stores}
          />
        </>
      )
    }
  },
  validationSchema: object().shape({
    firstName: string().required(),
    lastName: string().required(),
    email: string()
      .email()
      .required()
  }),
  removeData: (values, initialValues) => {
    const storesObject = {}
    // stores that weren't in initialValues but are in values
    const intialStoresIds = initialValues.stores
      ? initialValues.stores.map(s => s.id)
      : []
    const storesIds = values.stores ? values.stores.map(s => s.id) : []

    const connectStores = values.stores
      ? values.stores
          .filter(store => {
            return !~intialStoresIds.indexOf(store.id)
          })
          .map(s => {
            return {
              id: s.id
            }
          })
      : []
    // stores that were in intialValues but aren't in values anymore

    if (mode === 'update') {
      const disconnectStores = initialValues.stores
        ? initialValues.stores
            .filter(store => {
              return !~storesIds.indexOf(store.id)
            })
            .map(s => {
              return {
                id: s.id
              }
            })
        : []

      if (disconnectStores.length) {
        storesObject.disconnect = [...disconnectStores]
      }
    }

    const { role, stores, brand, __typename, ...rest } = values
    const newRole = { connect: { id: role.id } }

    if (connectStores.length) {
      storesObject.connect = connectStores
    }

    const newBrand = { connect: { id: brand.id } }

    return {
      role: newRole,
      brand: newBrand,
      stores: storesObject,
      ...rest
    }
  }
})

export default UserForm
