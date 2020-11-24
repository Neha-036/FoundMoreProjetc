import React from 'react'
import { observable, action, computed, entries } from 'mobx'
import { Drawer, Modal } from 'antd'
import shortid from 'shortid'
import { AdminFormModal } from '@/components'

class WindowStore {
  @observable modals = new Map()
  @observable confirmations = new Map()
  @observable drawer = null

  @action addModal = modalObject => {
    this.modals.set(shortid.generate(), modalObject)
  }

  @action setStyleOnModal = (id, style) => {
    this.modals.set(id, { ...this.modals.get(id), style })
  }

  @action closeModal = id => {
    this.modals.delete(id)
  }
  /**
   * @param {Object} confirmationObject
   * @param {string} confirmationObject.title
   * @param {string} confirmationObject.content
   * @param {Promise} confirmationObject.onOk
   */
  @action addConfirmation = confirmationObject => {
    this.confirmations.set(shortid.generate(), confirmationObject)
  }

  @action closeConfirmation = id => {
    this.confirmations.delete(id)
  }

  /**
   * @typedef {import('antd')['Drawer']['propTypes'] & { content: JSX.Element }} DrawerProps
   * @param {DrawerProps} component
   */
  @action setDrawer = component => {
    this.drawer = component
  }

  @action removeDrawer = () => {
    this.drawer = null
  }

  @computed get renderDrawer() {
    if (this.drawer) {
      return (
        <Drawer
          {...this.drawer}
          width={500}
          visible
          onClose={this.removeDrawer}
        >
          {this.drawer.content}
        </Drawer>
      )
    }
    return null
  }

  @computed get renderConfirmations() {
    const { confirm } = Modal
    return entries(this.confirmations).map(([id, confirmation]) => {
      const closeConfirmation = () => this.closeConfirmation(id)
      return confirm({
        title: confirmation.title,
        content: confirmation.content,
        async onOk() {
          return confirmation
            .onOk()
            .then(() => closeConfirmation())
            .catch(e => console.log(e))
        },
        onCancel() {
          closeConfirmation()
        }
      }).update()
    })
  }

  @computed get renderModals() {
    return entries(this.modals).map(([id, modal]) => {
      return (
        <AdminFormModal
          visible
          key={id}
          modalId={id}
          modalProps={{ ...modal.modalProps, style: modal.style }}
          closeModal={() => this.closeModal(id)}
          initialValues={modal.initialValues}
          handleSubmit={modal.handleSubmit}
          form={modal.form}
          validationSchema={modal.validationSchema}
        />
      )
    })
  }
}

const store = new WindowStore()

export default store
