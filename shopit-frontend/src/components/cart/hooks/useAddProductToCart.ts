import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

import { AddCartItem, Cart } from './useCartStore'

const useAddProductToCart = (onAdd: () => void) => {
  return useMutation({
    mutationFn: (cartItem: AddCartItem) =>
      axios
        .post<Cart>(`${import.meta.env.VITE_BACKEND_DOMAIN}/cart`, {
          params: cartItem,
        })
        .then((res) => res.data),
  })
}
export default useAddProductToCart
