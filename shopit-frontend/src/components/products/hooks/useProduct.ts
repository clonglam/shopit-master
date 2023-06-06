import { useQuery } from '@tanstack/react-query'
import ms from 'ms'

import apiClient, { Product } from './productService'

const useProudct = (slug: string) =>
  useQuery<Product, Error>({
    queryKey: ['products', slug],
    queryFn: () => apiClient.get(slug),
    staleTime: ms('8h'),
    // initialData: collections,
  })

export default useProudct
