import { get } from 'lodash'

const compliesWithFilters = (object = {}, filters) => {
  return Object.entries(filters).reduce((acc, curr) => {
    if (get(object, curr[0]) === curr[1]) return true
    return false
  }, true)
}

export default compliesWithFilters
