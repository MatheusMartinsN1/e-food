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

const HeaderBanner = () => {
  const dispatch = useDispatch()
  const cartCount = useSelector((state: RootState) => state.cart.items.length)

  const openCart = () => {
    dispatch(openModal('cart'))
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
        <Banner>
          <TitleItaliana>Italiana</TitleItaliana>
          <TitleTrattoria>La Dolce Vita Trattoria</TitleTrattoria>
        </Banner>
      </header>
    </>
  )
}

export default HeaderBanner
