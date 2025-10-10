import Logo from '../../assets/images/logo.png'
import Instagram from '../../assets/images/instagram.png'
import Facebook from '../../assets/images/facebook.png'
import Twitter from '../../assets/images/twitter.png'
import { ContainerFooter, LogoFooter, SociaisLinks, TextFooter } from './styles'

const Footer = () => (
  <ContainerFooter>
    <LogoFooter src={Logo} alt="Logo" />
    <SociaisLinks>
      <a href="#">
        <img src={Instagram} alt="Instagram" />
      </a>
      <a href="#">
        <img src={Facebook} alt="Facebook" />
      </a>
      <a href="#">
        <img src={Twitter} alt="Twitter" />
      </a>
    </SociaisLinks>
    <TextFooter>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </TextFooter>
  </ContainerFooter>
)

export default Footer
