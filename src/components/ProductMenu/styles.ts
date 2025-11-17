import styled from 'styled-components'
import { Colors } from '../../style'

export const ListFood = styled.li`
  background-color: ${Colors.red};
  width: 320px;
  margin-bottom: 32px;
`

export const ImgFood = styled.img`
  width: 304px;
  height: 168px;
  object-fit: cover;
  padding: 8px 0px 0px;
  margin: 0px auto;
  display: block;
`

export const TitleFood = styled.h4`
  color: ${Colors.white};
  padding: 8px;
`

export const TextFood = styled.p`
  color: ${Colors.white};
  padding: 8px;
`

export const ButtonFood = styled.button`
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
