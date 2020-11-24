export default (index, object) =>
  index.split('.').reduce((obj, i) => obj && (obj[i] ? obj[i] : false), object)
