import { useQuery } from '@tanstack/react-query'
import ms from 'ms'

import cartService from '../cartService'

const useCart = (cartId: number) => {
  useQuery({
    queryKey: ['cart'],
    queryFn: () => cartService.get(cartId),
    staleTime: ms('24h'),
  })
}

export default useCart
