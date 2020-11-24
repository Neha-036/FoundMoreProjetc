import React from 'react'
import styled from 'styled-components'
import ElementsEditor from './ElementsEditor'
import { hasVariations, deleteVariation, duplicateVariation } from './helpers'
import { Field } from 'formik'
import VariationOptions from './VariationOptions'
import { TextInput } from '@/components/FormItems'

const VariationsWrapper = styled.div`
  display: flex;
  background-color: whitesmoke;
  flex-direction: column;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`

const Variation = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
`

const Actions = styled.div`
  display: flex;
  flex-direction: column;
`

const Action = styled.a`
  padding: 0 10px;
`

const ElementsField = props => {
  const { form, field, mode, modalId } = props
  return !hasVariations(form) ? (
    <ElementsEditor mode={mode} {...props} modalId={modalId} />
  ) : (
    <VariationsWrapper>
      {['update', 'create'].map(mode =>
        (field.value?.[mode] || []).map((item, i) => {
          if (
            mode === 'update' &&
            (field.value.delete || []).some(({ id }) => id === item.where.id)
          )
            return null
          return (
            <div key={i}>
              <h4>
                Variation{' '}
                {i +
                  (mode === 'update'
                    ? 1
                    : field.value?.update?.length || 0 + 1)}
              </h4>
              <Field
                mode={mode}
                name={
                  mode === 'update'
                    ? `children.update[${i}].data.filterOptions.update`
                    : `children.create[${i}].filterOptions.create`
                }
                component={VariationOptions}
              />
              <Field
                formItemProps={{
                  labelCol: { span: 3 },
                  wrapperCol: { span: 21 },
                  label: 'Name'
                }}
                name={
                  mode === 'update'
                    ? `children.update[${i}].data.properties.update.name`
                    : `children.create[${i}].properties.create.name`
                }
                component={TextInput}
              />
              <Variation key={i}>
                <Field
                  key={i}
                  name={
                    mode === 'update'
                      ? `children.update[${i}].data.children`
                      : `children.create[${i}].children`
                  }
                  render={props => (
                    <ElementsEditor mode={mode} modalId={modalId} {...props} />
                  )}
                />
                <Actions>
                  <Action
                    onClick={() =>
                      deleteVariation({ ...props, mode, index: i })
                    }
                  >
                    Delete
                  </Action>
                  <Action
                    onClick={() =>
                      duplicateVariation({ ...props, mode, index: i })
                    }
                  >
                    Duplicate
                  </Action>
                </Actions>
              </Variation>
            </div>
          )
        })
      )}
    </VariationsWrapper>
  )
}

export default ElementsField
