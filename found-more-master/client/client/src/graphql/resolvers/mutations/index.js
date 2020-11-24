// Selected Order Items
import * as addSelectedOrderItem from './selectedOrderItems/addSelectedOrderItem'
import * as updateSelectedOrderItem from './selectedOrderItems/updateSelectedOrderItem'
import deleteSelectedOrderItem from './selectedOrderItems/deleteSelectedOrderItem'

// Order Items
import addOrderToStores from './storeOrderItems/addOrderToStores'
import updateStoreOrderItem from './storeOrderItems/updateStoreOrderItem'
import deleteStoreOrderItem from './storeOrderItems/deleteStoreOrderItem'
import clearStoreOrderItems from './storeOrderItems/clearStoreOrderItems'
import updateVariation from './storeOrderItems/updateVariation'

export default {
  ...addSelectedOrderItem,
  ...updateSelectedOrderItem,
  ...deleteSelectedOrderItem,
  ...clearStoreOrderItems,
  ...updateVariation,
  ...addOrderToStores,
  ...updateStoreOrderItem,
  ...deleteStoreOrderItem
}
