import { diff as deepObjectDiff } from 'deep-object-diff'
import { get, isEmpty } from 'lodash'

const addWhereToArrayUpdateInput = (values, difference, path = []) => {
  if (Array.isArray(difference)) {
    return difference.map((item, i) =>
      addWhereToArrayUpdateInput(values, item, path.concat(`[${i}]`))
    )
  }
  const newDifference = { ...difference }
  Object.entries(newDifference).forEach(([key, value]) => {
    if (!isEmpty(value) && typeof value === 'object') {
      if (!isNaN(parseInt(Object.keys(value)[0], 10))) {
        if (key === 'update') {
          Object.entries(value).forEach(([key, value], i) => {
            if (value) {
              const newUpdate = {
                where: get(values, `${path.join('.')}.update[${key}].where`),
                data: value.data
              }
              Object.assign(newDifference, {
                update: [
                  ...(Array.isArray(newDifference?.update)
                    ? newDifference?.update
                    : []),
                  addWhereToArrayUpdateInput(
                    values,
                    newUpdate,
                    path.concat(`update.[${key}]`)
                  )
                ]
              })
            } else {
              Object.assign(newDifference, {
                update: [
                  ...(Array.isArray(newDifference?.update)
                    ? newDifference?.update
                    : [])
                ]
              })
            }
          })
        }
        if (key === 'create') {
          const create = Object.values(value)
          Object.assign(newDifference, { create })
        }
        if (key === 'set') {
          const set = Object.values(value)
          Object.assign(newDifference, { set })
        }
        if (key === 'connect') {
          const connect = Object.values(value)
          Object.assign(newDifference, { connect })
        }
      } else {
        Object.assign(newDifference, {
          [key]: addWhereToArrayUpdateInput(values, value, path.concat(key))
        })
      }
    } else if (
      (typeof value === 'object' && isEmpty(value)) ||
      value === undefined
    ) {
      delete newDifference[key]
    }
  })
  return newDifference
}

export const diff = (initialValues, values) => {
  const difference = deepObjectDiff(initialValues, values)
  return addWhereToArrayUpdateInput(values, difference)
}
