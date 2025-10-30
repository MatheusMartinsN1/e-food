import styled from 'styled-components'
import { media } from '../../style'

export const ContainerPizza = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  align-items: center;
  margin: 200px 190px 0px;
  gap: 4px;

  ${media.mobile} {
    grid-template-columns: repeat(1, 1fr);
    margin: 70px 0px;
  }

  ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
    margin: 200px 0px;
  }
`
