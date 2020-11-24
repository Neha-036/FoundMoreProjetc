import Modal from './index'
import Button from '../button'
import { Formik } from 'formik'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Form = styled.form`
  padding: 20px;
`

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
`

const FormModal = props => {
  const {
    values,
    buttonProps,
    initialValues,
    modalProps,
    form,
    validationSchema,
    handleSubmit,
    setFieldValue,
    lazy,
    button,
    okText
  } = props
  const [visible, setVisible] = useState(false)
  const openModal = () => {
    setVisible(true)
    if (lazy) {
      lazy()
    }
  }
  const closeModal = () => setVisible(false)
  useEffect(() => {
    if (initialValues && initialValues.id) {
      delete initialValues.id
    }
  }, [initialValues])
  return (
    <>
      {button ? (
        <div onClick={openModal}>{button}</div>
      ) : (
        <Button {...buttonProps} onClick={openModal}>
          {buttonProps.text}
        </Button>
      )}
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validateOnBlur
        validateOnChange
        onSubmit={handleSubmit(closeModal, initialValues)}
        validationSchema={validationSchema}
      >
        {props => (
          <Modal {...modalProps} visible={visible} closeModal={closeModal}>
            <Form onSubmit={props.handleSubmit}>
              {form(props)}
              <Actions>
                <Button
                  style={{ width: '45%' }}
                  onClick={e => {
                    e.preventDefault()
                    closeModal()
                  }}
                >
                  Cancel
                </Button>
                <Button style={{ width: '45%' }} type="submit">
                  {okText || 'Save'}
                </Button>
              </Actions>
            </Form>
          </Modal>
        )}
      </Formik>
    </>
  )
}

export default FormModal
