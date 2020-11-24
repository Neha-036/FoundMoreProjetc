import React, { useState, useEffect } from 'react'
import { Query } from 'react-apollo'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { connect } from 'redux-zero/react'
import Title from '../fragments/title'
import Searchbar, { Container } from '../../components/fragments/searchbar'
import IconButton from '../fragments/icon-button'
import ProjectCategory from './projectcategory'
import Spacing from '../fragments/spacing'
import actions from '../select-stores/actions'
import AddOrderToStoresButton from './addOrderToStoresButton'
import ORDER_TEMPLATE_QUERY from './orderTemplateQuery.graphql'
import ROOT_ORDER_TEMPLATES_QUERY from './rootOrderTemplatesQuery.graphql'
import SEARCH_ORDER_TEMPLATES_QUERY from './searchOrderTemplatesQuery.graphql'
import useDomain from '@/helpers/useDomain'
import { useMeStore } from '@/stores/meStore'

const sortByIndex = (a, b) => {
  return a.sortIndex === b.sortIndex ? 0 : a.sortIndex >= b.sortIndex ? 1 : -1
}

const ProductListItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-top: 1px solid #bebebe;
  width: 100%;
  height: 92px;
  & > img {
    height: 80%;
    padding-right: 12px;
  }
`

const MainContainer = styled.div`
  overflow-y: auto;
  margin-bottom: 150px;
  ${ProductListItem} {
    :last-child {
      border-bottom: 1px solid ${({ theme }) => `${theme.colorText}99`};
    }
  }
  & ${Container} {
    position: relative;
    width: 100%;
    margin-bottom: ${({ theme }) => theme.spacingSm};
    @media (min-width: ${({ theme }) => theme.bpDesktop}) {
      position: absolute;
      right: 35px;
      top: 20px;
      width: 27%;
    }
  }
`

const CampaignContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > h2 {
    flex-basis: 100%;
  }
`
const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: ${({ theme }) => theme.colorPrimary};
`
const TextCampaign = styled.h2`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  padding: 0 10px;
  color: #fff;
  text-transform: uppercase;
  font-size: 14px;
  color: #fff;
  @media (max-width: ${({ theme }) => theme.bpUpToTablet}) {
    font-size: 16px;
  }
`

const CampaignBlock = styled.div`
  position: relative;
  overflow: hidden;
  min-width: 150px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 20px;
  cursor: pointer;
  transition: all 0.2s ease-out;
  flex-basis: 100%;

  padding-bottom: ${({ blockAmount }) => (blockAmount <= 6 ? '33%' : '25%')};

  &:hover {
    & ${Overlay} {
      opacity: 1;
    }
    & ${TextCampaign} {
      z-index: 5;
      color: ${({ theme }) => theme.colorSecondary};
      background-color: transparent;
      top: 50%;
      left: 50%;
      bottom: unset;
      transform: translate(-50%, -50%);
      text-align: center;
    }
  }

  @media (min-width: ${({ theme }) => theme.bpTablet}) {
    margin-right: 20px;
    flex-basis: calc(50% - 10px);
    &:nth-child(2n) {
      margin-right: 0;
    }
  }
  @media (min-width: ${({ theme }) => theme.bpDesktop}) {
    &:nth-child(2n) {
      margin-right: ${({ blockAmount }) => (blockAmount <= 6 ? '0' : '20px')};
    }
    &:nth-child(3n) {
      margin-right: ${({ blockAmount }) => (blockAmount > 6 ? '0' : '20px')};
    }
    flex-basis: ${({ blockAmount }) =>
      blockAmount > 6 ? 'calc(33% - 13.33333px)' : 'calc(50% - 10px)'};
  }

  @media (min-width: ${({ theme }) => theme.bpLarge}) {
    &:nth-child(2n) {
      margin-right: 20px;
    }
    &:nth-child(3n) {
      margin-right: ${({ blockAmount }) => (blockAmount <= 6 ? '0' : '20px')};
    }
    &:nth-child(4n) {
      margin-right: ${({ blockAmount }) => (blockAmount > 6 ? '0' : '20px')};
    }
    flex-basis: ${({ blockAmount }) =>
      blockAmount <= 6 ? 'calc(33% - 13.33333px)' : 'calc(25% - 15px)'};
  }
`

const BreadCrumbs = styled.div`
  display: flex;
  align-items: end;
  margin-bottom: 20px;
`

const BreadCrumb = styled.div`
  display: flex;
  margin: 10px 5px 10px 0;
  color: ${({ theme }) => theme.colorText};
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.colorPrimary};
  }
  & > button {
    background-color: unset;
  }
