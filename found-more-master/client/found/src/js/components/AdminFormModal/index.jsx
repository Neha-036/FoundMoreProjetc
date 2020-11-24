import React, { Component } from 'react'
import { Modal, Button } from 'antd'
import { Formik } from 'formik'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      initialValues: {}
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }
  componentDidMount() {
    if (this.props.visible) {
      this.openModal()
    }
  }
  openModal() {
    const { initialValues } = this.props
    this.setState({ visible: true }, async () => {
      if (typeof initialValues !== 'function') {
        this.setState({ initialValues })
      } else {
        const initializedValues = await this.props.initialValues()
        this.setState({ initialValues: initializedValues })
      }
    })
  }
  closeModal() {
    if (this.props.visible) {
      this.props.closeModal()
    } else {
      this.setState({ visible: false })
    }
  }
  render() {
    const { visible, initialValues } = this.state
    const {
      validationSchema,
      button,
      handleSubmit,
      buttonProps,
      form: Form,
      modalProps: { title, ...modalProps },
      modalId
    } = this.props
    const getTitle = () => {
      if (typeof title === 'function') {
        if (Object.keys(initialValues).length) return title(initialValues)
        return ' '
      }
      return title
    }
    return (
      <React.Fragment>
        {!this.props.visible &&
          (button ? (
            React.cloneElement(button, { onClick: () => this.openModal })
          ) : (
            <Button onClick={this.openModal} {...buttonProps}>
              {buttonProps.label}
            </Button>
          ))}
        <Formik
          enableReinitialize
          initialValues={initialValues}
          onSubmit={handleSubmit({
            closeModal: this.closeModal,
            initialValues
          })}
          validationSchema={validationSchema}
          render={props => (
            <Modal
              {...modalProps}
              title={getTitle()}
              visible={visible}
              style={{ transition: 'all .3s ease-in-out', ...modalProps.style }}
              onCancel={this.closeModal}
              cancelButtonProps={{
                onClick: this.props.closeModal || this.closeModal
              }}
              afterClose={this.props.onClose}
              okButtonProps={{
                onClick: props.submitForm,
                loading: props.isSubmitting,
                disabled:
                  props.submitCount > 0 && !!Object.keys(props.errors).length
              }}
            >
              <Form {...props} modalId={modalId} />
            </Modal>
          )}
        />
      </React.Fragment>
    )
  }
}
