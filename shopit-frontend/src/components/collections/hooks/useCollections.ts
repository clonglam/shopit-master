import { useQuery } from '@tanstack/react-query'
import ms from 'ms'

import { collections } from '../../../data/collections'
import APIClient from '../../../services/api-client'

const apiClient = new APIClient<Collection>('/collections')

const useCollections = () =>
  useQuery({
    queryKey: ['collections2'],
    queryFn: apiClient.getAll,
    staleTime: ms('12h'),
    initialData: collections,
  })

export default useCollections
