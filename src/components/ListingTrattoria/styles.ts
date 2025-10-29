import styled from 'styled-components'
import { media } from '../../style'

export const ContainerPizza = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  margin-top: 200px;

  ${media.mobile} {
    grid-template-columns: repeat(1, 1fr);
    margin-top: 70px;
  }

  ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
`
