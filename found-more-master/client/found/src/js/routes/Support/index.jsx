import React from 'react'
import { Query, Mutation } from 'react-apollo'
import { Table, Divider, Popconfirm } from 'antd'
import { SpaceBetween } from '@/fragments'
import supportPages from 'Common/graphql/queries/supportPages.graphql'
import deleteSupportPage from 'Common/graphql/mutations/deleteSupportPage.graphql'
import AddSupportPageModal from './addModal'
import EditSupportPageModal from './editModal'

const columns = [
  {
    title: 'Title',
    dataIndex: 'title'
  },
  {
    render: ({ id }) => (
      <span>
        <EditSupportPageModal id={id} />
        <Divider type="vertical" />
        <Mutation mutation={deleteSupportPage}>
          {deleteSupportPage => (
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() =>
                deleteSupportPage({
                  variables: { where: { id } },
                  refetchQueries: [{ query: supportPages }]
                })
              }
            >
              <a>Delete</a>
            </Popconfirm>
          )}
        </Mutation>
      </span>
    )
  }
]

export default () => (
  <React.Fragment>
    <SpaceBetween>
      <h1>Support Pages</h1>
      <AddSupportPageModal />
    </SpaceBetween>
    <Query query={supportPages}>
      {({ loading, error, data }) =>
        !error && (
          <Table
            loading={loading}
            dataSource={data.supportPages}
            rowKey="id"
            columns={columns}
          />
        )
      }
    </Query>
  </React.Fragment>
)
