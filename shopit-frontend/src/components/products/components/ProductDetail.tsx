import { Box, Button, Heading, HStack, Text } from '@chakra-ui/react'
import { FormEvent, useRef } from 'react'
import { NumericFormat } from 'react-number-format'

import { useCartStore } from '../../cart'
import { CreateCartItem } from '../../cart/hooks/useCartStore'
import Divider from '../../UI-Components/Divider'
import { Product } from '../hooks/productService'
import ProudctQuantityInputField from '../inputs/ProudctQuantityInputField'
import ProductContact from './ProductContact'

interface Props {
  product: Product
}

const ProductDetail = ({ product }: Props) => {
  const { price } = product

  const addProductToCart = useCartStore((c) => c.addCartItem)
  const onOpen = useCartStore((c) => c.onOpen)

  const quantityRef = useRef<HTMLInputElement>(null)

  const submitHandler = (e: FormEvent) => {
    e.preventDefault()

    if (quantityRef !== null && quantityRef.current) {
      const cartItem: CreateCartItem = {
        productId: product.id,
        product: product,
        quantity: parseInt(quantityRef.current.value),
      }

      addProductToCart(cartItem)
      onOpen()
    }
  }

  return (
    <Box
      position={{ base: 'inherit', md: 'sticky' }}
      right="0"
      top="95px"
      padding={8}
      backgroundColor="#fff"
      marginBottom={{ base: 8, md: 0 }}
    >
      <Box paddingY={5} as="form" onSubmit={submitHandler}>
        <Heading fontWeight="300"> {product.title}</Heading>

        <ProductPrice price={price} />

        <ProudctQuanity quantityRef={quantityRef} />

        <Divider borderWidth="0.5px" />

        <ShippingDetails />

        <Divider borderWidth="0.5px" />

        <AddToCartButton />
      </Box>

      <ProductContact />
    </Box>
  )
}

const ProudctQuanity = ({
  quantityRef,
}: {
  quantityRef: React.RefObject<HTMLInputElement>
}) => {
  return (
    <Box marginBottom={3}>
      <Text fontWeight="500" fontSize="sm" color="gray.500">
        Quantity
      </Text>

      <ProudctQuantityInputField quantityRef={quantityRef} />
    </Box>
  )
}
const ProductPrice = ({ price }: { price: number }) => {
  return (
    <Text fontWeight="300" fontSize="sm" marginBottom={4}>
      <NumericFormat
        value={(Math.round(price * 100) / 100).toFixed(2)}
        allowLeadingZeros
        displayType="text"
        prefix={'$'}
        decimalScale={2}
        thousandSeparator=","
      />
    </Text>
  )
}
const AddToCartButton = () => {
  return (
    <Button
      type="submit"
      width="100%"
      marginTop={2}
      bgColor="primary.500"
      borderRadius="0"
      border="1px solid"
      borderColor="primary.500"
      color="#fff"
      _hover={{ bgColor: 'transparent' }}
    >
      Add To Cart
    </Button>
  )
}

const ShippingDetails = () => {
  return (
    <HStack justifyContent="space-between">
      <Text textTransform="uppercase" fontSize="12px">
        Availability
      </Text>
      <Text color="primary.500" fontSize="12px" fontWeight="600">
        Ships in 5-7 days
      </Text>
    </HStack>
  )
}

export default ProductDetail
