import React, { Component } from 'react'
import { Upload, Icon, Form } from 'antd'
import { isTouchedAndErrors } from './helpers'

const transformDefaultFileList = value =>
  value.map(file => ({
    uid: file.id,
    name: file.originalName,
    url: file.location,
    thumbUrl: file.location,
    status: 'done'
  }))

class FilesInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      defaultFileList: null,
      initialValues: []
    }
    this.name = this.props.field.name
    this.setFieldValue = value =>
      this.props.form.setFieldValue(this.name, value)
  }
  componentDidMount() {
    this.setState({ initialValues: this.props.field.value })
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (!prevState.defaultFileList) {
      return {
        defaultFileList: transformDefaultFileList(nextProps.field.value)
      }
    }
    return null
  }
  handleChange = ({ fileList }) => {
    const files = fileList.reduce(
      (acc, curr) => {
        if (curr.originFileObj)
          return { ...acc, create: [...acc.create, curr.originFileObj] }
        return {
          ...acc,
          remove: acc.remove.filter(item => item.id !== curr.uid)
        }
      },
      { create: [], remove: this.state.initialValues }
    )
    this.setFieldValue(files)
  }
  customRequest = ({ onSuccess, file }) => {
    setTimeout(() => onSuccess(null, file))
  }
  render() {
    const { defaultFileList } = this.state
    const { touched, errors } = this.props.field
    return (
      <Form.Item
        {...this.props.formItemProps}
        hasFeedback
        help={isTouchedAndErrors(touched, errors, this.name)}
        validateStatus={
          isTouchedAndErrors(touched, errors, this.name) && 'error'
        }
      >
        <Upload.Dragger
          onChange={this.handleChange}
          customRequest={this.customRequest}
          defaultFileList={defaultFileList}
        >
          <p>
            <Icon type="inbox" />
          </p>
          <p>Click or drag file to this area to upload</p>
        </Upload.Dragger>
      </Form.Item>
    )
  }
}

export default props => {
  if (props.field.value === undefined) {
    return null
  }
  return <FilesInput {...props} />
}
