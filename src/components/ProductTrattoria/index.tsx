import { useDispatch } from 'react-redux'
import { addItem } from '../../store/cartSlice'
import {
  ImgPizza,
  ListPizza,
  TitlePizza,
  ButtonPizza,
  TextPizza
} from './styles'

import ModalPizza from '../ModalPizza'
import { useState } from 'react'

export type Props = {
  title: string
  image: string
  description: string
  button: string
  price: number
}

const ProductTrattoria = ({ button, description, image, title, price }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  const AddToCart = () => {
    dispatch(addItem({ price }))
    toggleModal()
  }

  return (
    <>
      <ListPizza>
        <ImgPizza src={image} alt={title} />
        <TitlePizza>{title}</TitlePizza>
        <TextPizza>{description}</TextPizza>
        <ButtonPizza type="button" onClick={toggleModal}>
          {button}
        </ButtonPizza>
      </ListPizza>

      {isOpen && (
        <ModalPizza onClose={toggleModal}>
          <img src={image} alt={title} />
          <div>
            <h3>{title}</h3>
            <p>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião. <span>Serve: de 2 a 3 pessoas</span>
            </p>
            <button onClick={AddToCart}>Adicionar ao carrinho - R$ 60,90</button>
          </div>
        </ModalPizza>
      )}
    </>
  )
}

export default ProductTrattoria
