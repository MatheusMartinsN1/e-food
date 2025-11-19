import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import Header from '../Header'
import logo from '../../assets/images/logo.png'

import {
  Banner,
  ContainerList,
  ListItem,
  LinksHeader,
  TitleTrattoria,
  TitleItaliana,
  ButtonHeader
} from './styles'
import { openModal } from '../../store/modalSlice'

import { getRestaurants, Restaurant } from '../../api'

const HeaderBanner = () => {
  const dispatch = useDispatch()
  const cartCount = useSelector((state: RootState) => state.cart.items.length)

  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)

  const openCart = () => {
    dispatch(openModal('cart'))
  }

  useEffect(() => {
    getRestaurants().then((data) => {
      const found = data.find((item) => item.id === Number(id))
      setRestaurant(found || null)
    })
  }, [id])

  return (
    <>
      <header>
        <Header showTag={false}>
          <ContainerList>
            <ListItem>
              <LinksHeader to="/">Restaurantes</LinksHeader>
            </ListItem>
            <ListItem>
              <img src={logo} alt="Logo" />
            </ListItem>
            <ListItem>
              <ButtonHeader onClick={openCart}>
                {cartCount} produto(s) no carrinho
              </ButtonHeader>
            </ListItem>
          </ContainerList>
        </Header>
        <Banner style={{ backgroundImage: `url(${restaurant?.capa})` }}>
          <TitleItaliana>{restaurant?.tipo}</TitleItaliana>
          <TitleTrattoria>{restaurant?.titulo}</TitleTrattoria>
        </Banner>
      </header>
    </>
  )
}

export default HeaderBanner
