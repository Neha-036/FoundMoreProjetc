import React, { Component } from 'react'
import { Upload, Icon, Form } from 'antd'
import styled from 'styled-components'

const UploadIcon = styled.div`
  width: inherit;
  height: inherit;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.3);
  display: none;
  color: white;
`

const BackgroundImage = styled.div`
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 200px;
  :hover {
    ${UploadIcon} {
      display: inline-block;
    }
  }
`

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  static getDerivedStateFromProps(nextProps) {
    if (nextProps.field.value && nextProps.field.value.location) {
      return { value: nextProps.field.value.location }
    }
    return null
  }
  handleChange({ file }) {
    this.props.form.setFieldValue(this.props.field.name, { changed: file })
    this.setState({ value: URL.createObjectURL(file) })
  }
  render() {
    return (
      <Form.Item {...this.props.formItemProps}>
        <Upload.Dragger
          customRequest={this.handleChange}
          accept={this.props.accept}
          showUploadList={false}
        >
          <BackgroundImage image={this.state.value}>
            <UploadIcon>
              <Icon type="inbox" style={{ fontSize: '40px' }} />
              <p>Click or drag file to this area to upload</p>
            </UploadIcon>
          </BackgroundImage>
        </Upload.Dragger>
      </Form.Item>
    )
  }
}
