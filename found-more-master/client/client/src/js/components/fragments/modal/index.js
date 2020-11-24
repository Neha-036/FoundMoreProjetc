import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes'
import { CSSTransition } from 'react-transition-group'
import Button from '../button'
import FormModal from './form'
import AlertModal from './alert'

const ModalContent = styled.div`
  top: 50px;
  position: relative;
  display: flex;
  z-index: 120;
  background: white;
  border-radius: 5px;
  /* max-height: 90vh; */
  min-width: 90%;
  max-width: 600px;
  margin: 0 auto;
  overflow: hidden;
  transition: transform 300ms ease-out;
  flex-flow: column;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 50px 6px;
  @media (min-width: ${({ theme }) => theme.bpTablet}) {
    min-width: 50%;
  }

  @media (min-width: ${({ theme }) => theme.bpDesktop}) {
    min-width: 40%;
  }
`

const ModalWrapper = styled.div`
  body:not(&) {
    overflow: hidden;
  }
  html:not(&) {
    overflow: hidden;
  }
  overflow: scroll;
  position: fixed;
  display: block;
  align-items: center;
  justify-content: center;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.3);
  transition: opacity 300ms ease-out;
  &.modal-enter {
    opacity: 0;
    & > ${ModalContent} {
      transform: translateY(200%);
    }
  }
  &.modal-enter-active {
    opacity: 1;
    & > ${ModalContent} {
      transform: translateY(0);
    }
  }
  &.modal-exit {
    opacity: 1;
    & > ${ModalContent} {
      transform: translateY(0);
    }
  }
  &.modal-exit-active {
    opacity: 0;
    & > ${ModalContent} {
      transform: translateY(200%);
    }
  }
`

const ModalHeader = styled.header`
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${({ theme }) => theme.colorPrimary};
  padding: 10px 10px 10px 20px;
  align-items: center;
  justify-content: flex-start;
`
const ModalTitle = styled.h5`
  color: #fff;
  flex-grow: 1;
  flex-shrink: 0;
`

const Close = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colorSecondary};
  border-radius: 2px;
  color: ${({ theme }) => theme.colorPrimary};
  cursor: pointer;
`

const ModalBody = styled.div`
  flex: 1;
`
const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`

class Modal extends Component {
  static Form
  static Alert

  render() {
    const {
      children,
      title,
      visible,
      onOk,
      okText,
      cancelText,
      onCancel,
      okButton,
      cancelButton,
      closeModal,
      style
    } = this.props
    return createPortal(
      <CSSTransition
        in={visible}
        classNames="modal"
        timeout={500}
        unmountOnExit
      >
        <ModalWrapper>
          <ModalContent style={style}>
            <ModalHeader>
              <ModalTitle>{title}</ModalTitle>
              <Close onClick={closeModal}>
                <FontAwesomeIcon icon={faTimes} />
              </Close>
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
            {(onCancel || onOk || okButton || cancelButton) && (
              <Actions>
                {cancelButton ||
                  (onCancel && (
                    <Button onClick={onCancel} style={{ width: '45%' }}>
                      {cancelText || 'Cancel'}
                    </Button>
                  ))}
                {okButton ||
                  (onOk && (
                    <Button onClick={onOk} style={{ width: '45%' }}>
                      {okText || 'Ok'}
                    </Button>
                  ))}
              </Actions>
            )}
          </ModalContent>
        </ModalWrapper>
      </CSSTransition>,
      document.getElementById('root')
    )
  }
}

Modal.Form = FormModal
Modal.Alert = AlertModal

export default Modal
