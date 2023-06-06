import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Stack,
} from '@chakra-ui/react'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

import Divider from '../UI-Components/Divider'
import CartDrawerEmptyCart from './CartDrawerEmptyCart'
import CartDrawerFooter from './CartDrawerFooter'
import CartDrawerItemCard from './CartDrawerItemCard'
import useCartStore, { CartItem } from './hooks/useCartStore'

const CartDrawer = () => {
  const cartItems = useCartStore((c) => c.cart.items)
  const isOpen = useCartStore((c) => c.isOpen)
  const onOpen = useCartStore((c) => c.onOpen)
  const onClose = useCartStore((c) => c.onClose)
  const btnRef = React.useRef(null)

  return (
    <>
      <Button ref={btnRef} onClick={onOpen} variant="link" color="#fff">
        <AiOutlineShoppingCart />
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="sm"
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader>Cart</DrawerHeader>

          <Divider />

          {cartItems.length === 0 ? (
            <CartDrawerEmptyCart />
          ) : (
            <CartDrawerContent cartItems={cartItems} />
          )}
        </DrawerContent>
      </Drawer>
    </>
  )
}

const CartDrawerContent = ({ cartItems }: { cartItems: CartItem[] }) => {
  return (
    <React.Fragment>
      <CartDrawerBody cartItems={cartItems} />
      <CartDrawerFooter />
    </React.Fragment>
  )
}

const CartDrawerBody = ({ cartItems }: { cartItems: CartItem[] }) => {
  return (
    <DrawerBody>
      <Stack>
        {cartItems.map(({ productId, product, quantity }) => (
          <CartDrawerItemCard
            key={productId}
            product={product}
            quantity={quantity}
          />
        ))}
      </Stack>
    </DrawerBody>
  )
}
export default CartDrawer
