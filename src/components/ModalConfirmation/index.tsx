import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import ModalBase from '../ModalBase'
import { TextConfirmation, TitleConfirmation } from './styles'
import { FormButton } from '../ModalDelivery/styles'
import { clearOrderId } from '../../store/orderSlice'
import { closeModal } from '../../store/modalSlice'
import { clearCart } from '../../store/cartSlice'

const ModalConfirmation = () => {
  const activeModal = useSelector((state: RootState) => state.modal.activeModal)
  const isOpen = activeModal === 'confirmation'

  const orderId = useSelector((state: RootState) => state.order.orderId)
  const dispatch = useDispatch()

  const handleFinish = () => {
    dispatch(clearCart())
    dispatch(clearOrderId())
    dispatch(closeModal())
  }

  if (!isOpen) return null

  return (
    <ModalBase>
      <TitleConfirmation>
        Pedido realizado - <span>{orderId}</span>
      </TitleConfirmation>

      <TextConfirmation>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido.
      </TextConfirmation>

      <TextConfirmation>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras.
      </TextConfirmation>

      <TextConfirmation>
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </TextConfirmation>

      <TextConfirmation>
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </TextConfirmation>

      <FormButton onClick={handleFinish}>Concluir</FormButton>
    </ModalBase>
  )
}

export default ModalConfirmation
