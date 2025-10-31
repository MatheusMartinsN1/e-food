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

export const DevTag = styled.span`
  background-color: ${Colors.yellowDev};
  color: ${Colors.textDev};
  font-weight: bold;
  text-transform: uppercase;
  padding: 4px 6px;
  margin-left: 6px;
  justify-content: center;

  ${media.mobile} {
    display: flex;
    margin-top: 8px;
  }

  ${media.tablet} {
    display: flex;
    margin-top: 8px;
  }
`

export const InactiveButton = styled.div`
  background-color: ${Colors.yellowDev};
  color: ${Colors.textDev};
  padding: 4px 6px;
  border-radius: 4px;
  font-weight: bold;
  cursor: not-allowed;
  border: none;
`
