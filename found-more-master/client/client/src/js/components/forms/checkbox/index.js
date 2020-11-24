import React from 'react'
import styled from 'styled-components'

import gql from 'graphql-tag'
import { graphql, withApollo } from 'react-apollo'
import Form, { Innerdiv } from '../../fragments/form'

const FormContainer = styled.div`
  & ${Innerdiv} {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-basis: 50%;
    & > label {
      order: 1;
      margin-left: 20px;
    }
    & input[type='checkbox'] {
      cursor: pointer;
      -webkit-appearance: none;
      appearance: none;
      border-radius: 2px;
      border: 1px solid ${({ theme }) => theme.colorPrimary};
      background-color: #fff;
      box-sizing: border-box;
      position: relative;
      box-sizing: content-box;
      width: 20px;
      height: 20px;
      padding: 3px;
    }
    & input[type='checkbox']:checked {
      background-color: ${({ theme }) => theme.colorPrimary};
      background-image: url('images/check.png');
      background-position: center;
      background-repeat: no-repeat;
    }
  }
  & > form {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
  }
`

const layout = {
  fields: {
    sendNotificationToEmail: {
      label: 'Send notifications to email',
      type: 'checkbox'
    }
  },
  submitLabel: 'Update'
}

const USER_QUERY = gql`
  {
    me {
      id
      sendNotificationToEmail
    }
  }
`
const UPDATE_USER = gql`
  mutation($input: UserUpdateInput!, $where: UserWhereUniqueInput!) {
    updateUser(where: $where, input: $input) {
      sendNotificationToEmail
    }
  }
`

class Checkbox extends React.Component {
  constructor() {
    super()
    this.state = {
      me: null
    }
  }
  async componentDidMount() {
    try {
      const {
        data: { me }
      } = await this.props.client.query({
        query: USER_QUERY,
        fetchPolicy: 'network-only'
      })
      this.setState({ me })
    } catch (e) {
      throw Error(e)
    }
  }
  render() {
    const { me } = this.state
    if (me !== null) {
      return (
        <FormContainer>
          <Form
            {...this.props}
            type="checkbox"
            layout={layout}
            initialValues={me}
            onSubmit={async ({ ...value }) => {
              try {
                const { sendNotificationToEmail } = value
                const {
                  data: { updateUser }
                } = await this.props.updateUser({
                  variables: {
                    where: { id: me.id },
                    input: { sendNotificationToEmail }
                  },
                  fetchPolicy: 'no-cache'
                })
                this.setState({
                  me: {
                    ...me,
                    sendNotificationToEmail: updateUser.sendNotificationToEmail
                  }
                })
                /*eslint-disable */
                alert('Your notification settings were successfully updated')
                /* eslint-enable */
              } catch (e) {
                throw new Error(e)
              }
            }}
          />
        </FormContainer>
      )
    }
    return null
  }
}

export default withApollo(
  graphql(UPDATE_USER, { name: 'updateUser' })(Checkbox)
)
