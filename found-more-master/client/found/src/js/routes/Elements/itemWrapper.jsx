import styled from 'styled-components'

const ItemWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  min-height: 60px;
  padding: 10px;
  &:hover {
    border: 2px solid #1890ff;
  }
  ${({ isSelected }) =>
    isSelected &&
    `
    background-color: #74bcff!important;
  `}
  cursor: pointer;
`

export default ItemWrapper
