import { useState, useEffect } from 'react'

import Product from '../Product'
import { ListingContainer } from './styles'
import { getRestaurants, Restaurant } from '../../api'
import { Loading } from '../../style'

const Listing = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {

    setTimeout(() => {
        getRestaurants()
          .then((data) => setRestaurants((data)))
          .catch((erro) => setError(erro.message))
          .finally(() => setLoading(false))
      }, 2000)
  }, [])

  if (loading) return <Loading>Carregando...</Loading>
  if (error) return <Loading>Erro: {error}</Loading>

  return (
    <ListingContainer>
      {restaurants.map((item) => (
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
