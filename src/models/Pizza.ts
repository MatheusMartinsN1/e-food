class Pizza {
  title: string
  description: string
  image: string
  button: string
  id: number

  constructor(
  title: string,
  description: string,
  image: string,
  button: string,
  id: number
  ) {
    this.title = title
    this.description = description
    this.image = image
    this.button = button
    this.id = id
  }
}

export default Pizza
