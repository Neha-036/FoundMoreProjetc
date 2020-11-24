export default (errorObject, options) =>
  errorObject.map(error =>
    options.map(
      option =>
        error.includes(option.error) &&
        (option.message ? option.message : error)
    )
  )
