import { HStack, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

import useProductQueryStore from '../../../store/collectionQueryStore'
import useCollections from '../../collections/hooks/useCollections'

const CollectionNacigate = () => {
  const setCollectionSlug = useProductQueryStore((s) => s.setCollectionSlug)
  const { data, isLoading, error } = useCollections()

  if (isLoading) return <CollectionNavigateContainer />
  if (error) return <CollectionNavigateContainer />

  return (
    <HStack width="80%" spacing={6} justifyContent="center">
      {data?.map(({ title, slug, id }) => (
        <NavLink
          key={id}
          to={'/collections/' + slug}
          onClick={() => setCollectionSlug(slug)}
        >
          {({ isActive }) => {
            return (
              <Text
                letterSpacing="1px"
                fontWeight={isActive ? '700' : '500'}
                fontSize="12px"
                color={isActive ? 'gray.600' : 'gray.400'}
                textTransform="uppercase"
              >
                {title}
              </Text>
            )
          }}
        </NavLink>
      ))}
    </HStack>
  )
}

const CollectionNavigateContainer = () => {
  return <HStack width="80%" spacing={6} justifyContent="center"></HStack>
}
export default CollectionNacigate
