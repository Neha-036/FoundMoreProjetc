import React, { useCallback } from 'react'
import styled from 'styled-components'
import { get } from 'lodash'
import Dropzone from 'react-dropzone'
import { Form } from 'antd'

const Wrapper = styled.div`
  height: 300px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  background: linear-gradient(
      rgba(160, 230, 230, 0.5),
      rgba(230, 230, 230, 0.5)
    ),
    ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: inherit;
    height: inherit;
  }
`

export default ({ field, form, uploadsKey, formItemProps }) => {
  const isArray = field.name[field.name.length - 1] === ']'
  const handleFileDrop = useCallback(
    acceptedFiles => {
      if (field.value) {
        const deletePath = field.name.replace(/([^.]*)$/, 'delete')
        if (isArray) {
          const toBeDeleted = get(
            form.values,
            field.name.replace(/(\[.*\])/, '')
          ).map(image => ({ id: image.id }))
          form.setFieldValue(deletePath, toBeDeleted)
        }
      }
      form.setFieldValue(
        `uploads[${uploadsKey}]`,
        isArray ? acceptedFiles : acceptedFiles[0]
      )
    },
    [form, field]
  )
  const getPreview = () => {
    if (form.values.uploads) {
      if (form.values.uploads[uploadsKey]) {
        return URL.createObjectURL(
          isArray
            ? form.values.uploads[uploadsKey][0]
            : form.values.uploads[uploadsKey]
        )
      }
    }
    if (field.value) {
      return field.value.location
    }
    return null
  }
  return (
    <Form.Item {...formItemProps}>
      <Dropzone onDrop={handleFileDrop}>
        {({ getRootProps, getInputProps }) => (
          <Wrapper image={getPreview()}>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag drop some files here, or click to select files</p>
            </div>
          </Wrapper>
        )}
      </Dropzone>
    </Form.Item>
  )
}
