import Header from '../Header'
import logo from '../../assets/images/logo.png'
import {
  Banner,
  ContainerList,
  ListItem,
  RestaurantsLink,
  TitleTrattoria,
  TitleItaliana
} from './styles'

const HeaderBanner = () => (
  <header>
    <Header showTag={false}>
      <ContainerList>
        <ListItem>
          <RestaurantsLink to="/">Restaurantes</RestaurantsLink>
        </ListItem>
        <ListItem>
          <img src={logo} alt="Logo" />
        </ListItem>
        <ListItem>
          <p>0 produto(s) no carrinho</p>
        </ListItem>
      </ContainerList>
    </Header>
    <Banner>
      <TitleItaliana>Italiana</TitleItaliana>
      <TitleTrattoria>La Dolce Vita Trattoria</TitleTrattoria>
    </Banner>
  </header>
)

export default HeaderBanner
