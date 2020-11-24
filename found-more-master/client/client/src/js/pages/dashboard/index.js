import React, { useState } from 'react'
import styled from 'styled-components'
import { useMutation, useQuery } from 'react-apollo'
import gql from 'graphql-tag'
import format from 'date-fns/format'
import { Link } from 'react-router-dom'
import Title from '../../components/fragments/title'
import OrderSidebar from '../../components/layout/order-sidebar'
import DashboardProjects from './projects'
import OpenOrders from './open-orders'
import Button from '../../components/fragments/button'
import LoadingSpinner from '../../components/fragments/loading-spinner'
import useIsMaxWidth from '@/helpers/useIsMaxWidth'

const ME_QUERY = gql`
  {
    me {
      id
      firstName
    }
  }
`
const CONTACT_PERSON_QUERY = gql`
  {
    brand(where: {domain: "${window.location.hostname.split('.')[0]}"}) {
      contactPerson {
        firstName
        lastName
        email
        phoneNumber
      }
    }
  }
`
const GET_FILE = gql`
  mutation($where: BrandWhereUniqueInput!) {
    brandExport(where: $where, type: default) {
      location
    }
  }
`

const Greeting = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`
const Contact = styled.div`
  margin-bottom: 20px;
`
const ContactLink = styled.a`
  color: ${({ theme }) => theme.colorText};
  &:nth-child(2) {
    margin-right: 10px;
  }
  &:nth-child(3) {
    margin-left: 10px;
  }
  @media (min-width: ${({ theme }) => theme.bpTablet}) {
    font-size: 16px;
    &:nth-child(2) {
      margin-right: 20px;
    }
    &:nth-child(3) {
      margin-left: 20px;
    }
  }
`
const ButtonWrapper = styled.div`
  width: 180px;
  padding: 20px 0 10px 0;
  @media (min-width: ${({ theme }) => theme.bpTablet}) {
    float: right;
  }
`

const Me = () => {
  const { loading, error, data } = useQuery(ME_QUERY)
  if (error || loading) return null
  return (
    <Greeting>
      <h2>Hello {data.me.firstName}</h2>
      <time>{format(new Date(), 'dddd Do MMMM')}</time>
    </Greeting>
  )
}

const ContactPerson = () => {
  const { loading, error, data } = useQuery(CONTACT_PERSON_QUERY)
  if (loading) return <LoadingSpinner />
  if (error) return <span>An error occured.</span>
  if (data.brand.contactPerson) {
    const { firstName, lastName, email, phoneNumber } = data.brand.contactPerson
    return (
      <Contact>
        <h6>
          {firstName} {lastName}
        </h6>
        {phoneNumber && (
          <ContactLink href={`tel:${phoneNumber}`}>{phoneNumber}</ContactLink>
        )}
        {email && phoneNumber && <React.Fragment> | </React.Fragment>}
        {email && <ContactLink href={`mailto:${email}`}>{email}</ContactLink>}
      </Contact>
    )
  }
  return null
}

const Dashboard = () => {
  const [loading, setLoading] = useState()
  const [isMobile] = useIsMaxWidth('639px')
  const [brandExport] = useMutation(GET_FILE)

  const handleDownload = async () => {
    try {
      setLoading(true)
      const res = await brandExport({
        variables: {
          where: { domain: window.location.hostname.split('.')[0] }
        }
      })
      setLoading(res === null)
      window.location = res.data.brandExport.location
    } catch (e) {
      setLoading(false)
      throw new Error(e)
    }
  }

  return (
    <OrderSidebar>
      {isMobile && (
        <ButtonWrapper>
          <Link to="/projects">
            <Button>ORDER PROJECTS</Button>
          </Link>
        </ButtonWrapper>
      )}
      <Me />
      <br />
      <Title>Projects</Title>
      {!isMobile && (
        <ButtonWrapper>
          <Link to="/projects">
            <Button>SEE ALL PROJECTS</Button>
          </Link>
        </ButtonWrapper>
      )}
      <DashboardProjects {...isMobile} />
      {isMobile && (
        <ButtonWrapper>
          <Link to="/projects">
            <Button>SEE ALL PROJECTS</Button>
          </Link>
        </ButtonWrapper>
      )}
      <br />
      <Title>Open Orders</Title>
      {!isMobile && (
        <ButtonWrapper>
          <Link to="/orders">
            <Button>SEE ALL ORDERS</Button>
          </Link>
        </ButtonWrapper>
      )}
      <OpenOrders />
      {isMobile && (
        <ButtonWrapper>
          <Link to="/orders">
            <Button>SEE ALL ORDERS</Button>
          </Link>
        </ButtonWrapper>
      )}
      <br />
      <Title>Do you have a question?</Title>
      <p>If you have any questions on your order, please contact us via:</p>
      <ContactPerson />
      <Title>Download</Title>
      <ButtonWrapper>
        <Button onClick={handleDownload}>Download</Button>
      </ButtonWrapper>
      {loading && <LoadingSpinner />}
      <p>You can download an excel file with your order history here.</p>
      <br />
    </OrderSidebar>
  )
}

export default Dashboard
