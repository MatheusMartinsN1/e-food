class Menu {
  title: string
  description: string
  image: string
  category: string
  assessment: string
  id: number
  highlight?: string

  constructor(
    title: string,
    description: string,
    image: string,
    category: string,
    assessment: string,
    id: number,
    highlight: string
  ) {
    this.title = title
    this.description = description
    this.image = image
    this.category = category
    this.assessment = assessment
    this.id = id
    this.highlight = highlight
  }
}

export default Menu
