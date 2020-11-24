import React, { useEffect, useState } from 'react'
import ReactSelect from 'react-select'
import InputLabel from '../inputlabel'
import { useQuery } from 'react-apollo'
import styled from 'styled-components'

const Button = styled.button`
  text-align: right;
  background-color: #1c9ad6;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  margin-left: 15px;
`

const Select = ({
  name,
  label,
  value,
  handleChange,
  isMulti,
  query,
  optionsGetter
}) => {
  const [options, setOptions] = useState([])

  const { loading, data, error } = useQuery(query)

  useEffect(() => {
    const onCompleted = data => {
      setOptions(optionsGetter(data))

      if (isMulti) {
        const arrayOfSelectedOptions =
          value &&
          optionsGetter(data).filter(item => {
            return value.find(i => i.id === item.id)
          })
        arrayOfSelectedOptions && handleChange(name, arrayOfSelectedOptions)
      } else {
        const selectedOption =
          value &&
          optionsGetter(data).find(item => {
            return item.id === value.id
          })
        selectedOption && handleChange(name, selectedOption)
      }
    }
    const onError = error => {
      /* magic */
    }
    if (onCompleted || onError) {
      if (onCompleted && !loading && !error) {
        onCompleted(data)
      } else if (onError && !loading && error) {
        onError(error)
      }
    }
  }, [loading, data, error])

  const customControlStyles = base => ({
    maxHeight: 250,
    marginTop: 5,
    marginBottom: 20,
    overflow: 'scroll'
  })

  return (
    <>
      {label && (
        <InputLabel style={{ display: 'inline-block' }}>{label}</InputLabel>
      )}
      {isMulti && (
        <Button onClick={() => handleChange(name, optionsGetter(data))}>
          Select all
        </Button>
      )}
      <ReactSelect
        styles={{ control: customControlStyles }}
        value={value}
        isMulti={isMulti}
        isSearchable={isMulti}
        getOptionLabel={option => option.name}
        getOptionValue={option => option.id}
        onChange={option => {
          const connect = isMulti
            ? option !== null
              ? option.map(o => {
                  return {
                    id: o.id,
                    name: o.name
                  }
                })
              : []
            : { id: option.id, name: option.name }
          handleChange(name, connect)
        }}
        options={options}
      />
    </>
  )
}

export default Select
