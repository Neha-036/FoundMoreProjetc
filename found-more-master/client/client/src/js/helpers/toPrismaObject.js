const mapValueToPrismaUpdateInput = key => ({ id, ...data }) => {
  if (!id) throw new Error(`Query the if for ${key}`)
  return { where: { id }, data }
}

const toPrismaObject = (mode, source, exception = {}, extras = {}) => {
  if (Array.isArray(source)) {
    return source.map(item => toPrismaObject(mode, item, exception))
  }
  const newObject = { ...source }
  Object.entries(newObject).forEach(([key, value]) => {
    if (
      value !== null &&
      (Array.isArray(value) || typeof value === 'object') &&
      key !== 'where'
    ) {
      if (key === 'data') {
        Object.assign(newObject, {
          data: toPrismaObject(mode, value, exception)
        })
      } else if (exception[key]) {
        if (exception[key] === 'upsert') {
          Object.assign(newObject, {
            [key]: {
              [exception[key]]: {
                update: toPrismaObject(mode, value, exception),
                create: toPrismaObject(mode, value, exception)
              }
            }
          })
        } else if (exception[key] === 'update') {
          Object.assign(newObject, {
            [key]: {
              update: toPrismaObject(
                mode,
                value.map(mapValueToPrismaUpdateInput(key)),
                exception
              )
            }
          })
        } else {
          Object.assign(newObject, {
            [key]: { [exception[key]]: toPrismaObject(mode, value, exception) }
          })
        }
      } else if (
        mode === 'update' &&
        Array.isArray(value) &&
        typeof value[0] !== 'string'
      ) {
        Object.assign(newObject, {
          [key]: {
            update: toPrismaObject(
              mode,
              value.map(mapValueToPrismaUpdateInput(key)),
              exception
            )
          }
        })
      } else if (Array.isArray(value) && typeof value[0] === 'string') {
        Object.assign(newObject, {
          [key]: {
            set: value
          }
        })
      } else {
        Object.assign(newObject, {
          [key]: { [mode]: toPrismaObject(mode, value, exception) }
        })
      }
    }
  })
  return { ...newObject, ...extras }
}

export default toPrismaObject
