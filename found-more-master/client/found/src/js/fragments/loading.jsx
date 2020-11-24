import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { Icon } from 'antd'

const LoadingWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(230, 230, 230, 0.5);
  z-index: 10000;
`

export const Loading = () =>
  ReactDOM.createPortal(
    <LoadingWrapper>
      <Icon type="loading" style={{ fontSize: 30 }} spin />
    </LoadingWrapper>,
    document.getElementById('root')
  )

export const setLoading = Component => props => {
  const [loading, setLoading] = React.useState(false)
  return (
    <React.Fragment>
      {loading && <Loading />}
      <Component {...props} setLoading={setLoading} />
    </React.Fragment>
  )
}
