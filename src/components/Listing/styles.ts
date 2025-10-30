import styled from 'styled-components'
import { media } from '../../style'

export const ListingContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  margin: 80px 150px 0px;
  padding: 0px;
  gap: 4px;

  ${media.mobile} {
    grid-template-columns: repeat(1, 1fr);
    margin: 80px 0px;
  }

  ${media.tablet} {
    margin: 80px 0px;
  }
`
