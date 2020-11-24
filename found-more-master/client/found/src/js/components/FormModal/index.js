import React, { Component } from 'react'
import { Modal, Button } from 'antd'

export default class extends Component {
  constructor() {
    super()
    this.state = {
      visible: false
    }
  }
  UNSAFE__componentWillReceiveProps(prev) {
    if (
      Object.keys(this.props.errors).length === 0 &&
      prev.confirmLoading === false &&
      this.props.confirmLoading === true
    ) {
      this.setState({ visible: false })
    }
  }
  showModal = () => {
    this.setState({
      visible: true
    })
  }
  handleCancel = () => {
    this.setState({
      visible: false
    })
  }
  render() {
    const { visible } = this.state
    const {
      type,
      children,
      buttonText,
      buttonIcon,
      title,
      okButtonDisabled,
      formId,
      handleSubmit,
      confirmLoading
    } = this.props
    return (
      <React.Fragment>
        <Button type={type} icon={buttonIcon} onClick={this.showModal}>
          {buttonText}
        </Button>
        <Modal
          title={title}
          visible={visible}
          onOk={handleSubmit}
          okButtonProps={{
            htmlType: 'submit',
            form: formId,
            disabled: okButtonDisabled
          }}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          {children}
        </Modal>
      </React.Fragment>
    )
  }
}
