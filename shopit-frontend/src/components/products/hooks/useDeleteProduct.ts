import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

import apiClient, { CreateProduct, Product } from './productService'
export interface CreateProductContext {
  previousProducts: Product[]
}

interface IUseDeleteProduct {
  onAdd?: (newProduct: CreateProduct) => void
  onError?: (error: Error) => void
}

const useDeleteProduct = () => {
  const queryClient = useQueryClient()

  return useMutation<Product, Error, number>({
    mutationFn: (productId) => apiClient.delete(productId),
  })
}
export default useDeleteProduct
