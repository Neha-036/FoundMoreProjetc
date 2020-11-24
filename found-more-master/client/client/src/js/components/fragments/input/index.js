import React from 'react'
import styled from 'styled-components'
import { useField } from 'formik'
import InputLabel from '../inputlabel'

const TextInput = styled.input`
  font-family: ${({ theme }) => theme.fontNormal};
  display: block;
  margin-bottom: 10px;
  background: none;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colorText};
  width: 100%;
  &:focus {
    outline: none;
    color: ${({ theme }) => theme.colorPrimary} !important;
    border-bottom: 2px solid ${({ theme }) => theme.colorPrimary};
  }
  height: 2em;
  font-size: ${({ fontSize }) => fontSize || '15pt'};
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 33px white inset;
  }
`

const InputFeedback = styled.div`
  font-family: ${({ theme }) => theme.fontNormal};
  color: ${({ theme }) => theme.colorPrimary};
  margin-bottom: 15px;
`

const Input = ({ name, label, ...props }) => {
  const [field, form] = useField(name)
  return (
    <div>
      {label && <InputLabel>{label}</InputLabel>}
      <TextInput {...field} value={field.value || ''} {...props} />
      <InputFeedback {...props}>{form.touched && form.error}</InputFeedback>
    </div>
  )
}

export default Input
