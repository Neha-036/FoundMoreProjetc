import React from 'react'
import styled from 'styled-components'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import format from 'date-fns/format'
import IconButton from '../../components/fragments/icon-button'
import Dot from './dot'
import Link from '../../helpers/link'

const Container = styled.div`
  padding: 10px 0;
`
const Created = styled.div`
  margin: 0 10px 20px 10px;
  border-bottom: 3px solid lightgrey;
  padding: 10px;
`
const Title = styled.h5``

const Content = styled.div`
  padding: 10px;
  margin: 0 10px;
  border-bottom: 1px solid lightgrey;
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  & > button {
    align-self: flex-start;
  }
`

const READ_NOTIFICATION_MUTATION = gql`
  mutation ReadNotification($where: NotificationWhereUniqueInput!) {
    readNotification(where: $where) {
      readAt
      id
    }
  }
`

let Notification = ({ created, content, readNotification, close }) => (
  <Container>
    <Created>
      <time>{format(created, 'dddd Do MMMM')}</time>
    </Created>
    {content.map(res => (
      <Content key={res.id} read={res.readAt}>
        {!res.readAt && <Dot />}
        <Title>{res.title}</Title>
        <FlexContainer>
          <p>{res.content}</p>
          {res.link && (
            <Link to={res.link} onClick={close}>
              <IconButton
                size="20px"
                icon="arrowRight"
                onClick={() => {
                  readNotification({ variables: { where: { id: res.id } } })
                }}
              />
            </Link>
          )}
        </FlexContainer>
      </Content>
    ))}
  </Container>
)

Notification = graphql(READ_NOTIFICATION_MUTATION, {
  name: 'readNotification'
})(Notification)

class SubscribeToMoreNotifications extends React.Component {
  componentDidMount() {
    this.props.subscribeToNewNotifications()
  }
  structureResults = () => {
    const result = []
    this.props.notifications.forEach(e => {
      const created = e.createdAt.slice(0, 10)
      const DateIndex = result.findIndex(
        res => res.created.slice(0, 10) === created
      )
      if (DateIndex === -1) {
        result.push({
          created,
          id: e.id,
          content: [
            {
              id: e.id,
              title: e.title,
              content: e.content,
              readAt: e.readAt,
              createdAt: e.createdAt,
              link: e.link,
              created
            }
          ]
        })
      } else {
        result[DateIndex].content.push({
          id: e.id,
          title: e.title,
          content: e.content,
          readAt: e.readAt,
          createdAt: e.createdAt,
          link: e.link,
          created
        })
      }
    })
    return result
      .map(day => {
        const content = day.content.sort((a, b) =>
          a.createdAt <= b.createdAt ? 1 : -1
        )
        return { ...day, content }
      })
      .sort((a, b) => (a.created <= b.created ? 1 : -1))
  }
  render() {
    return this.structureResults().map(notification => (
      <Notification
        key={notification.id}
        {...notification}
        close={this.props.close}
      />
    ))
  }
}

export default SubscribeToMoreNotifications
