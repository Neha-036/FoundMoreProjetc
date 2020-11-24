import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export default createGlobalStyle`
  ${reset}
  @import url('https://use.fontawesome.com/releases/v5.3.1/css/solid.css');
  @import url('https://use.fontawesome.com/releases/v5.3.1/css/fontawesome.css');
  @font-face {
    font-family: 'Neue-Haas';
    src: url('../fonts/Linotype - Neue Haas Unica Pro.eot?#iefix') format('embedded-opentype'),
      url('/fonts/Linotype - Neue Haas Unica Pro.ttf') format('truetype');
    font-style: normal;
    font-weight: 100;
  }
  @font-face {
    font-family: 'Neue-Haas-Bold';
    src: url('../fonts/Linotype - Neue Haas Unica Pro Bold.eot?#iefix') format('embedded-opentype'),
      url('/fonts/Linotype - Neue Haas Unica Pro Bold.ttf') format('truetype');
    font-style: normal;
    font-weight: 800;
  }

  body,
  html {
    font-family: ${({ theme }) => theme.fontNormal};
    text-rendering: optimizeLegibility;
    -ms-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: none;
    -moz-osx-font-smoothing: grayscale;
  }
  h1 {
    font-family: ${({ theme }) => theme.fontBold};
    font-size: 44px;
    line-height: 56px;
    color: ${({ theme }) => theme.colorPrimary};
    @media screen and (min-width: ${({ theme }) => theme.bpUpToDesktop}) {
      font-size: 80px;
      line-height: 90px;
    }
  }
  h2 {
    font-family: ${({ theme }) => theme.fontNormal};
    font-size: 24px;
    line-height: 36px;
    color: ${({ theme }) => theme.colorText};
    @media screen and (min-width: ${({ theme }) => theme.bpTablet}) {
      font-size: 24px;
      line-height: 36px;
    }
  }
  h3 {
    font-family: ${({ theme }) => theme.fontNormal};
    font-size: 24px;
    line-height: 28px;
    color: ${({ theme }) => theme.colorPrimary};
    @media screen and (min-width: ${({ theme }) => theme.bpTablet}) {
      font-size: 36px;
      line-height: 48px;
    }
  }
  h4 {
    font-family: ${({ theme }) => theme.fontBold};
    font-size: 16px;
    line-height: 28px;
    color: ${({ theme }) => theme.colorPrimary};
    @media screen and (min-width: ${({ theme }) => theme.bpTablet}) {
      font-size: 16px;
      line-height: 40px;
    }
  }
  h5 {
    font-family: ${({ theme }) => theme.fontBold};
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }) => theme.colorText};
    @media screen and (min-width: ${({ theme }) => theme.bpTablet}) {
      font-size: 16px;
      line-height: 24px;
    }
  }
  h6 {
    font-family: ${({ theme }) => theme.fontBold};
    font-size: 12px;
    line-height: 26px;
    color: ${({ theme }) => theme.colorText};
    @media screen and (min-width: ${({ theme }) => theme.bpTablet}) {
      font-size: 12px;
      line-height: 26px;
    }
  }
  p {
    color: ${({ theme }) => theme.colorText};
    font-family: ${({ theme }) => theme.fontNormal};
    font-size: 12px;
    line-height: 24px;
    @media screen and (min-width: ${({ theme }) => theme.bpTablet}) {
      font-size: 12px;
      line-height: 32px;
    }
  }
  a {
    font-family: ${({ theme }) => theme.fontNormal};
    color: ${({ theme }) => theme.colorPrimary};
    cursor: pointer;
    font-size: 12px;
    line-height: 24px;
    text-decoration: none;
    @media screen and (min-width: ${({ theme }) => theme.bpTablet}) {
      font-size: 12px;
      line-height: 32px;
    }
  }
  strong {
    color: ${({ theme }) => theme.colorText};
    margin: 0 0 20px 0;
  }
  hr {
    background-color: ${({ theme }) => theme.colorText + '99'};
    height: 2px;
    border: none;
  }
`
