import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacingXs};

  @media (min-width: ${({ theme }) => theme.bpTablet}) {
    padding: 0 ${({ theme }) => theme.spacingSm};
  }

  @media (min-width: ${({ theme }) => theme.bpDesktop}) {
    padding: 0 ${({ theme }) => theme.spacingLg};
  }
`
