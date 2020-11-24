const handleFilterChange = (value, filter, filters, callback) => {
  if (value !== null) {
    callback({ ...filters, ...filter })
  } else {
    delete filters[Object.keys(filter)[0]]
    callback(filters)
  }
}

export default handleFilterChange
