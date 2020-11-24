import Modal from './index'
import Button from '../button'
import React, { useState } from 'react'
import styled from 'styled-components'

const AlertText = styled.span``

const Wrapper = styled.div`
  padding: 20px;
`

const AlertModal = props => {
  const { buttonProps, modalProps, button, children } = props
  const [visible, setVisible] = useState(false)
  const openModal = () => {
    setVisible(true)
  }
  const closeModal = () => setVisible(false)
  return (
    <>
      {button ? (
        <div onClick={openModal}>{button}</div>
      ) : (
        <Button {...buttonProps} onClick={openModal}>
          {buttonProps.text}
        </Button>
      )}
      <Modal {...modalProps} visible={visible} closeModal={closeModal}>
        <Wrapper>
          <AlertText>{children}</AlertText>
        </Wrapper>
      </Modal>
    </>
  )
}

export default AlertModal
