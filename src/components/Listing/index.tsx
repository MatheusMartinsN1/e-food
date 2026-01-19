import { BeatLoader } from 'react-spinners'

import Product from '../Product'
import { ListingContainer } from './styles'
import { useGetRestaurantsQuery } from '../../services/apiRestaurants'
import { Loading } from '../../style'

const Listing = () => {
  const { data: restaurants, isLoading, error } = useGetRestaurantsQuery()


  if (isLoading)
    return (
      <Loading>
        Carregando <BeatLoader />
      </Loading>
    )
  if (error) return <Loading>Erro ao carregar</Loading>

  return (
    <ListingContainer>
      {restaurants?.map((item) => (
        <Product
          key={item.id}
          id={item.id}
          assessment={item.avaliacao}
          type={item.tipo}
          description={item.descricao}
          image={item.capa}
          title={item.titulo}
          highlighted={item.destacado}
        />
      ))}
    </ListingContainer>
  )
}

export default Listing
