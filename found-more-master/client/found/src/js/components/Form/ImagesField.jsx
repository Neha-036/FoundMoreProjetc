import React, { Component } from 'react'
import { Upload, Icon } from 'antd'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: []
    }
  }
  componentDidMount() {
    if (this.props.field.value) this.transformFileList()
  }
  UNSAFE__componentWillReceiveProps() {
    if (this.props.field.value) this.transformFileList()
  }
  handleChange({ file }) {
    this.props.form.setFieldValue(
      this.props.field.name,
      this.props.field.value ? this.props.field.value.concat(file) : [file]
    )
  }
  handleRemove(file) {
    const objectOrFile = file => {
      if (file.fromServer) {
        return this.props.field.value.filter(i => i.id !== file.uid)
      }
      return this.props.field.value.filter(i => i !== file)
    }
    this.props.form.setFieldValue(this.props.field.name, objectOrFile(file))
  }
  transformFileList() {
    const images = this.props.field.value.map(file => {
      if (file.location && file.id && file.originalName) {
        return {
          uid: file.id,
          name: file.originalName,
          url: file.location,
          status: 'done',
          fromServer: true
        }
      }
      file.url = URL.createObjectURL(file) // eslint-disable-line
      return file
    })
    this.setState({ images })
  }
  render() {
    return (
      <React.Fragment>
        <Upload.Dragger
          multiple
          listType="picture"
          fileList={this.state.images}
          onRemove={e => this.handleRemove(e)}
          customRequest={e => this.handleChange(e)}
          accept="image/png, image/jpeg"
        >
          <p>
            <Icon type="inbox" />
          </p>
          <p>Click or drag file to this area to upload</p>
          <p>
            Support for a single or bulk upload. Strictly prohibit from
            uploading company data or other band files
          </p>
        </Upload.Dragger>
      </React.Fragment>
    )
  }
}
