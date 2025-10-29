import styled from 'styled-components'
import { FieldNumber } from '../ModalDelivery/styles'
import { media } from '../../style'

export const FieldNumberCard = styled(FieldNumber)`
  width: 228px;

  ${media.mobile} {
    width: 200px;
  }
`

export const FieldNumberCvv = styled(FieldNumber)`
  width: 88px;
`

export const FieldsContainer = styled.div``
