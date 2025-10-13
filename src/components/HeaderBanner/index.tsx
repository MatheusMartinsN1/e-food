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

const HeaderBanner = () => (
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
          <LinksHeader to="#">0 produto(s) no carrinho</LinksHeader>
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
