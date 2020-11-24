import { observable, action, computed } from 'mobx'

class ContextStore {
  @observable history = []

  @action setCurrentFolder = args => {
    const { parent } = args
    const indexOfParent = this.history
      .map(({ id }) => id)
      .indexOf(parent ? parent.id : null)
    if (parent !== null) {
      if (indexOfParent !== -1) {
        this.history = this.history.slice(0, indexOfParent + 1)
      }
      this.history.push(args)
    } else {
      this.history = [args]
    }
  }

  @action unsetCurrentFolder = () => {
    this.history.pop()
  }

  @computed get currentFolder() {
    return this.history.length > 0
      ? this.history[this.history.length - 1].id
      : null
  }
}

const store = new ContextStore()

export default store
