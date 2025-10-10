import {
  Button,
  FoodImage,
  InfoFoods,
  TitleFoods,
  ListItem,
  Assessment,
  Category,
  CategoryContainer,
  ButtonContainer
} from './styles'

export type Props = {
  title: string
  description: string
  image: string
  category: string
  assessment: string
  highlight?: string
}

const Product = ({
  assessment,
  category,
  description,
  image,
  title,
  highlight
}: Props) => (
  <ListItem>
    <FoodImage src={image} alt={title} />
    <CategoryContainer>
      {highlight && <Category>{highlight}</Category>}
      <Category>{category}</Category>
    </CategoryContainer>
    <div>
      <TitleFoods>{title}</TitleFoods>
      <Assessment>{assessment} &#x2B50;</Assessment>
    </div>
    <InfoFoods>{description}</InfoFoods>
    <ButtonContainer>
      <Button to="/trattoria">Saiba mais</Button>
    </ButtonContainer>
  </ListItem>
)

export default Product
