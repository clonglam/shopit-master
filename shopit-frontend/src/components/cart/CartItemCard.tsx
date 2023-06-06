import { Box, Button, Grid, Image, Stack, Text } from '@chakra-ui/react'
import { useRef } from 'react'
import { NumericFormat } from 'react-number-format'

import { ProudctQuantityInputField } from '../products'
import { Product } from '../products'
import useCartStore from './hooks/useCartStore'

type Props = {
  product: Product
  quantity: number
}
const CartItemCard = ({ product, quantity }: Props) => {
  const quantityRef = useRef<HTMLInputElement>(null)
  const updateCartItem = useCartStore((c) => c.updateCartItem)
  const removeCartItem = useCartStore((c) => c.removeCartItem)

  const increaseQuanity = () => {
    if (quantityRef.current && quantityRef.current.valueAsNumber < 18) {
      quantityRef.current.valueAsNumber = quantityRef.current.valueAsNumber + 1

      const updatedItem = {
        productId: product.id,
        quantity: quantity + 1,
        product: product,
      }

      updateCartItem(updatedItem)
    }
  }

  const decreaseQuanity = () => {
    if (quantityRef.current && quantityRef.current.valueAsNumber > 1) {
      quantityRef.current.valueAsNumber = quantityRef.current.valueAsNumber - 1

      const updatedItem = {
        productId: product.id,
        quantity: quantity - 1,
        product: product,
      }

      updateCartItem(updatedItem)
    }
  }

  return (
    <Grid
      as={Box}
      width="100%"
      height="120px"
      alignItems="center"
      columnGap={2}
      templateColumns={{
        base: '60px 2fr 1fr 1fr 30px',
        md: '100px 1fr 150px 150px 50px',
      }}
    >
      <Image
        src={product.hoverImage}
        maxWidth={{ base: '50px', md: '100px' }}
      />
      {/* <HStack justifyContent="space-between"> */}
      <Stack width="100%">
        <Text fontWeight="500" fontSize={{ base: '15px', md: 'md' }}>
          {product.title}
        </Text>
        <Text fontSize={{ base: '15px', md: 'md' }} color="primary.500">
          Availability: Ships in 8-10 weeks
        </Text>
      </Stack>

      <ProudctQuantityInputField
        quantityRef={quantityRef}
        defaultValue={quantity}
        increaseButtonProps={increaseQuanity}
        decreaseButtonProps={decreaseQuanity}
      />

      <Text textAlign="center">
        <NumericFormat
          value={(Math.round(product.price * quantity * 100) / 100).toFixed(2)}
          allowLeadingZeros
          displayType="text"
          prefix={'$'}
          decimalScale={2}
          thousandSeparator=","
        />
      </Text>

      <Button
        width="15px"
        variant="link"
        onClick={() => removeCartItem(product.id)}
      >
        X
      </Button>
    </Grid>
  )
}

export default CartItemCard
