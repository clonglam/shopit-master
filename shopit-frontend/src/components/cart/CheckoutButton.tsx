import { Button } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

// import { url } from '../../services/api-client'
import useAuthStore from '../user/useAuthStore'
import useCartStore from './hooks/useCartStore'

interface Props {
  text?: string
}

const CheckoutButton = ({ text = 'CHECKOUT' }: Props) => {
  const user = useAuthStore((u) => u.user)
  const cartItems = useCartStore((c) => c.cart.items)

  console.log('cartItems', cartItems)

  const params = {
    order: cartItems.map((i) => ({
      productId: i.productId,
      quantity: i.quantity,
    })),
  }

  const handleCheckout = () => {
    axios
      .post(
        `${
          import.meta.env.VITE_BACKEND_DOMAIN
        }/payment/create-checkout-session`,
        params
      )
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url
        }
      })
      .catch((err) => console.log(err.message))
  }
  return (
    <Button
      textTransform="capitalize"
      borderRadius={2}
      textAlign="center"
      bgColor="primary.500"
      width="100%"
      color="white"
      onClick={handleCheckout}
      // as={Link}
      // to={'/checkout'}
    >
      {text}
    </Button>
  )
}

export default CheckoutButton
