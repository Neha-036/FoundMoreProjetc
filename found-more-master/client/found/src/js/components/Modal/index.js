import React, { Component } from 'react'
import { Button, Modal } from 'antd'

export default class extends Component {
  constructor() {
    super()
    this.state = {
      visible: false
    }
    this.showModal = this.showModal.bind(this)
    this.handleOk = this.handleOk.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }
  showModal() {
    this.setState({
      visible: true
    })
  }
  handleOk() {
    this.setState({
      visible: false
    })
  }
  handleCancel() {
    this.setState({
      visible: false
    })
  }
  render() {
    return (
      <React.Fragment>
        <Button type="primary" onClick={this.showModal}>
          {this.props.buttonText}
        </Button>
        <Modal
          {...this.props}
          title={this.props.title}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          cancelButtonProps={{ hidden: true }}
        >
          {this.props.children}
        </Modal>
      </React.Fragment>
    )
  }
}
