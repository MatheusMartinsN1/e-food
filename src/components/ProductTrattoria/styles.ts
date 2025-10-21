import styled from 'styled-components'
import { Colors } from '../../style'

export const ListPizza = styled.li`
  background-color: ${Colors.red};
  width: 320px;
  margin-bottom: 32px;
`

export const ImgPizza = styled.img`
  width: 304px;
  padding: 8px 0px 0px;
  margin: 0px auto;
  display: block;
`

export const TitlePizza = styled.h4`
  color: ${Colors.white};
  padding: 8px;
`

export const TextPizza = styled.p`
  color: ${Colors.white};
  padding: 8px;
`

export const ButtonPizza = styled.button`
  background-color: ${Colors.bege2};
  color: ${Colors.red};
  width: 304px;
  border: none;
  display: block;
  margin: 0px auto 8px;
  padding: 4px;
  cursor: pointer;
  font-weight: bold;
`
