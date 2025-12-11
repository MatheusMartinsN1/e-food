import { BeatLoader } from 'react-spinners'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../store/store'
import Header from '../Header'
import logo from '../../assets/images/logo.png'
import { openModal } from '../../store/modalSlice'
import { useGetRestaurantByIdQuery } from '../../services/apiRestaurants'

import {
  Banner,
  ContainerList,
  ListItem,
  LinksHeader,
  TitleTrattoria,
  TitleItaliana,
  ButtonHeader
} from './styles'

const HeaderBanner = () => {
  const dispatch = useDispatch()
  const cartCount = useSelector((state: RootState) => state.cart.items.length)

  const { id } = useParams()
  const restaurantId = Number(id)

  const {
    data: restaurant,
    isLoading,
    error
  } = useGetRestaurantByIdQuery(restaurantId)

  const openCart = () => {
    dispatch(openModal('cart'))
  }

  if (isLoading) {
    return (
      <header>
        <Banner>
          <TitleItaliana>
            Carregando <BeatLoader />
          </TitleItaliana>
        </Banner>
      </header>
    )
  }

  if (error || !restaurant) {
    return (
      <header>
        <Banner>
          <TitleItaliana>
            Restaurante não encontrado
          </TitleItaliana>
        </Banner>
      </header>
    )
  }

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
