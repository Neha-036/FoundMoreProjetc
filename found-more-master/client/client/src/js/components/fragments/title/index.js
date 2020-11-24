import styled from 'styled-components'

const Title = styled.h2`
  display: inline-block;
  padding: 20px 0 10px 0;
  color: ${({ theme }) => theme.colorText};
  font-weight: lighter;
  border-bottom: 4px solid ${({ theme }) => theme.colorPrimary};
  min-width: 170px;
`

export default Title
