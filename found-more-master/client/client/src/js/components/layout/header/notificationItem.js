import React from 'react'
import BellIcon from './bell'
import NotificationList from '@/components/notification-list'
import Dot from '@/components/notification-list/dot'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const DotContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 15px;
`

const NotificationItem = ({ isMobile }) => {
  const { push } = useHistory()
  return (
    <NotificationList>
      <BellIcon onClick={() => isMobile && push('/notfications')} />
      <DotContainer>
        <Dot />
      </DotContainer>
    </NotificationList>
  )
}

export default NotificationItem
