import Pizza from '../../models/Pizza'
import ProductTrattoria from '../ProductTrattoria'
import { ContainerPizza } from './styles'

export type Props = {
  itensPizza: Pizza[]
}

const ListingTrattoria = ({ itensPizza }: Props) => (
  <ContainerPizza>
    {itensPizza.map((item) => (
      <ProductTrattoria
        key={item.id}
        title={item.title}
        image={item.image}
        description={item.description}
        button={item.button}
        price={item.price}
        id={item.id}
      />
    ))}
  </ContainerPizza>
)

export default ListingTrattoria
