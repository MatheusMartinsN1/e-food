import styled from 'styled-components'
import { media } from '../../style'

export const ListingContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  margin-top: 80px;
  margin: 80px 250px 0px 250px;

  ${media.mobile} {
    grid-template-columns: repeat(1, 1fr);
    margin: 80px 0px;
  }

  ${media.tablet} {
    margin: 80px 0px;
  }
`
