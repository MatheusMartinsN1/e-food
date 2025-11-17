import Footer from '../../components/Footer'
import HeaderBanner from '../../components/HeaderBanner'

import ListingTrattoria from '../../components/ListingFood'
import ModalCart from '../../components/ModalCart'
import ModalDelivery from '../../components/ModalDelivery'
import ModalPayment from '../../components/ModalPayment'
import ModalConfirmation from '../../components/ModalConfirmation'

const Trattoria = () => (
  <div>
    <HeaderBanner />
    <ListingTrattoria />
    <ModalCart />
    <ModalDelivery/>
    <ModalPayment />
    <ModalConfirmation />
    <Footer />
  </div>
)

export default Trattoria
