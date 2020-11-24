import React from 'react'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Title from '../fragments/title'
import LoadingSpinner from '../fragments/loading-spinner'

const TabTitle = styled(Title)`
  color: #afafaf;
  border-bottom: 4px solid #afafaf;
  @media (max-width: ${({ theme }) => theme.bpTablet}) {
    min-width: 95px;
  }
`
const StyledTab = styled(Tab)`
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &.react-tabs__tab--selected > ${TabTitle} {
    color: ${({ theme }) => theme.colorText};
    border-bottom: 4px solid ${({ theme }) => theme.colorPrimary};
  }
`
const TabContent = styled(TabPanel)`
  margin-top: ${({ theme }) => theme.spacingSm};
`
const Content = styled.div`
  font-size: 1.2em;
  & h4 {
    font-family: ${({ theme }) => theme.fontBold};
    color: ${({ theme }) => theme.colorText};
    font-size: 0.9em;
    line-height: 26px;
    margin-top: 30px;
    margin-bottom: 20px;
  }
  & p {
    font-size: 0.9em;
  }
`

const ContentSupp = styled.div`
  & p {
    line-height: 30px;
    font-size: 16px;
  }
  & a {
    font-size: 16px;
  }
`

const SUPPORT_QUERY = gql`
  query SupportQuery {
    brand(where: {domain: "${window.location.hostname.split('.')[0]}"}) {
      contactPerson {
        firstName
        lastName
        email
      }
    }
  }
`

const FAQ_QUERY = gql`
  query FaqQuery {
    supportPages {
      id
      title
      content
    }
  }
`

const Support = () => (
  <Query query={SUPPORT_QUERY}>
    {({ data, error, loading }) => {
      if (error) return 'Oops!'
      if (loading) return <LoadingSpinner />
      const { contactPerson } = data.brand
      return (
        <ContentSupp>
          <p>
            {' '}
            If you have any questions on your order, please contact us via:{' '}
          </p>
          <br />
          <p>
            {contactPerson.firstName} {contactPerson.lastName}
          </p>
          <a
            href={`mailto:
            ${contactPerson.firstName}
            ${contactPerson.lastName}
            <${contactPerson.email}>`}
          >
            {contactPerson.email}
          </a>
        </ContentSupp>
      )
    }}
  </Query>
)

const Faq = () => (
  <Query query={FAQ_QUERY}>
    {({ data, error, loading }) => {
      if (error) return 'Oops!'
      if (loading) return <LoadingSpinner />
      const { supportPages } = data
      const renderContent = supportPages.map(page => (
        <Content key={page.id}>
          <h4>
            <b>{page.title}</b>
          </h4>
          <p>{page.content}</p>
        </Content>
      ))
      return (
        <div>
          {supportPages.length ? (
            renderContent
          ) : (
            <p>There are no FAQ articles</p>
          )}
        </div>
      )
    }}
  </Query>
)

function SupportFaq() {
  return (
    <Tabs>
      <TabList>
        <StyledTab>
          <TabTitle>Support</TabTitle>
        </StyledTab>
        <StyledTab>
          <TabTitle>FAQ</TabTitle>
        </StyledTab>
      </TabList>
      <TabContent>
        <Support />
      </TabContent>
      <TabContent>
        <Faq />
      </TabContent>
    </Tabs>
  )
}

export default SupportFaq
