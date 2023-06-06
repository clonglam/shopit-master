import { nanoid } from 'nanoid'
import { create } from 'zustand'

import { Product } from '../../products'

export type CartItem = {
  // cartId: number | string
  product: Product
  productId: number
  quantity: number
}

export type CreateCartItem = {
  product: Product
  productId: number
  quantity: number
}

export type AddCartItem = {
  cartId: number
  productId: number
  quantity: number
}

export interface Cart {
  id: number | string
  items: CartItem[]
}
export interface EditCartItem {
  productId: number
  quantity: number
}

interface CartStore {
  cart: Cart
  isOpen: boolean
  onClose: () => void
  onOpen: () => void
  addCartItem: (cartItem: CreateCartItem) => void
  updateCartItem: (cartItem: EditCartItem) => void
  removeCartItem: (productId: number) => void
}

const useCartStore = create<CartStore>((set, get) => ({
  cart: { id: nanoid(), items: [] },
  isOpen: false,
  onClose: () => set(() => ({ isOpen: false })),
  onOpen: () => set(() => ({ isOpen: true })),
  addCartItem: (newCartItem) => {
    const cartItems = get().cart.items

    const existingProduct = cartItems.find(
      (item) => item.productId === newCartItem.product.id
    )

    existingProduct
      ? set((store) => ({
          cart: {
            ...store.cart,
            items: cartItems.map((i) =>
              i.productId === existingProduct.productId
                ? { ...i, quantity: newCartItem.quantity + i.quantity }
                : i
            ),
          },
        }))
      : set((store) => ({
          cart: {
            ...store.cart,
            items: [...store.cart.items, newCartItem],
          },
        }))
  },
  updateCartItem: (setCartItem) => {
    set((store) => ({
      cart: {
        ...store.cart,
        items: store.cart.items.map((i) =>
          i.productId === setCartItem.productId
            ? { ...i, quantity: setCartItem.quantity }
            : i
        ),
      },
    }))
  },
  removeCartItem: (productId) => {
    set((store) => ({
      cart: {
        ...store.cart,
        items: store.cart.items.filter((i) => i.productId !== productId),
      },
    }))
  },
}))

export default useCartStore
