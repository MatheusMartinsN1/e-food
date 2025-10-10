import Menu from '../../models/Menu'
import Product from '../Product'
import { ListingContainer } from './styles'

export type Props = {
  itens: Menu[]
}

const Listing = ({ itens }: Props) => (
  <ListingContainer>
      {itens.map((item) => (
        <Product
          key={item.id}
          assessment={item.assessment}
          category={item.category}
          description={item.description}
          image={item.image}
          title={item.title}
          highlight={item.highlight}
        />
      ))}
  </ListingContainer>
)

export default Listing
