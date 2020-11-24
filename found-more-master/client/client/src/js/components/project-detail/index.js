import React from 'react'
import styled from 'styled-components'
import { useQuery } from 'react-apollo'
import { Link, useLocation, useParams } from 'react-router-dom'
import IconButton from '../fragments/icon-button'
import Spacing from '../fragments/spacing'
import Title from '../fragments/title'
import Slideshow from '../fragments/slideshow'
import SpecificationList from './specs'
import LoadingSpinner from '../fragments/loading-spinner'
import useIsMaxWidth from '@/helpers/useIsMaxWidth'
import AmountChanger from './amountChanger'
import ORDERTEMPLATE_QUERY from './orderTemplateQuery.graphql'

const Grow = styled.div`
  flex-grow: 1;
`

const BackLink = styled.div`
  display: flex;
  text-decoration: none;
  align-items: center;
  h5 {
    margin-left: 10px;
  }
`

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
`

const SlideshowWrapper = styled.div`
  margin-top: 20px;
`

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
`

const Description = styled.p`
  flex-basis: 100%;
  margin: 0 0 20px 0;
  line-height: 24px;
  font-size: 16px;
  @media (min-width: ${({ theme }) => theme.bpLarge}) {
    flex-basis: calc(70% - 30px);
    margin: 0 30px 0 0;
  }
`

const Container = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`
const Stock = styled.div`
  display: flex;
  align-items: center;
`
const Box = styled.img`
  width: 15px;
  margin-right: 10px;
`
const Stocknumber = styled.h6`
  font-size: 15px;
  margin-right: 30px;
`

const ProjectDetail = () => {
  const { state } = useLocation()
  const { id } = useParams()
  const [isMobile] = useIsMaxWidth('640px')

  const { loading, error, data } = useQuery(ORDERTEMPLATE_QUERY, {
    variables: { id }
  })

  if (error) return null
  if (loading) return <LoadingSpinner />
  const { orderTemplate } = data

  return (
    <>
      <Container>
        <Title>{orderTemplate.properties.name}</Title>
        {orderTemplate.stock && (
          <Stock>
            <Box src="/images/box.svg" alt="Stock" />
            <Stocknumber>{orderTemplate.stock}</Stocknumber>
          </Stock>
        )}
      </Container>
      <Spacing space="32px" />
      <Header>
        <Link to={{ pathname: '/projects', state }}>
          <BackLink>
            <IconButton size="20px" icon="arrowLeft" />
            <h5>Back</h5>
          </BackLink>
        </Link>
        <Grow />
        {!isMobile && <AmountChanger {...orderTemplate} />}
      </Header>
      <SlideshowWrapper>
        <Slideshow
          images={orderTemplate.properties.images}
          width="70%"
          imageWidth="400px"
          imageMobileWidth="300px"
          height="300px"
        />
      </SlideshowWrapper>
      {isMobile && <AmountChanger {...orderTemplate} />}
      <Content>
        <Description>{orderTemplate.properties.description}</Description>
      </Content>
      <div>
        <h2>Specifications</h2>
        <SpecificationList {...data} />
      </div>
      <Spacing space="32px" />
    </>
  )
}

export default ProjectDetail
