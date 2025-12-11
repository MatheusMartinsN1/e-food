import { BeatLoader } from 'react-spinners'
import { useParams } from 'react-router-dom'

import { useGetRestaurantsQuery } from '../../services/apiRestaurants'
import { ContainerFood } from './styles'
import ProductMenu from '../ProductMenu'

import { Loading } from '../../style'

const ListingFood = () => {
  const { id } = useParams()
  const restaurantId = Number(id)
  const { data: restaurants, isLoading, error } = useGetRestaurantsQuery()

  if (isLoading)
    return (
      <Loading>
        Carregando <BeatLoader />
      </Loading>
    )
  if (error) return <Loading>Erro ao carrgar</Loading>

    const restaurant = restaurants?.find((r) => r.id === restaurantId)

    if (!restaurant) {
      return <Loading>Restaurante {id} não encontrado</Loading>
    }

  return (
    <ContainerFood>
      {restaurant.cardapio.map((item) => (
        <ProductMenu
          key={item.id}
          title={item.nome}
          image={item.foto}
          description={item.descricao}
          price={item.preco}
          id={item.id}
          porcao={item.porcao}
        />
      ))}
    </ContainerFood>
  )
}

export default ListingFood
