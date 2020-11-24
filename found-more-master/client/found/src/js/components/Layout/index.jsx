import React from 'react'
import { Layout } from 'antd'
import Sider from './Sider'

export default ({ children }) => (
  <Layout style={{ minHeight: '100vh' }}>
    <Sider theme="light" />
    <Layout>
      <Layout.Content
        style={{
          margin: '24px 16px',
          marginLeft: 220,
          padding: 24,
          background: '#fff',
          minHeight: 280,
          overflowX: 'auto'
        }}
      >
        {children}
      </Layout.Content>
    </Layout>
  </Layout>
)
