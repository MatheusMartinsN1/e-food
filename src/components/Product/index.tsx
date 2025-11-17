import {
  Button,
  FoodImage,
  InfoFoods,
  TitleFoods,
  ListItem,
  Assessment,
  Category,
  CategoryContainer,
  ButtonContainer,
} from './styles'

export type Props = {
  id: number
  title: string
  description: string
  image: string
  type: string
  assessment: number
  highlighted?: boolean
}

const Product = ({
  assessment,
  type,
  description,
  image,
  title,
  highlighted,
  id
}: Props) => (
  <ListItem>
    <FoodImage src={image} alt={title} />
    <CategoryContainer>
      {highlighted && <Category>Destaque da semana</Category>}
      <Category>{type}</Category>
    </CategoryContainer>
    <div>
      <TitleFoods>{title}</TitleFoods>
      <Assessment>{assessment} &#x2B50;</Assessment>
    </div>
    <InfoFoods>{description}</InfoFoods>
    <ButtonContainer>
      <Button to={`/restaurants/${id}`}>Saiba mais</Button>
    </ButtonContainer>
  </ListItem>
)

export default Product
