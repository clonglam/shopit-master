import { DrawerBody, Stack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import useCartStore from './hooks/useCartStore'

function CartDrawerEmptyCart() {
  const onClose = useCartStore((c) => c.onClose)

  return (
    <DrawerBody as={Stack} justifyContent="center">
      <Text textAlign="center">Bummer! You have nothing in your cart.</Text>

      <Link to="/collections/new">
        <Text textAlign="center" color="primary.500" onClick={() => onClose()}>
          Checkout our new items.
        </Text>
      </Link>
    </DrawerBody>
  )
}

export default CartDrawerEmptyCart
