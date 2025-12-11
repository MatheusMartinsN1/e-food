declare type Prato = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

declare type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Prato[]
}

declare type OrderPayload = {
  code: string
  products: {
    id: number
    price: number
  }[]
  total: number
}

declare type OrderResponse = {
  id: string
  code: string
  products: {
    id: number
    price: number
  }[]
  total: number
}
