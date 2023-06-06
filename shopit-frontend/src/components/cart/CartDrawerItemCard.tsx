import { Box, Button, HStack, Image, Stack, Text } from '@chakra-ui/react'
import { useRef } from 'react'
import { RxCross1 } from 'react-icons/rx'
import { NumericFormat } from 'react-number-format'

import { ProudctQuantityInputField } from '../products'
import { Product } from '../products'
import useCartStore from './hooks/useCartStore'

type Props = {
  product: Product
  quantity: number
}

const CartDrawerItemCard = ({ product, quantity }: Props) => {
  const { id: productId, hoverImage, title, price } = product

  const quantityRef = useRef<HTMLInputElement>(null)

  const updateCartItem = useCartStore((c) => c.updateCartItem)
  const removeCartItem = useCartStore((c) => c.removeCartItem)

  const increaseQuanity = () => {
    if (quantityRef.current && quantityRef.current.valueAsNumber < 18) {
      quantityRef.current.valueAsNumber = quantityRef.current.valueAsNumber + 1

      const updatedItem = {
        productId: productId,
        quantity: quantity + 1,
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
      }

      updateCartItem(updatedItem)
    }
  }

  return (
    <HStack as={Box} height="120px" alignItems="start">
      <Image src={hoverImage} maxWidth="100px" />

      <Stack width="100%">
        <Text>{title}</Text>

        <HStack justifyContent="space-between">
          <ProudctQuantityInputField
            maxWidth="168px"
            quantityRef={quantityRef}
            defaultValue={quantity}
            increaseButtonProps={increaseQuanity}
            decreaseButtonProps={decreaseQuanity}
          />

          <ProductPrice price={price} quantity={quantity} />
        </HStack>
      </Stack>

      <RemoveItemButton onClickHandler={() => removeCartItem(productId)} />
    </HStack>
  )
}

const ProductPrice = ({
  price,
  quantity,
}: {
  price: number
  quantity: number
}) => {
  return (
    <Text>
      <NumericFormat
        value={(Math.round(price * quantity * 100) / 100).toFixed(2)}
        allowLeadingZeros
        displayType="text"
        prefix={'$'}
        decimalScale={2}
        thousandSeparator=","
      />
    </Text>
  )
}

const RemoveItemButton = ({
  onClickHandler,
}: {
  onClickHandler: () => void
}) => {
  return (
    <Button width="15px" variant="link" onClick={onClickHandler}>
      <RxCross1 />
    </Button>
  )
}

export default CartDrawerItemCard
