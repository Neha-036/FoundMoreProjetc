import React from 'react'
import { inject } from 'mobx-react'
import { Query } from 'react-apollo'
import styled from 'styled-components'
import { List, Icon, message, Empty, InputNumber } from 'antd'
import product from 'Common/graphql/queries/product.graphql'
import orderTemplate from './orderTemplate.graphql'
import { useDrop } from 'react-dnd'
import { Field } from 'formik'

const ElementsWrapper = styled.div`
  position: relative;
  display: flex;
  border: 1px solid #d3d3d3;
  padding: 10px;
  border-radius: 5px;
  flex: 1 0 auto;
  justify-content: center;
  overflow: hidden;
  background-color: white;
  .ant-list-item {
    justify-content: space-between;
  }
  .ant-list-item-action {
    margin-left: 10px;
  }
`

const AddElementOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 20;
  display: none;
  transition: all 0.1s ease-in-out;
  opacity: 0;
  align-items: center;
  justify-content: center;
  ${({ isOver }) =>
    isOver &&
    `
    display: flex;
    opacity: 1;
    background-color: #1890ffE6;
  `}
`

const onElementDrop = ({ form, field }) => item => {
  const doesChildAlreadyExist = key => {
    switch (key) {
      case 'create':
        return field.value?.create?.some(
          child => child.product.connect.id === item.id
        )
      case 'update':
        return field.value?.update?.some(
          child => child.data.product.connect.id === item.id
        )
    }
  }

  if (doesChildAlreadyExist('create') || doesChildAlreadyExist('update')) {
    message.warning(<p>This element has already been added.</p>)
  } else {
    form.setFieldValue(
      `${field.name}.create[${
        field.value.create ? field.value.create.length : 0
      }]`,
      {
        brand: { connect: { id: form.values.brand.connect.id } },
        properties: { create: { name: item.properties.name } },
        defaultOrderAmount: 1,
        product: { connect: { id: item.id } }
      }
    )
  }
}

const AmountChanger = ({ field: { value, name }, form }) => (
  <InputNumber
    parser={val => val.replace('x', '')}
    formatter={val => `x${val}`}
    min={1}
    value={value}
    onChange={value => form.setFieldValue(name, parseInt(value || 1, 10))}
  />
)

const renderExistingElements = ({ field, form }) => (item, i) => {
  return (
    !(field.value.delete || []).some(({ id }) => id === item.where.id) && (
      <List.Item
        key={i}
        actions={[
          <Icon
            type="delete"
            key={1}
            onClick={() => {
              form.setFieldValue(
                `${field.name}.delete`,
                field?.value?.delete?.length
                  ? [...field.value.delete, { id: item.where.id }]
                  : [{ id: item.where.id }]
              )
            }}
          />
        ]}
      >
        <List.Item.Meta
          title={item?.data?.product?.connect?.properties?.update?.name}
        />
        <Field
          name={`${field.name}.update[${i}].data.defaultOrderAmount`}
          component={AmountChanger}
        />
      </List.Item>
    )
  )
}

const renderCreatedElements = ({ field, form }) => (item, i) => (
  <Query
    key={i}
    query={product}
    variables={{ where: { id: item.product.connect.id } }}
    fetchPolicy="network-only"
  >
    {({ loading, error, data }) =>
      !loading &&
      !error && (
        <List.Item
          actions={[
            <Icon
              key={1}
              type="delete"
              onClick={() =>
                form.setFieldValue(
                  `${field.name}.create`,
                  field.value.create.filter((_, j) => i !== j)
                )
              }
            />
          ]}
        >
          <List.Item.Meta title={data.product.properties.name} />
          <Field
            name={`${field.name}.create[${i}].defaultOrderAmount`}
            component={AmountChanger}
          />
        </List.Item>
      )
    }
  </Query>
)

const renderConnectedElements = ({ field, form }) => (item, i) => (
  <Query key={i} query={orderTemplate} variables={{ where: { id: item.id } }}>
    {({ loading, error, data }) =>
      !loading &&
      !error && (
        <List.Item>
          <List.Item.Meta title={data.orderTemplate.product.properties.name} />
        </List.Item>
      )
    }
  </Query>
)

const ElementsEditor = inject('windowStore')(
  ({ field, form, modalId, windowStore }) => {
    const [{ isOver }, drop] = useDrop({
      accept: 'elements',
      collect: monitor => ({
        isOver: !!monitor.isOver()
      }),
      drop: onElementDrop({ form, field })
    })

    return (
      <ElementsWrapper>
        <div style={{ width: '100%' }} ref={drop}>
          <AddElementOverlay isOver={isOver}>
            <Icon style={{ fontSize: '40px', color: '#fff' }} type="plus" />
          </AddElementOverlay>
          <List loading={!field.value} itemLayout="horizontal">
            {field?.value?.update?.map(renderExistingElements({ field, form }))}
            {field?.value?.create?.map(renderCreatedElements({ field, form }))}
            {field?.value?.connect?.map(
              renderConnectedElements({ field, form })
            )}
            {!field.value?.update?.length &&
              !field.value?.create?.length &&
              !field.value?.connect?.length && (
                <Empty description="No elements added" />
              )}
          </List>
        </div>
      </ElementsWrapper>
    )
  }
)

export default ElementsEditor
