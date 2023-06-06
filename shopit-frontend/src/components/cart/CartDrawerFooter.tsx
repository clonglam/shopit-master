import { Button, DrawerFooter, Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import CheckoutButton from './CheckoutButton'
import useCartStore from './hooks/useCartStore'
import SubtotalView from './SubtotalView'
import ViewCartButton from './ViewCartButton'

const CartDrawerFooter = () => {
  const onClose = useCartStore((c) => c.onClose)
  const cartItems = useCartStore((c) => c.cart.items)

  return (
    <DrawerFooter>
      <Stack
        borderTop="1px solid"
        borderColor="gray.400"
        padding={3}
        width="100%"
      >
        <SubtotalView cartItems={cartItems} />

        <CheckoutButton />

        <ViewCartButton onClose={onClose} />

        <Button
          variant="link"
          onClick={onClose}
          color="primary.500"
          textAlign="center"
        >
          Continue Shopping
        </Button>
      </Stack>
    </DrawerFooter>
  )
}

export default CartDrawerFooter
