import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Colors, media } from '../../style'

export const ContainerList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding-top: 40px;

  ${media.mobile} {
    flex-direction: column;
    gap: 20px;
  }
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
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 300px;
  z-index: 0;
  position: absolute;
  top: 240px;

  ${media.mobile} {
    background-size: contain;
    top: 300px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 90px;
  }
`

export const TitleTrattoria = styled.h2`
  font-weight: bold;
  font-size: 2em;
  color: ${Colors.white};
  margin-left: 170px;

  ${media.mobile} {
    font-size: 1.5em;
    margin: 0px 8px;
  }
`

export const TitleItaliana = styled.h2`
  font-weight: 100;
  font-size: bold;
  color: ${Colors.white};
  font-style: italic;
  margin-bottom: 158px;
  margin-top: 25px;
  margin-left: 170px;

  ${media.mobile} {
    margin: 0px 8px;
  }
`
