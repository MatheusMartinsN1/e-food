import styled from 'styled-components'
import { media } from '../../style'

export const ListingContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  margin-top: 80px;

  ${media.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }

  ${media.tablet} {
    grid-template-columns: ;
  }
`
