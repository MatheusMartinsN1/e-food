import { useState, useEffect } from 'react'
import { getRestaurants, Restaurant } from '../../api'

import ProductMenu from '../ProductMenu'
import { ContainerFood } from './styles'
import { useParams } from 'react-router-dom'

const ListingTrattoria = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getRestaurants()
      .then((data) => {
        const restaurantId = Number(id)

        const found = data.find((r) => r.id === restaurantId)

        if (!found) {
          setError(`Restaurante ${id} não encontrado`)
          return
        }

        setRestaurant(found)
      })
      .catch((erro) => setError(erro.message))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <p>Carregando cardápio...</p>
  if (error) return <p>Erro: {error}</p>
  if (!restaurant) return null

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

export default ListingTrattoria
