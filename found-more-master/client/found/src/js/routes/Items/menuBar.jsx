import React from 'react'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
import { Dropdown, Menu, Icon, Button } from 'antd'
import { addFolder } from './actions/addFolder'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const ActionMenu = ({ contextStore, windowStore }) => {
  return (
    <Menu>
      <Menu.Item
        onClick={() =>
          windowStore.addModal(
            addFolder({ parent: contextStore.currentFolder })
          )
        }
      >
        Add new Folder
      </Menu.Item>
    </Menu>
  )
}

const MenuBar = props => {
  return (
    <Wrapper>
      {props.children}
      <Dropdown overlay={ActionMenu(props)}>
        <Button>
          Actions <Icon type="down" />
        </Button>
      </Dropdown>
    </Wrapper>
  )
}

export default inject('contextStore', 'windowStore')(observer(MenuBar))
