import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import Header from '../Header'
import logo from '../../assets/images/logo.png'
import {
  Banner,
  ContainerList,
  ListItem,
  LinksHeader,
  TitleTrattoria,
  TitleItaliana
} from './styles'

const HeaderBanner = () => {
  const cartCount = useSelector((state: RootState) => state.cart.items.length)

  return (
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
            <LinksHeader to="#">{cartCount} produto(s) no carrinho</LinksHeader>
          </ListItem>
        </ContainerList>
      </Header>
      <Banner>
        <TitleItaliana>Italiana</TitleItaliana>
        <TitleTrattoria>La Dolce Vita Trattoria</TitleTrattoria>
      </Banner>
    </header>
  )
}

export default HeaderBanner
