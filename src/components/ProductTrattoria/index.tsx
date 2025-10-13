import {
  ImgPizza,
  ListPizza,
  TitlePizza,
  ButtonPizza,
  TextPizza
} from './styles'

type Props = {
  title: string
  image: string
  description: string
  button: string
}

const ProductTrattoria = ({ button, description, image, title }: Props) => (
      <ListPizza>
        <ImgPizza src={image} alt="Pizza" />
        <TitlePizza>{title}</TitlePizza>
        <TextPizza>{description}</TextPizza>
        <ButtonPizza type="button">{button}</ButtonPizza>
      </ListPizza>
)

export default ProductTrattoria
