import React from 'react'
import { Breadcrumb, Icon } from 'antd'
import styled from 'styled-components'

const Wrapper = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  padding: 10px;
  margin: 5px 0;
`

/**
 * BreadCrumb Component
 * @type {import('react').SFC<{ history: { id: string, name: string}[]}>}
 */

const BreadCrumbs = ({ history }) => {
  return (
    <Wrapper>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Icon type="home" />
        </Breadcrumb.Item>
        {history.map(item => (
          <Breadcrumb.Item key={item.id}>{item.name}</Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </Wrapper>
  )
}

export default BreadCrumbs
