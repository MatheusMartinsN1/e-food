import styled from 'styled-components'
import { ModalOverlay } from '../ModalPizza/styles'
import { Colors } from '../../style'

export const ModalOverlayAll = styled(ModalOverlay)`
  justify-content: end;
`

export const ModalContent = styled.div`
  background-color: ${Colors.red};
  width: 360px;
  height: 100%;
`
