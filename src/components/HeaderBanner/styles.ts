import styled from 'styled-components'
import { Link } from 'react-router-dom'
import BannerTrattoria from '../../assets/images/banner_trattoria.png'
import { Colors } from '../../style'

export const ContainerList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding-top: 40px;
`

export const ListItem = styled.li`
  text-decoration: none;
  color: ${Colors.red};
  font-weight: bold;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }
`

export const LinksHeader = styled(Link)`
  text-decoration: none;
  color: ${Colors.red};
  font-weight: bold;
  font-size: 18px;
`

export const ButtonHeader = styled.button`
  text-decoration: none;
  color: ${Colors.red};
  font-weight: bold;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 18px;
`

export const Banner = styled.div`
  background-image: url(${BannerTrattoria});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 300px;
  z-index: 0;
  position: absolute;
  top: 240px;
`

export const TitleTrattoria = styled.h2`
  font-weight: bold;
  font-size: 2em;
  color: ${Colors.white};
  margin-left: 170px;
`

export const TitleItaliana = styled.h2`
  font-weight: 100;
  font-size: bold;
  color: ${Colors.white};
  font-style: italic;
  margin-bottom: 158px;
  margin-top: 25px;
  margin-left: 170px;
`
