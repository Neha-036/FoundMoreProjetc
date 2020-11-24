import React from 'react'
import { format } from 'date-fns'
import { Form, Button } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import { graphql } from 'react-apollo'
import me from 'Common/graphql/queries/me.graphql'
import order from 'Common/graphql/queries/order.graphql'

export default Form.create()(
  graphql(me)(({ comments, id, form, updateOrder, data }) => (
    <React.Fragment>
      {comments.length > 0 ? (
        comments.map(({ id, user, content, createdAt }) => (
          <p key={id}>
            <strong>{format(createdAt, 'D-MMM H:mm')}</strong>
            <br />
            {`${user.firstName.charAt(0)}. ${user.lastName} (${
              user.email
            }): ${content}`}
          </p>
        ))
      ) : (
        <p>There are no comments yet</p>
      )}
      <Form
        onSubmit={e => {
          e.preventDefault()
          form.validateFields((err, values) => {
            if (!err) {
              updateOrder({
                variables: {
                  where: { id },
                  input: {
                    comments: {
                      create: {
                        content: values.comment,
                        user: { connect: { id: data.me.id } }
                      }
                    }
                  }
                },
                refetchQueries: [{ query: order, variables: { where: { id } } }]
              })
            }
          })
          form.setFieldsValue({ comment: '' })
        }}
      >
        <Form.Item>
          {form.getFieldDecorator('comment', {
            rules: [{ required: true, message: 'Please provide a comment' }]
          })(<TextArea placeholder="Lorem ipsum dolor" />)}
        </Form.Item>
        <Button htmlType="submit">Place comment</Button>
      </Form>
    </React.Fragment>
  ))
)
