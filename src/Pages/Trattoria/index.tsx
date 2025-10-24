import Footer from '../../components/Footer'
import HeaderBanner from '../../components/HeaderBanner'
import Pizza from '../../models/Pizza'
import pizza from '../../assets/images/pizza.png'
import ListingTrattoria from '../../components/ListingTrattoria'
import ModalCart from '../../components/ModalCart'
import ModalDelivery from '../../components/ModalDelivery'
import ModalPayment from '../../components/ModalPayment'

const cardapio: Pizza[] = [
  {
    id: 1,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    title: 'Pizza Marguerita',
    button: 'Mais detalhes',
    price: 60.90
  },
  {
    id: 2,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    title: 'Pizza Marguerita',
    button: 'Mais detalhes',
    price: 60.90
  },
  {
    id: 3,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    title: 'Pizza Marguerita',
    button: 'Mais detalhes',
    price: 60.90
  },
  {
    id: 4,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    title: 'Pizza Marguerita',
    button: 'Mais detalhes',
    price: 60.90
  },
  {
    id: 5,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    title: 'Pizza Marguerita',
    button: 'Mais detalhes',
    price: 60.90
  },
  {
    id: 6,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    title: 'Pizza Marguerita',
    button: 'Mais detalhes',
    price: 60.90
  },
]

const Trattoria = () => (
  <div>
    <HeaderBanner />
    <ListingTrattoria itensPizza={cardapio}/>
    <ModalCart />
    <ModalDelivery/>
    <ModalPayment />
    <Footer />
  </div>
)

export default Trattoria
