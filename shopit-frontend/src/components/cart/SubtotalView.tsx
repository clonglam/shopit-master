import { HStack, Text } from '@chakra-ui/react'
import { useMemo } from 'react'
import { NumericFormat } from 'react-number-format'

import { CartItem } from './hooks/useCartStore'

const SubtotalView = ({ cartItems }: { cartItems: CartItem[] }) => {
  const subtotal = useMemo(() => calSubtotal(cartItems), [cartItems])

  return (
    <HStack justifyContent="space-between">
      <Text fontWeight="600">Subtotal:</Text>
      <Text fontWeight="600">
        <NumericFormat
          value={(Math.round(subtotal * 100) / 100).toFixed(2)}
          allowLeadingZeros
          displayType="text"
          prefix={'$'}
          decimalScale={2}
          thousandSeparator=","
        />
      </Text>
    </HStack>
  )
}

const calSubtotal = (cartItems: CartItem[]) =>
  cartItems.reduce((acc, cur) => acc + cur.quantity * cur.product.price, 0)

export default SubtotalView
