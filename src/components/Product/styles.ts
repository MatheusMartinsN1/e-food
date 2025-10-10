import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Colors } from '../../style'

export const ListItem = styled.div`
  position: relative;
  border: 1px solid ${Colors.red};
  border-top: none;
  width: 474px;
  background-color: ${Colors.white};
  margin-bottom: 48px;

  div:nth-of-type(2) {
    display: flex;
    justify-content: space-between;
  }
`

export const FoodImage = styled.img`
  width: 473px;
`

export const TitleFoods = styled.h2`
  font-family: 'Roboto', sans-serif;
  color: ${Colors.red};
  padding: 8px 0px 0px 7px;
`

export const InfoFoods = styled.p`
  padding: 20px 8px;
  color: ${Colors.red};
`

export const ButtonContainer = styled.button`
  padding: 4px 6px;
  margin: 0px 0px 8px 8px;
  background-color: ${Colors.red};
  border: none;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background-color: #d34646ff;
    transform: scale(1.1);
  }
`

export const Button = styled(Link)`
  color: ${Colors.white};
  text-decoration: none;
`

export const Assessment = styled(TitleFoods)`
  padding-right: 4px;
`

export const CategoryContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
`

export const Category = styled.span`
  padding: 4px 6px;
  margin: 0px 0px 8px 8px;
  background-color: ${Colors.red};
  border: none;
  color: ${Colors.white};
`
