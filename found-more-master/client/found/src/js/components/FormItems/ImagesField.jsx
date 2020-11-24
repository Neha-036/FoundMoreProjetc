import React, { useCallback } from 'react'
import styled from 'styled-components'
import { get } from 'lodash'
import Dropzone from 'react-dropzone'
import { Form, Icon, Popconfirm } from 'antd'

const Wrapper = styled.div`
  height: 100px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: inherit;
    height: inherit;
  }
`

const PreviewImagesWrapper = styled.div`
  margin-top: 10px;
  display: flex;
`

const PreviewImage = styled.div`
  position: relative;
  background-color: white;
  flex: 0 1 33%;
  display: flex;
  border-radius: 5px;
  border: solid 1px #d3d3d3;
  width: 20%;
  overflow: hidden;
  &:not(:last-of-type) {
    margin-right: 10px;
  }
`

const DeleteOverlay = styled.div`
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  left: 0;
  opacity: 0;
  display: flex;
  bottom: 0;
  transition: all 100ms ease-in-out;
  &:hover {
    opacity: 1;
    background-color: #1890ffe6;
  }
`

const renderImage = removeImage => (file, i) => {
  return (
    <PreviewImage key={i}>
      <Popconfirm
        title="Are you sure delete this image?"
        onConfirm={() => removeImage(i)}
      >
        <DeleteOverlay>
          <Icon type="delete" style={{ color: 'white' }} />
        </DeleteOverlay>
      </Popconfirm>
      <img
        key={i}
        width="100%"
        src={
          file instanceof File ? URL.createObjectURL(file) : file.data.location
        }
      />
    </PreviewImage>
  )
}

export default ({ field, form, uploadsKey, formItemProps }) => {
  const handleFileDrop = useCallback(
    acceptedFiles => {
      form.setFieldValue(
        `uploads[${uploadsKey}][${form.values?.uploads?.[uploadsKey]?.length ||
          0}]`,
        ...acceptedFiles
      )
    },
    [form, field]
  )
  /**
   *
   * @param {('create'|'update')} mode - From where are you deleting, create or update?
   * @param {number} index - The index of the image in the array.
   */
  const removeImage = (mode, index) => {
    if (mode === 'create') {
      return form.setFieldValue(
        `uploads[${uploadsKey}]`,
        form.values.uploads[uploadsKey].filter((_, i) => i !== index)
      )
    }
    const deletePath = field.name.replace(/([^.]*)$/, 'delete')
    form.setFieldValue(deletePath, [
      ...get(form.values, deletePath, []),
      { id: field.value[index].where.id }
    ])
    form.setFieldValue(field.name, field.value.filter((_, i) => i !== index))
  }
  return (
    <Form.Item {...formItemProps}>
      <Dropzone onDrop={handleFileDrop}>
        {({ getRootProps, getInputProps }) => (
          <Wrapper>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag drop some files here, or click to select files</p>
            </div>
          </Wrapper>
        )}
      </Dropzone>
      <PreviewImagesWrapper>
        {field?.value?.map(renderImage(index => removeImage('update', index)))}
        {form?.values?.uploads?.[uploadsKey]?.map(
          renderImage(index => removeImage('create', index))
        )}
      </PreviewImagesWrapper>
    </Form.Item>
  )
}
