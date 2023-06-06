import { useQuery } from '@tanstack/react-query'
import ms from 'ms'

import useProductQueryStore from '../../../store/productQueryStore'
import apiClient, { Product } from './productService'

const useProudcts = () => {
  const proudctQuery = useProductQueryStore((s) => s.productQuery)

  return useQuery<Product[], Error>({
    queryKey: ['products', proudctQuery],

    queryFn: () =>
      apiClient.getAll({
        params: { searchText: proudctQuery.searchText },
      }),
    staleTime: ms('2h'),
  })
}

export default useProudcts
