import styled from 'styled-components'
import { Colors } from '../../style'
import { Logo } from '../Header/styles'

export const ContainerFooter = styled.div`
  text-align: center;
  margin-top: 120px;
  background-color: ${Colors.bege2};
`

export const LogoFooter = styled(Logo)`
  padding-top: 40px;
`

export const SociaisLinks = styled.div`
  padding-top: 34px;

  img {
    padding-right: 8px;
  }
`

export const TextFooter = styled.p`
  padding-top: 80px;
  padding-bottom: 40px;
  color: ${Colors.red};
`
