import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

import { CreateProduct, Product } from './productService'
export interface CreateProductContext {
  previousProducts: Product[]
}

interface IUseCreateProduct {
  onAdd: (newProduct: CreateProduct) => void
  onError: (error: Error) => void
}

const useCreateProduct = ({ onAdd, onError }: IUseCreateProduct) => {
  const queryClient = useQueryClient()

  return useMutation<Product, Error, CreateProduct>({
    mutationFn: (createProductData: CreateProduct) =>
      axios
        .post<Product>(
          `${import.meta.env.VITE_BACKEND_DOMAIN}/products`,
          createProductData
        )
        .then((res) => res.data),
    onSuccess: (savedProduct, newProduct) => {
      onAdd(newProduct)
      // queryKey: ['product']
    },
    onError: (error, variables, context) => {
      onError(error)
    },
  })
}
export default useCreateProduct
