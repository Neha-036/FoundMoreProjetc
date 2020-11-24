import React from 'react'
import Input from '@/components/fragments/input'
import Select from '@/components/fragments/select'
import styled from 'styled-components'
import gql from 'graphql-tag'

const LANGUAGES_QUERY = gql`
  query SupportQuery {
    languages {
      id
      name
    }
  }
`

const Label = styled.span`
  display: inline-block;
  margin: 20px 0 10px 0;
  text-decoration: underline;
`

const StoreForm = mode => ({
  form: props => {
    return (
      <>
        <Input name="name" placeholder="Store name" />
        <Input name="storeNumber" placeholder="Store number" />
        <Label>Address</Label>
        <Input name={`address.street`} placeholder="Street" />
        <Input name={`address.number`} placeholder="Street number" />
        <Input name={`address.city`} placeholder="City" />
        <Input name={`address.countryCode`} placeholder="Country" />
        <Input name={`address.postalCode`} placeholder="Postal Code" />
        <Input name={`contactPerson`} placeholder="Contact Person" />
        <Input name={`contactEmail`} placeholder="Contact Email" type="email" />
        <Input name={`phone`} placeholder="Phone" type="phone" />
        <Select
          value={props?.values?.language}
          handleChange={props.setFieldValue}
          name="language"
          label="Languages (Required)"
          query={LANGUAGES_QUERY}
          optionsGetter={languages => languages.languages}
        />
        <Input name={`website`} placeholder="Website" />
        <Input name={`size`} placeholder="Size" />
        <Input name={`type`} placeholder="Type" />
      </>
    )
  },
  removeData: values => {
    const { language, brand, ...rest } = values

    const newLanguage = { connect: { id: language.id } }
    const newBrand = { connect: { id: brand.id } }

    return {
      language: newLanguage,
      brand: newBrand,
      ...rest
    }
  }
})

export default StoreForm
