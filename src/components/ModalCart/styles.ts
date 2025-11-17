import styled from 'styled-components'
import { Colors, media } from '../../style'

export const ImgCart = styled.img`
  width: 80px;
  object-fit: cover;

  ${media.mobile} {
    margin: 0px auto;
    display: block;
    width: 100px;
  }
`

export const CartItems = styled.div`
  display: flex;
  background-color: ${Colors.bege};
  padding: 9px;
  margin: 32px 8px 16px;
  position: relative;
  width: 344px;
  height: 100px;

  ${media.mobile} {
    width: 208px;
    height: 150px;
    margin: 32px auto;
    display: block;
  }
`

export const TextCart = styled.p`
  color: ${Colors.red};
  padding-left: 8px;
`

export const TitleCart = styled.h3`
  padding: 8px 0px 16px 8px;
  color: ${Colors.red};

  ${media.mobile} {
    text-align: center;
  }
`

export const Trash = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  bottom: 8px;
  right: 8px;
  cursor: pointer;
`

export const EmptyCart = styled.p`
  text-align: center;
  color: ${Colors.white};
  margin-top: 24px;
`

export const TotalValue = styled.p`
  color: ${Colors.white};
  display: flex;
  justify-content: space-between;
  padding: 0px 8px;
  margin-top: 40px;
  margin-bottom: 16px;
`

export const DeliveryButton = styled.button`
  background-color: ${Colors.white};
  color: ${Colors.red};
  border: none;
  display: block;
  font-weight: bold;
  cursor: pointer;
  width: 95%;
  margin: 0px auto;
  padding: 4px 0px;
  background-color: ${Colors.bege};
`

export const Warning = styled.p`
  color: ${Colors.white};
  font-weight: bold;
  text-align: center;
  margin-top: 16px;
  animation: fadeIn 0.5s ease;

  @keyframes fadeIn {
    from {
      transform: translateY(-16px);
    }
    to {
      transform: translateY(0);
    }
  }
`
