import styled from 'styled-components'
import { Colors, media } from '../../style'

export const TitleConfirmation = styled.h4`
  color: ${Colors.white};
  margin-top: 32px;
  margin-left: 8px;

  span {
    ${media.mobile} {
      display: block;
    }
  }
`

export const TextConfirmation = styled.p`
  color: ${Colors.white};
  margin: 18px 8px;
`
