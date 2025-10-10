import Header from '../../components/Header'
import Listing from '../../components/Listing'
import Footer from '../../components/Footer'
import Menu from '../../models/Menu'
import Sushi from '../../assets/images/sushi.png'
import trattotia from '../../assets/images/trattotia.png'

const cardapio: Menu[] = [
  {
    id: 1,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    assessment: '4.9',
    highlight: 'Destaque da semana',
    category: 'Japonesa',
    image: Sushi,
    title: 'Hioki Sushi'
  },
  {
    id: 2,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    assessment: '4.6',
    category: 'Italiana',
    image: trattotia,
    title: 'La Dolce Vita Trattoria',
  },
  {
    id: 3,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    assessment: '4.6',
    category: 'Italiana',
    image: trattotia,
    title: 'La Dolce Vita Trattoria'
  },
  {
    id: 4,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    assessment: '4.6',
    category: 'Italiana',
    image: trattotia,
    title: 'La Dolce Vita Trattoria'
  },
  {
    id: 5,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    assessment: '4.6',
    category: 'Italiana',
    image: trattotia,
    title: 'La Dolce Vita Trattoria'
  },
  {
    id: 6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    assessment: '4.6',
    category: 'Italiana',
    image: trattotia,
    title: 'La Dolce Vita Trattoria'
  },
]

const Home = () => (
  <div>
    <Header />
    <Listing itens={cardapio}/>
    <Footer />
  </div>
)

export default Home
