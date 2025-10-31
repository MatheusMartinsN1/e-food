class Menu {
  title: string
  description: string
  image: string
  category: string
  assessment: string
  id: number
  highlight?: string
  inactive?: boolean

  constructor(
    title: string,
    description: string,
    image: string,
    category: string,
    assessment: string,
    id: number,
    highlight: string,
    inactive: boolean
  ) {
    this.title = title
    this.description = description
    this.image = image
    this.category = category
    this.assessment = assessment
    this.id = id
    this.highlight = highlight
    this.inactive = inactive
  }
}

export default Menu
