import styled from 'styled-components'
import backgroundImage from '../../assets/images/vector.jpg'
import { Colors, media } from '../../style'

export const HeaderContainer = styled.header`
  background-image: url(${backgroundImage});
  height: 384px;

  ${media.mobile} {
    width: 100%;
  }
`

export const Logo = styled.img`
  display: block;
  margin: 0px auto;
  padding-top: 40px;
`

export const Text = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 38px;
  text-align: center;
  margin: 0px auto;
  padding-top: 150px;
  width: 600px;
  color: ${Colors.red};

  ${media.mobile} {
    width: 100%;
    font-size: 20px;
  }
`
