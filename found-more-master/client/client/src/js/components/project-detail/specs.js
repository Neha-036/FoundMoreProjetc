import React from 'react'
import styled from 'styled-components'

const Specifications = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid grey;
  @media (min-width: ${({ theme }) => theme.bpDesktop}) {
    height: 200px;
  }
`
const Specification = styled.div`
  width: 100%;
  border-top: 1px solid grey;
  @media (min-width: ${({ theme }) => theme.bpDesktop}) {
    width: calc(50% - 10px);
    margin-right: 10px;
  }
`

const SpecificationList = props => {
  const { orderTemplate } = props
  const {
    weightKG,
    widthMm,
    heightMm,
    depthMm,
    color,
    material
  } = orderTemplate.properties
  return (
    <Specifications>
      <Specification>
        <p>
          <b>Width</b>
        </p>
        <p>{widthMm || 'not provided'} mm</p>
      </Specification>
      <Specification>
        <p>
          <b>Height</b>
        </p>
        <p>{heightMm || 'not provided'} mm</p>
      </Specification>
      <Specification>
        <p>
          <b>Weight</b>
        </p>
        <p>{weightKG || 'not provided'} kg</p>
      </Specification>
      <Specification>
        <p>
          <b>Depth</b>
        </p>
        <p>{depthMm || 'not provided'} mm</p>
      </Specification>
      <Specification>
        <p>
          <b>Color</b>
        </p>
        <p>{color || 'not provided'}</p>
      </Specification>
      <Specification>
        <p>
          <b>Material</b>
        </p>
        <p>{material || 'not provided'}</p>
      </Specification>
    </Specifications>
  )
}

export default SpecificationList