`
const BreadCrumbCurrent = styled(BreadCrumb)`
  pointer-events: none;
  align-items: center;
  color: ${({ theme }) => theme.colorPrimary};
  line-height: 19px;
`

const Header = styled.div`
  position: sticky;
  top: 0px;
  background: white;
  width: 100%;
  z-index: 10;
`

const ProjectsList = () => {
  const [current, setCurrent] = useState({ id: null, name: null })
  const [history, setHistory] = useState([])
  const [search, setSearch] = useState('')
  const { state } = useLocation()
  const domain = useDomain()
  const { storeLanguages } = useMeStore()

  const { id } = current

  useEffect(() => {
    if (state && (state.current || {}).id && (state.current || {}).name) {
      setCurrent(state.current)
      if (state.history) {
        setHistory(state.history)
      } else {
        setHistory([{ name: null, id: null }])
      }
    }
  }, [])

  const setCurrentProject = currentProject => {
    setHistory([...history, current])
    setCurrent(currentProject)
  }

  const handleSearch = e => setSearch(e.target.value)

  const goTo = index => {
    setCurrent({ id: history[index].id, name: history[index].name })
    setHistory(history.slice(0, index))
  }

  const OrderTemplateBlock = (props, _, arr) => {
    console.log(props)
    const { images } = props.properties
    const blockAmount = arr.filter(item => !item.orderable).length
    const {
      id,
      deletedAt,
      properties: { name },
      orderable
    } = props
    if (deletedAt) return null
    return orderable ? (
      <ProjectCategory {...props} state={{ current, history }} key={id} />
    ) : (
      <CampaignBlock
        key={id}
        onClick={() => setCurrentProject({ id, name })}
        style={{
          backgroundImage:
            images && images.length > 0
              ? `url(${images[images.length - 1].location})`
              : 'url(/images/no-image.jpg)'
        }}
        blockAmount={blockAmount}
      >
        <TextCampaign>{name}</TextCampaign>
        <Overlay />
      </CampaignBlock>
    )
  }
  const renderOrderTemplates = ({ loading, error, data }) => {
    if (!loading && !error) {
      if (data.orderTemplates) {
        return [
          ...data.orderTemplates
            .sort(sortByIndex)
            .filter(item => !item.orderable)
            .map(OrderTemplateBlock),
          ...data.orderTemplates
            .sort(sortByIndex)
            .filter(item => item.orderable)
            .map(OrderTemplateBlock)
        ]
      }
      if (data.orderTemplate) {
        return (
          <>
            {data.orderTemplate.children
              .filter(item => !item.orderable)
              .sort(sortByIndex)
              .map(OrderTemplateBlock)}
            {data.orderTemplate.children
              .filter(item => item.orderable)
              .sort(sortByIndex)
              .map(OrderTemplateBlock)}
          </>
        )
      }
    }
    return null
  }

  const querySwitcher = () => {
    if (search) {
      return {
        query: SEARCH_ORDER_TEMPLATES_QUERY,
        variables: {
          search,
          storeLanguages,
          domain,
          from: new Date().toISOString(),
          until: new Date().toISOString()
        }
      }
    }
    if (id) {
      return {
        query: ORDER_TEMPLATE_QUERY,
        variables: {
          where: { id },
          storeLanguages,
          from: new Date().toISOString(),
          until: new Date().toISOString()
        }
      }
    }
    return {
      query: ROOT_ORDER_TEMPLATES_QUERY,
      variables: {
        storeLanguages,
        domain,
        from: new Date().toISOString(),
        until: new Date().toISOString()
      }
    }
  }

  const renderBreadCrumbs = history.concat([current]).map(({ name, id }, i) => (
    <React.Fragment key={id}>
      {id !== current.id ? (
        <BreadCrumb onClick={() => goTo(i)}>
          {name || 'Projects'}
          <IconButton icon="arrowRight" size={17} invert />
        </BreadCrumb>
      ) : (
        <BreadCrumbCurrent>{name}</BreadCrumbCurrent>
      )}
    </React.Fragment>
  ))

  return (
    <>
      <Header>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Title>{name || 'Projects'}</Title>
          <Searchbar
            placeholder="Search for a project"
            onChange={handleSearch}
            value={search}
          />
        </div>
        <Spacing space="20px" />
        <BreadCrumbs>{!search && renderBreadCrumbs}</BreadCrumbs>
      </Header>
      <MainContainer>
        <CampaignContainer>
          <Query
            query={querySwitcher().query}
            variables={querySwitcher().variables}
          >
            {renderOrderTemplates}
          </Query>
        </CampaignContainer>
      </MainContainer>
      <AddOrderToStoresButton />
    </>
  )
}

export default connect(null, actions)(ProjectsList)
