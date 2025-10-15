import styled from 'styled-components'
import { Colors } from '../../style'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`

export const ModalContent = styled.div`
  background-color: ${Colors.red};
  border-radius: 12px;
  padding: 24px;
  max-width: 1024px;
  max-height: 344px;
  display: flex;
  align-items: center;
  width: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  position: relative;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      transform: translateY(-10px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  div {
    margin-left: 24px;
  }

  img {
    width: 280px;
    border-radius: 8px;
  }

  h3 {
    margin-bottom: 12px;
    color: ${Colors.white};
  }

  p {
    color: ${Colors.white};
    margin: 16px 0px;
  }

  button:nth-child(3) {
    padding: 4px 8px;
    border: none;
    color: ${Colors.red};
    cursor: pointer;
  }

  span {
    display: block;
    margin: 20px 0px 14px;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 12px;
  background: transparent;
  color: ${Colors.white};
  border: none;
  font-size: 24px;
  cursor: pointer;
`
