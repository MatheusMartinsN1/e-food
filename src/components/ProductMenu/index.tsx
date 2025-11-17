import { useDispatch } from 'react-redux'
import { addItem } from '../../store/cartSlice'
import {
  ImgFood,
  ListFood,
  ButtonFood,
  TextFood,
  TitleFood
} from './styles'
import { useModal } from '../../hooks/useModa'
import ModalPizza from '../ModalFood'

export type Props = {
  title: string
  image: string
  description: string
  price: number
  id: number
  porcao: string
}

const ProductMenu = ({
  description,
  image,
  title,
  price,
  id,
  porcao
}: Props) => {
  const { isOpen, toggleModal } = useModal()
  const dispatch = useDispatch()

  const AddToCart = () => {
    dispatch(addItem({ price, id, image, title }))
    toggleModal()
  }

  const getDescricao = (description: string) => {
    if (description.length > 258) {
      return description.slice(0, 255) + '...'
    }
    return description
  }

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  return (
    <>
      <ListFood>
        <ImgFood src={image} alt={title} />
        <TitleFood>{title}</TitleFood>
        <TextFood>{getDescricao(description)}</TextFood>
        <ButtonFood type="button" onClick={toggleModal}>
          Adicionar ao carrinho
        </ButtonFood>
      </ListFood>

      {isOpen && (
        <ModalPizza onClose={toggleModal}>
          <img src={image} alt={title} />
          <div>
            <h3>{title}</h3>
            <p>
              {description} <span>{porcao}</span>
            </p>
            <button onClick={AddToCart}>
              Adicionar ao carrinho - {formataPreco(price)}
            </button>
          </div>
        </ModalPizza>
      )}
    </>
  )
}

export default ProductMenu
