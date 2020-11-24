import React, { useState } from 'react'
import * as Yup from 'yup'
import { Form, Button, Drawer } from 'antd'
import { Query } from 'react-apollo'
import { Field } from 'formik'
import languages from 'Common/graphql/queries/languages.graphql'
import { DndProvider } from 'react-dnd'
import createHTML5Backend from 'react-dnd-html5-backend'
import {
  SelectInput,
  TextInput,
  DateField,
  NumberInput
} from '@/components/FormItems'
import PropertiesFormFragment, {
  propertiesValidationSchema
} from '../fragments/properties'
import FilterOptionsField from './FilterOptionsField'
import { hasVariations, addNewVariation } from './helpers'
import ElementsView from '@/components/ElementsView'
import { inject } from 'mobx-react'
import ElementsField from './ElementsField'

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 }
}

/**
 *
 * @param {Object} props
 * @param {('create'|'update')} props.mode
 * @return {import('@/jsdoc').FormObject}
 */

const OrderableItemForm = ({ mode }) => ({
  form: inject('windowStore')(props => {
    const { modalId, values } = props
    const [drawerVisibility, setDrawerVisibility] = useState(false)
    return (
      <Form layout="horizontal">
        <Field
          name={
            mode === 'update'
              ? 'properties.update.name'
              : 'properties.create.name'
          }
          formItemProps={{ label: 'Name', ...formItemLayout }}
          component={TextInput}
        />
        <Field
          name="stock"
          min={0}
          formItemProps={{ label: 'Stock', ...formItemLayout }}
          component={NumberInput}
        />
        <Field
          name="stockWarning"
          min={0}
          formItemProps={{ label: 'Stock Warning', ...formItemLayout }}
          component={NumberInput}
        />
        <Form.Item label="Visible" {...formItemLayout}>
          <Field
            name="visibleFrom"
            fieldProps={{ placeholder: 'From' }}
            component={DateField}
          />
          <Field
            name="visibleUntil"
            fieldProps={{ placeholder: 'Until' }}
            component={DateField}
          />
        </Form.Item>
        <PropertiesFormFragment mode={mode} formItemLayout={formItemLayout} />
        <Query query={languages}>
          {({ loading, data }) => (
            <Field
              loading={loading}
              fieldProps={{ disabled: hasVariations(props) }}
              formItemProps={{ label: 'Language', ...formItemLayout }}
              name={
                mode === 'update'
                  ? 'properties.update.language.connect.id'
                  : 'properties.create.language.connect.id'
              }
              component={SelectInput}
              options={data.languages}
              valueIndex="id"
              labelIndex="isoCode"
            />
          )}
        </Query>
        <Field
          name="filterOptions"
          formMode={mode}
          component={FilterOptionsField}
        />
        <DndProvider backend={createHTML5Backend}>
          <h3>Elements</h3>
          <Field
            mode={mode}
            modalId={modalId}
            name="children"
            component={ElementsField}
          />
          <Button
            icon="plus"
            style={{ marginRight: 10 }}
            onClick={() => {
              setDrawerVisibility(true)
              props.windowStore.setStyleOnModal(modalId, {
                transform: 'translateX(-50%)'
              })
            }}
          >
            Add Elements
          </Button>
          <Drawer
            title="Elements"
            width={500}
            mask={false}
            onClose={() => {
              setDrawerVisibility(false)
              props.windowStore.setStyleOnModal(modalId, {
                transform: 'translateX(0)'
              })
            }}
            visible={drawerVisibility}
          >
            <ElementsView withDragDrop brandId={values?.brand?.connect?.id} />
          </Drawer>
        </DndProvider>
        {hasVariations({ values }) && (
          <Button
            icon="copy"
            onClick={() => addNewVariation(props)}
            type="primary"
          >
            Add variation
          </Button>
        )}
      </Form>
    )
  }),
  validationSchema: Yup.object().shape({
    properties: Yup.object().shape({
      [mode]: propertiesValidationSchema
    }),
    children: Yup.object().shape({
      create: Yup.array().of(
        Yup.object().shape({
          properties: Yup.object().shape({
            create: propertiesValidationSchema
          })
        })
      ),
      update: Yup.array().of(
        Yup.object().shape({
          data: Yup.object().shape({
            properties: Yup.object().shape({
              [mode]: propertiesValidationSchema
            })
          })
        })
      )
    })
  })
})

export default OrderableItemForm
