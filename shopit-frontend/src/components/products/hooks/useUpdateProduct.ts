import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

import { Product, UpdateProduct } from './productService'
export interface CreateProductContext {
  previousProducts: Product[]
}

const useUpdateProduct = (onUpdate: () => void, productId: number) => {
  const queryClient = useQueryClient()

  return useMutation<Product, Error, UpdateProduct>({
    mutationFn: (createProductData: UpdateProduct) =>
      axios
        .put<Product>(
          `${import.meta.env.VITE_BACKEND_DOMAIN}/products/${productId}`,
          createProductData
        )
        .then((res) => res.data),
    onSuccess: (savedProduct, newProduct) => {
      onUpdate()
      // queryKey: ['product']
    },
  })
}
export default useUpdateProduct
