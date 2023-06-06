import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import ms from 'ms'

import { url } from '../../../services/api-client'
import useProductQueryStore from '../../../store/collectionQueryStore'
import { Product } from '../../products'
import { useCollectionBySlug } from './useCollection'

const useCollectionProducts = (collectionSlug: string) => {
  const productQuery = useProductQueryStore((s) => s.productQuery)
  const collection = useCollectionBySlug(collectionSlug)
  return useQuery<Product[], Error>({
    queryKey: ['collections', collectionSlug, 'products', productQuery],

    queryFn: () =>
      axios
        .get(`${url}/collections/${collection?.id}/products`, {
          params: { ...productQuery },
        })
        .then((res) => res.data),
    staleTime: ms('12h'),
  })
}

export default useCollectionProducts
