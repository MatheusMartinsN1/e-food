import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Colors, media } from '../../style'

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

  ${media.mobile} {
    width: 300px;
  }

  ${media.tablet} {
    width: 350px;
  }
`

export const FoodImage = styled.img`
  width: 473px;
  height: 218px;
  object-fit: cover;

  ${media.mobile} {
    width: 299px;
  }

  ${media.tablet} {
    width: 349px;
  }
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
  margin: 0px 0px 8px 8px;
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
  background-color: ${Colors.red};
  text-decoration: none;
  padding: 4px 6px;
`

export const Assessment = styled(TitleFoods)`
  padding-right: 4px;
`

export const CategoryContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  margin: 16px 16px 0px 0px;
`

export const Category = styled.span`
  padding: 4px 6px;
  margin-left: 8px;
  background-color: ${Colors.red};
  border: none;
  color: ${Colors.white};
`
