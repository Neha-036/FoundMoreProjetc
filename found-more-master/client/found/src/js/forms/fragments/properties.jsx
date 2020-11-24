import React from 'react'
import {
  TextInput,
  TextArea,
  NumberInput,
  PriceInput,
  SelectInput,
  ImagesField
} from '@/components/FormItems'
import { Form } from 'antd'
import { Field } from 'formik'
import * as Yup from 'yup'

export const propertiesValidationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required.')
})

const PropertiesFormFragment = ({ mode, formItemLayout }) => {
  return (
    <>
      <Field
        name={
          mode === 'update'
            ? 'properties.update.articleNumber'
            : 'properties.create.articleNumber'
        }
        formItemProps={{ label: 'Article Number', ...formItemLayout }}
        component={TextInput}
      />
      <Field
        name={
          mode === 'update'
            ? 'properties.update.description'
            : 'properties.create.description'
        }
        formItemProps={{ label: 'Description', ...formItemLayout }}
        component={TextArea}
      />
      <Form.Item {...formItemLayout} label="Price">
        <Field
          name={
            mode === 'update'
              ? 'properties.update.currency'
              : 'properties.create.currency'
          }
          formItemProps={{
            label: '',
            style: { display: 'inline-block', marginRight: 10 }
          }}
          options={[{ value: 'EUR' }]}
          valueIndex="value"
          labelIndex="value"
          component={SelectInput}
        />
        <Field
          name={
            mode === 'update'
              ? 'properties.update.price'
              : 'properties.create.price'
          }
          formItemProps={{ label: '', style: { display: 'inline-block' } }}
          component={PriceInput}
        />
      </Form.Item>
      <Form.Item {...formItemLayout} label="Dimensions">
        <Field
          min={0}
          name={
            mode === 'update'
              ? 'properties.update.depthMm'
              : 'properties.create.depthMm'
          }
          formItemProps={{
            label: 'Depth (mm)',
            style: { display: 'inline-block', marginRight: 10 }
          }}
          component={NumberInput}
        />
        <Field
          min={0}
          name={
            mode === 'update'
              ? 'properties.update.widthMm'
              : 'properties.create.widthMm'
          }
          formItemProps={{
            label: 'Width (mm)',
            style: { display: 'inline-block', marginRight: 10 }
          }}
          component={NumberInput}
        />
        <Field
          min={0}
          name={
            mode === 'update'
              ? 'properties.update.heightMm'
              : 'properties.create.heightMm'
          }
          formItemProps={{
            label: 'Height (mm)',
            style: { display: 'inline-block' }
          }}
          component={NumberInput}
        />
      </Form.Item>
      <Field
        min={0}
        name={
          mode === 'update'
            ? 'properties.update.weightG'
            : 'properties.create.weightG'
        }
        formatter={val => `${val}g`}
        parser={val => val.replace(/(\s?g?)/g, '')}
        formItemProps={{
          ...formItemLayout,
          label: 'Weight'
        }}
        component={NumberInput}
      />
      <Field
        name={
          mode === 'update'
            ? 'properties.update.color'
            : 'properties.create.color'
        }
        formItemProps={{ label: 'Color', ...formItemLayout }}
        component={TextInput}
      />
      <Field
        name={
          mode === 'update'
            ? 'properties.update.material'
            : 'properties.create.material'
        }
        formItemProps={{ label: 'Material', ...formItemLayout }}
        component={TextInput}
      />
      <Field
        name={
          mode === 'update'
            ? 'properties.update.images.update'
            : 'properties.create.images'
        }
        formItemProps={{ label: 'Images' }}
        component={ImagesField}
        uploadsKey="images"
      />
    </>
  )
}

export default PropertiesFormFragment
