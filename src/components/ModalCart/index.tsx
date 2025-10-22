import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { RootState } from '../../store/store'
import ModalBase from '../ModalBase'
import {
  CartItems,
  Trash,
  ImagePizza,
  TitleCart,
  TextCart,
  EmptyCart,
  TotalValue,
  DeliveryButton,
  Warning,
} from './styles'
import lixeira from '../../assets/images/lixeira.png'
import { clearCart } from '../../store/cartSlice'
import { openModal } from '../../store/modalSlice'

const ModalCart = () => {
  const dispatch = useDispatch()
  const items = useSelector((state: RootState) => state.cart.items)
  const total = items.reduce((acc, item) => acc + item.price, 0)
  const activeModal = useSelector((state: RootState) => state.modal.activeModal)
  const isOpen = activeModal === 'cart'
  const [warning, setWarning] = useState('')

  useEffect(() => {
    if (items.length > 0 && warning) {
      setWarning('')
    }
  },[items, warning])

  const deliveryContinue = () => {
    if (items.length === 0) {
      setWarning('O carrinho está vazio! Adicione algum item antes de continuar.')
      return
    } else {
      setWarning('')
      dispatch(openModal('address'))
    }
  }

  if (!isOpen) return null

  return (
    <ModalBase>
      {items.length === 0 && <EmptyCart>O carrinho está vazio</EmptyCart>}
      {items.map((item) => (
          <CartItems key={item.id}>
            <ImagePizza src={item.image} alt={item.title} />
            <div>
              <TitleCart>{item.title}</TitleCart>
              <TextCart>R$ {item.price.toFixed(2)}</TextCart>
            </div>
            <Trash
              src={lixeira}
              alt="Lixeira"
              onClick={() => dispatch(clearCart(item.id))}
            />
          </CartItems>
      ))}
      <div>
        <TotalValue>
          Valor total <span>R$ {total.toFixed(2)} </span>
        </TotalValue>
        <DeliveryButton onClick={deliveryContinue}>
          Continuar com a entrega
        </DeliveryButton>
        {warning && (
          <Warning>{warning}</Warning>
        )}
      </div>
    </ModalBase>
  )
}

export default ModalCart
