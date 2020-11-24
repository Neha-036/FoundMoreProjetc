import { get } from 'lodash'

export const isTouchedAndErrors = (touched, errors, name) => {
  const isTouched = get(touched, name)
  const error = get(errors, name)
  if (isTouched && error) {
    return error
  }
  return null
}
