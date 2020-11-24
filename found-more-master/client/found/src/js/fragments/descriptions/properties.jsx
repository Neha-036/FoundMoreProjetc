import React from 'react'
import { Descriptions } from 'antd'
import { get } from 'lodash'

/**
 * Description Items for properties, only use render for Arrays.
 * @type {{
 *  label: string,
 *  path: keyof import('@/jsdoc').Properties,
 *  span?: Number,
 *  render?: function(import('@/jsdoc').Properties): JSX.Element | JSX.Element[] }[]
 * }
 */

const properties = [
  {
    label: 'Name',
    path: 'name'
  },
  {
    label: 'Article Number',
    path: 'articleNumber'
  },
  {
    label: 'Description',
    path: 'description'
  },
  {
    label: 'Currency',
    path: 'currency',
    span: 1
  },
  {
    label: 'Price',
    path: 'price'
  },
  {
    label: 'Depth (mm)',
    path: 'depthMm'
  },
  {
    label: 'Width (mm)',
    path: 'widthMm'
  },
  {
    label: 'Height (mm)',
    path: 'heightMm'
  },
  {
    label: 'Weight (g)',
    path: 'weightG'
  },
  {
    label: 'Color',
    path: 'color'
  },
  {
    label: 'Material',
    path: 'material'
  },
  {
    label: 'Images',
    render: e =>
      e.images.map((image, i) => (
        <img key={i} src={image.location} width="100%" alt={`image${i}`} />
      ))
  }
]

/**
 * @type {import('react').SFC<{
 *    dataSource: {
 *      properties: import('@/jsdoc').Properties
 *    },
 *    omit?: (keyof import('@/jsdoc').Properties)[]
 *  }}>}
 */

const PropertiesDescriptions = ({ dataSource, children, omit = [] }) => (
  <Descriptions bordered title="Properties">
    {properties.map(prop => {
      if (
        !omit.some(item => item === prop.path) &&
        (get(dataSource, `properties.${prop.path}`) ||
          (prop.render && !!prop.render(dataSource.properties).length))
      ) {
        return (
          <Descriptions.Item
            key={prop.label}
            span={prop.span || 3}
            label={prop.label}
          >
            {prop.render
              ? prop.render(dataSource.properties)
              : get(dataSource, `properties.${prop.path}`)}
          </Descriptions.Item>
        )
      }
      return null
    })}
    {children}
  </Descriptions>
)

export default PropertiesDescriptions
