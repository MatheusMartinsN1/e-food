import { createGlobalStyle } from 'styled-components'

export const Colors = {
  red: '#E66767',
  bege: '#FFF8F2',
  bege2: '#FFEBD9',
  white: '#FFF'
}

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  tabletMax: '1024px'
}

export const media = {
  mobile: `@media (max-width: ${breakpoints.mobile})`,
  tablet: `@media (min-width: ${breakpoints.tablet}) and (max-width:${breakpoints.tabletMax})`
}

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Roboto', sans-serif;
    gap: 0px;
  }

  body {
    background-color: ${Colors.bege};
  }
`
