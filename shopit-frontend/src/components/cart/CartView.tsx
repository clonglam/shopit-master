import { Box, Grid, Heading, Stack, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'

import { ProductContact } from '../products'
import DescriptionTextSm from '../UI-Components/DescriptionTextSm'
import Divider from '../UI-Components/Divider'
import CartItemCard from './CartItemCard'
import CheckoutButton from './CheckoutButton'
import useCartStore, { CartItem } from './hooks/useCartStore'
import SubtotalView from './SubtotalView'

const CartView = () => {
  const cartItems = useCartStore((c) => c.cart.items)
  if (cartItems.length === 0) return <EmptyCart />

  return (
    <CartContainerView>
      <CartProductStack cartItems={cartItems} />

      <CartSumaryView cartItems={cartItems} />
    </CartContainerView>
  )
}

const CartContainerView = ({ children }: { children: ReactNode }) => {
  return (
    <Grid
      gridTemplateColumns={{
        base: '1fr',
        md: '1fr 380px',
      }}
      alignItems="start"
      marginBottom={8}
    >
      {children}
    </Grid>
  )
}

const CartProductStack = ({ cartItems }: { cartItems: CartItem[] }) => {
  return (
    <Box paddingX={3} paddingY={8}>
      <CartTitle />
      <Stack>
        {cartItems.map(({ productId, product, quantity }) => (
          <Box bgColor="#fff" key={productId}>
            <CartItemCard product={product} quantity={quantity} />
          </Box>
        ))}
      </Stack>
    </Box>
  )
}

const CartSumaryView = ({ cartItems }: { cartItems: CartItem[] }) => {
  return (
    <Box>
      <DescriptionTextSm>CART SUMMARY</DescriptionTextSm>

      <Box
        as={Stack}
        bgColor="#fff"
        minHeight="400px"
        minWidth="350px"
        paddingY={5}
        paddingX={3}
        justifyContent="start"
        alignItems="center"
        gap={2}
      >
        <SubtotalView cartItems={cartItems} />

        <Affirm />

        <Divider />

        <CheckoutButton />

        <PromotionItensive />

        <Divider />

        <Enquiry />
      </Box>
    </Box>
  )
}

const Enquiry = () => {
  return (
    <>
      <Text fontWeight={400} fontSize="xs" color="gray.600">
        Shipping questions?
      </Text>

      <Box justifySelf="end">
        <ProductContact />
      </Box>
    </>
  )
}

const PromotionItensive = () => {
  return (
    <Text fontWeight={300} fontSize="xs" color="gray.400">
      Orders over $75 qualify for free ground shipping
    </Text>
  )
}

const Affirm = () => {
  return (
    <Text fontWeight={300} fontSize="xs">
      Starting at $192/mo with Affirm. Learn more CHECKOUT
    </Text>
  )
}

const CartTitle = () => {
  return (
    <Grid
      as={Box}
      width="100%"
      alignItems="center"
      columnGap={2}
      templateColumns={{
        base: '2fr 60px 1fr 1fr 30px',
        md: '100px 1fr 150px 150px 50px',
      }}
    >
      <DescriptionTextSm>PRODUCT</DescriptionTextSm>

      <Text />
      <DescriptionTextSm textAlign="center">QUANTITY</DescriptionTextSm>
      <DescriptionTextSm textAlign="center">PRICE</DescriptionTextSm>
      <Text />
    </Grid>
  )
}

const EmptyCart = () => {
  return (
    <Box bgColor="#fff" paddingY={5} paddingX={3} marginBottom={8} height={180}>
      <Heading fontWeight={300} color="primary.500">
        Your Cart is empty.
      </Heading>
      <Text fontWeight="400" fontSize="sm">
        Check your Saved for later items below or continue shopping.
      </Text>
    </Box>
  )
}
export default CartView
