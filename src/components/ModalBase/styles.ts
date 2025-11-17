import styled from 'styled-components'
import { ModalOverlay } from '../ModalFood/styles'
import { Colors, media } from '../../style'

export const ModalOverlayAll = styled(ModalOverlay)`
  justify-content: end;

  ${media.mobile} {
    justify-content: normal;
  }
`

export const ModalContent = styled.div`
  background-color: ${Colors.red};
  width: 360px;
  height: 100%;

  ${media.mobile} {
    width: 220px;
    position: absolute;
  }
`
