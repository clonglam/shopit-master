import { Container } from '@chakra-ui/react'

import { CartView } from '../components/cart'
import SuggestProduct from '../components/products/components/SuggestProduct'
import { SectionTitle } from '../components/UI-Components'

const CartPage = () => {
  // TODO: If the user have not login -> emptycart and login button

  return (
    <Container maxW="7xl">
      <SectionTitle title="Cart" subtitle="Bring your favorite to home." />

      {/* <AdsBanner /> */}
      <CartView />
      <SuggestProduct />
    </Container>
  )
}

export default CartPage
