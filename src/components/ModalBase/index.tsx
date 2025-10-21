import { ReactNode } from 'react'
import { ModalContent, ModalOverlayAll } from './styles'
import { useDispatch } from 'react-redux'
import { closeModal } from '../../store/modalSlice'

type Props = {
  children: ReactNode
}

const ModalBase = ({ children }: Props) => {
  const dispatch = useDispatch()

  return (
    <ModalOverlayAll onClick={() => dispatch(closeModal())}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalOverlayAll>
  )
}

export default ModalBase
