import React from 'react'
import styled from 'styled-components'
import { STATUSES } from 'Common/constants'

const StatusContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.bpDesktop}) {
    margin-top: 50px;
  }
`

const Step = styled.li`
  list-style: none;
  display: inline-block;
  width: 80%;
  position: relative;
  line-height: 32px;
  &:before {
    content: '';
    background-color: white;
    width: 15px;
    height: 15px;
    line-height: 30px;
    border: 1px solid #ddd;
    display: inline-block;
    margin-right: 10px;
    ${({ active, color }) => `
      border: 1px solid ${color};
      ${active && `background-color: ${color}`};
    `}
  }
  &:after {
    content: '';
    position: absolute;
    width: 1px;
    height: 20px;
    background-color: #5a5a5a;
    top: -12px;
    left: 7px;
  }
  &:first-child:after {
    content: none;
  }
  & > p {
    display: inline-block;
  }
  @media (min-width: ${({ theme }) => theme.bpLarge}) {
    width: 15%;
    &:before {
      display: block;
      margin-right: initial;
    }
    &:after {
      content: '';
      width: calc(100% - 15px);
      height: 1px;
      top: 7.5px;
      left: calc(-100% + 15px);
    }
  }
`
const ProgressBar = styled.ul`
  margin-top: 20px;
`

const StepCancelled = styled(Step)`
  &:before {
    border: 1px solid red;
    background-color: red;
  }
`

export default ({ status }) => {
  const renderSteps = STATUSES.filter(
    ({ value }) =>
      value !== (status !== 'INSTALLED' ? 'INSTALLED' : null) &&
      value !== 'CANCELLED'
  ).reduce((acc, curr, i, arr) => {
    const activeIndex = arr.findIndex(({ value }) => value === status)
    return [
      ...acc,
      <Step color={curr.color} key={curr.value} active={i <= activeIndex}>
        <p>{curr.label}</p>
      </Step>
    ]
  }, [])
  return (
    <StatusContainer>
      <p>
        <b>Status</b>
      </p>
      <ProgressBar>
        {status !== 'CANCELLED' ? (
          renderSteps
        ) : (
          <StepCancelled>
            <p>Cancelled</p>
          </StepCancelled>
        )}
      </ProgressBar>
    </StatusContainer>
  )
}
