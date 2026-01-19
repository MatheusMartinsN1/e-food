import Logo from '../../assets/images/logo.png'
import Instagram from '../../assets/images/instagram.png'
import Facebook from '../../assets/images/facebook.png'
import Twitter from '../../assets/images/twitter.png'
import { ContainerFooter, LogoFooter, SociaisLinks, TextFooter } from './styles'

const Footer = () => (
  <ContainerFooter>
    <LogoFooter src={Logo} alt="Logo" />
    <SociaisLinks>
      <button>
        <img src={Instagram} alt="Instagram" />
      </button>
      <button>
        <img src={Facebook} alt="Facebook" />
      </button>
      <button>
        <img src={Twitter} alt="Twitter" />
      </button>
    </SociaisLinks>
    <TextFooter>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </TextFooter>
  </ContainerFooter>
)

export default Footer
