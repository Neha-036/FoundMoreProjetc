import createStore from 'redux-zero'

const initialState = {
  storeOrderItems: [],
  idValues: {}
}
const store = createStore(initialState)

export default store
