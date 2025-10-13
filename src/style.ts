import { createGlobalStyle } from 'styled-components'

export const Colors = {
  red: '#E66767',
  bege: '#FFF8F2',
  bege2: '#FFEBD9',
  white: '#FFF'
}

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    list-style: none;
  }

  body {
    background-color: ${Colors.bege};
  }
`


