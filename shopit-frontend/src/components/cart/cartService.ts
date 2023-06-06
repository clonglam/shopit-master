import APIClient from '../../services/api-client'
import { Cart } from './hooks/useCartStore'

export const CACHE_KEY_CART: ReadonlyArray<string> = ['cart']

const cartService = new APIClient<Cart>('/cart')

export default cartService
