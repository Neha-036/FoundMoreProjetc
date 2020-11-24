import React, { Component } from 'react'
import { Upload, Icon } from 'antd'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      files: []
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
      if (file.url && file.uid && file.name) {
        return this.props.field.value.filter(i => i.id !== file.uid)
      }
      return this.props.field.value.filter(i => i !== file)
    }
    this.props.form.setFieldValue(this.props.field.name, objectOrFile(file))
  }
  transformFileList() {
    const files = this.props.field.value.map(file => {
      if (file.location && file.id && file.originalName) {
        return {
          uid: file.id,
          name: file.originalName,
          url: file.location,
          status: 'done'
        }
      }
      return file
    })
    this.setState({ files })
  }
  render() {
    return (
      <React.Fragment>
        <Upload.Dragger
          multiple
          customRequest={e => this.handleChange(e)}
          fileList={this.state.files}
          onRemove={e => this.handleRemove(e)}
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
