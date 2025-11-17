import { ReactNode } from 'react'
import { ModalOverlay, ModalContent, CloseButton } from './styles'

type Props = {
  children: ReactNode
  onClose: () => void
}

const ModalPizza = ({ children, onClose }: Props) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  )
}

export default ModalPizza
