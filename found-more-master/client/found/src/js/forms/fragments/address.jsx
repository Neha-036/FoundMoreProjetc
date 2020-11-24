import React from 'react'
import { Field } from 'formik'
import { Form } from 'antd'
import { TextInput, SelectInput } from '@/components/FormItems'
import { EU_COUNTRIES } from 'Common/constants'
import * as Yup from 'yup'
export { addressValidationSchema } from 'Common/validation-schemas'

export const adminAddressValidationSchema = Yup.object().shape(
  {
    street: Yup.string().when(['number', 'city', 'postalCode', 'countryCode'], {
      is: (number, city, postalCode, countryCode) =>
        !!number || !!city || !!postalCode || !!countryCode,
      then: Yup.string().required('Street is required.')
    }),
    number: Yup.string()
      .matches(/^[\d-\D]+$/, {
        excludeEmptyString: true,
        message: 'You can only use numbers or -'
      })
      .when(['street', 'city', 'postalCode', 'countryCode'], {
        is: (street, city, postalCode, countryCode) =>
          !!street || !!city || !!postalCode || !!countryCode,
        then: Yup.string().required('Number is required.')
      }),
    city: Yup.string().when(['number', 'street', 'postalCode', 'countryCode'], {
      is: (number, street, postalCode, countryCode) =>
        !!number || !!street || !!postalCode || !!countryCode,
      then: Yup.string().required('City is required.')
    }),
    postalCode: Yup.string().when(['number', 'street', 'city', 'countryCode'], {
      is: (number, street, city, countryCode) =>
        !!number || !!street || !!city || !!countryCode,
      then: Yup.string().required('Postal code is required.')
    }),
    countryCode: Yup.string().when(['number', 'street', 'city', 'postalCode'], {
      is: (number, street, city, postalCode) =>
        !!number || !!street || !!city || !!postalCode,
      then: Yup.string().required('Country is required.')
    })
  },
  [
    ['street', 'number'],
    ['street', 'postalCode'],
    ['street', 'city'],
    ['street', 'postalCode'],
    ['street', 'countryCode'],
    ['number', 'city'],
    ['number', 'postalCode'],
    ['number', 'countryCode'],
    ['city', 'postalCode'],
    ['city', 'countryCode'],
    ['postalCode', 'countryCode']
  ]
)

export default ({ prefix, formItemLayout }) => (
  <>
    <h3>Address</h3>
    <Form.Item label="Street" {...formItemLayout} style={{ marginBottom: 0 }}>
      <Field
        formItemProps={{
          style: { display: 'inline-block', width: '55%', marginRight: '3%' }
        }}
        name={`${prefix}.street`}
        component={TextInput}
      />
      <Field
        formItemProps={{
          style: { display: 'inline-block', width: '24%', marginRight: '3%' }
        }}
        fieldProps={{ placeholder: '86-90' }}
        name={`${prefix}.number`}
        component={TextInput}
      />
      <Field
        formItemProps={{
          style: { display: 'inline-block', width: '15%' }
        }}
        fieldProps={{ placeholder: 'A' }}
        name={`${prefix}.addition`}
        component={TextInput}
      />
    </Form.Item>
    <Field
      name={`${prefix}.postalCode`}
      formItemProps={{ label: 'Postal Code', ...formItemLayout }}
      component={TextInput}
    />
    <Field
      name={`${prefix}.city`}
      formItemProps={{ label: 'City', ...formItemLayout }}
      component={TextInput}
    />
    <Field
      name={`${prefix}.countryCode`}
      formItemProps={{ label: 'Country', ...formItemLayout }}
      options={EU_COUNTRIES}
      labelIndex="name"
      valueIndex="isoCode"
      component={SelectInput}
    />
  </>
)
