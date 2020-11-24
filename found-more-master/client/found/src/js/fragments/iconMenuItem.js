import React from 'react'
import styled from 'styled-components'
import { Item } from 'react-contexify'
import { Icon } from 'antd'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  & > i {
    margin-right: 10px;
  }
`

/**
 * Menu Item for React Contexify with Icon from Ant Design.
 * @type {import('react').SFC<{ icon: string } & import('react-contexify').Item['props']>}
 */

const IconMenuItem = ({ children, icon, ...props }) => (
  <Item {...props}>
    <Wrapper>
      <Icon type={icon} />
      {children}
    </Wrapper>
  </Item>
)

export default IconMenuItem
