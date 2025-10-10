import { HeaderContainer, Logo, Text } from './styles'
import logo from '../../assets/images/logo.png'
import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  showTag?: boolean
}

const Header = ({ children, showTag = true }: Props) => (
  <HeaderContainer>
    {showTag && <Logo src={logo} alt="Logo" />}
    {children}
    {showTag && (
      <Text>Viva experiências gastronômicas no conforto da sua casa</Text>
    )}
  </HeaderContainer>
)

export default Header
