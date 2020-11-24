import React, { useState } from 'react'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import Title from '../fragments/title'
import Searchbar, { Container } from '../../components/fragments/searchbar'
import Orders from './orders'
import History from './history'
import useIsMaxWidth from '@/helpers/useIsMaxWidth'

const TabTitle = styled(Title)`
  color: #afafaf;
  border-bottom: 4px solid #afafaf;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.bpTablet}) {
    min-width: 95px;
  }
`
const StyledTabList = styled(TabList)`
  position: relative;
  & ${Container} {
    @media (min-width: ${({ theme }) => theme.bpLarge}) {
      position: absolute;
      right: 20px;
      display: inline-block;
      right: 0;
      bottom: 0px;
      top: 20px;
    }
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
  @media (max-width: ${({ theme }) => theme.bpUpToDesktop}) {
    width: calc(50% - 10px);
    &:last-child {
      margin-right: 0;
    }
  }
`
const TabContent = styled(TabPanel)`
  margin-top: ${({ theme }) => theme.spacingXs};
  & ${Container} {
    width: 100%;
  }
`

const OrderStatus = () => {
  const [isMobile] = useIsMaxWidth('1280px')
  const [search, setSearch] = useState('')
  const handleSearch = e => setSearch(e.target.value)

  const MobileSearch = () => (
    <>
      {isMobile && (
        <Searchbar
          placeholder="Search for orders"
          onChange={handleSearch}
          value={search}
        />
      )}
      <br />
    </>
  )

  return (
    <Tabs>
      <StyledTabList>
        <StyledTab>
          <TabTitle>Orders</TabTitle>
        </StyledTab>
        <StyledTab>
          <TabTitle>History</TabTitle>
        </StyledTab>
        {!isMobile && (
          <Searchbar
            placeholder="Search for orders"
            onChange={handleSearch}
            value={search}
          />
        )}
      </StyledTabList>
      <TabContent>
        <MobileSearch />
        <Orders search={search} />
      </TabContent>
      <TabContent>
        <MobileSearch />
        <History search={search} />
      </TabContent>
    </Tabs>
  )
}

export default OrderStatus
