interface Prato {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

export interface Restaurant {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Prato[]
}

export function getRestaurants(): Promise<Restaurant[]> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://api-ebac.vercel.app/api/efood/restaurantes')
    xhr.responseType = 'json'

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response as Restaurant[])
      } else {
        reject(new Error(`Erro na requisição: ${xhr.status}`))
      }
    }

    xhr.onerror = () => {
      reject(new Error('Erro de rede'))
    }

    xhr.send()
  })

}
