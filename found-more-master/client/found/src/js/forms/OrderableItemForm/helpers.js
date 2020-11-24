import windowStore from '@/stores/windowStore'

const createVariationChild = ({ children = {}, brandId, name }) => ({
  filterOptions: { create: { language: { connect: { isoCode: 'DE' } } } },
  brand: { connect: { id: brandId } },
  properties: { create: { name } },
  children
})

const updateChildToCreateChild = ({ data }) => {
  console.log(data)
  const children = data?.children?.update
    ? data?.children?.update.map(updateChildToCreateChild)
    : []
  const filterOptions = data.filterOptions
    ? {
        language: {
          connect: {
            isoCode: data?.filterOptions?.update?.language?.connect?.isoCode
          }
        }
      }
    : null
  const properties = {
    name: data?.properties?.update?.name
  }
  const product = data?.product
    ? {
        id: data?.product?.connect?.id
      }
    : null
  const brand = { id: data?.brand?.connect?.id }
  return {
    brand: { connect: brand },
    defaultOrderAmount: data.defaultOrderAmount,
    filterOptions: { create: filterOptions },
    children: { create: children },
    properties: { create: properties },
    product: { connect: product }
  }
}

/**
 *
 * @param {import('formik').FormikProps<{}>} props
 */

export const hasVariations = ({ values }) => {
  const create = values?.children?.create || []
  const update = values?.children?.update || []
  if (
    create.some(item => item.filterOptions) ||
    update.some(item => item.data.filterOptions)
  ) {
    return true
  }
  return false
}

/**
 *
 * @param {import('formik').FieldProps} props
 */

export const applyNewFilterOption = ({ form, mode }) => {
  const brandId = form.values?.brand?.connect?.id
  const name = mode === 'update' ? form.values.properties.update.name : ''
  const children = {
    create: form.values.children?.create || []
  }
  if (form.values?.children?.update) {
    children.connect = form.values.children?.update?.map(({ where }) => ({
      id: where.id
    }))
  }
  form.setFieldValue('children', {
    create: [createVariationChild({ children, brandId, name })]
  })
}

/**
 *
 * @param {import('formik').FormikProps<{}>} props

 */

export const addNewVariation = ({ values, setFieldValue }) => {
  const brandId = values?.brand?.connect?.id
  setFieldValue('children.create', [
    ...(values.children?.create || []),
    createVariationChild({ brandId })
  ])
}

/**
 *
 * @param {import('formik').FieldProps} props
 */

export const deleteVariation = ({ form, field, mode, index }) => {
  return windowStore.addConfirmation({
    title: 'Are you sure you want to delete this variation?',
    content: 'This action cannot be undone',
    onOk: async () => {
      if (mode === 'update') {
        const deleteObject = {
          id: field.value.update[index].where.id
        }
        form.setFieldValue(
          'children.delete',
          field.value?.delete?.length
            ? [...field.value.delete, deleteObject]
            : [deleteObject]
        )
        return
      }
      form.setFieldValue(
        'children.create',
        field.value.create.filter((_, j) => index !== j)
      )
    }
  })
}

export const duplicateVariation = ({ form, field, mode, index }) => {
  if (mode === 'update') {
    console.log(updateChildToCreateChild(field.value?.update[index]))
    form.setFieldValue(`children.create`, [
      ...(field.value?.create || []),
      updateChildToCreateChild(field.value?.update[index])
    ])
    return
  }
  form.setFieldValue('children.create', [
    ...field.value?.create,
    field.value.create[index]
  ])
}

/**
 *
 * @param {import('formik').FieldProps} props
 */

export const undoFilterOption = ({ form }) => {
  const deleteItems = form.values.children.update.map(({ where }) => ({
    id: where.id
  }))
  form.setFieldValue('children', { delete: deleteItems })
}
