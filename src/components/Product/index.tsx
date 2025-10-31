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
  DevTag,
  InactiveButton
} from './styles'

export type Props = {
  title: string
  description: string
  image: string
  category: string
  assessment: string
  highlight?: string
  inactive?: boolean
}

const Product = ({
  assessment,
  category,
  description,
  image,
  title,
  highlight,
  inactive
}: Props) => (
  <ListItem>
    <FoodImage src={image} alt={title} />
    <CategoryContainer>
      {highlight && <Category>{highlight}</Category>}
      <Category>{category}</Category>
      {inactive && <DevTag>Em desenvolvimento</DevTag>}
    </CategoryContainer>
    <div>
      <TitleFoods>{title}</TitleFoods>
      <Assessment>{assessment} &#x2B50;</Assessment>
    </div>
    <InfoFoods>{description}</InfoFoods>
    <ButtonContainer>
      {inactive ? (
        <InactiveButton as="div" className="inactive">
          Em breve
        </InactiveButton>
      ) : (
        <Button to="/trattoria">Saiba mais</Button>
      )}
    </ButtonContainer>
  </ListItem>
)

export default Product
