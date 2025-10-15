class Pizza {
  title: string
  description: string
  image: string
  button: string
  id: number
  price: number

  constructor(
  title: string,
  description: string,
  image: string,
  button: string,
  id: number,
  price: number
  ) {
    this.title = title
    this.description = description
    this.image = image
    this.button = button
    this.id = id
    this.price = price
  }
}

export default Pizza
