import { Container } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

import CollectionHeading from '../components/collections/CollectionHeading'
import useCollectionProducts from '../components/collections/hooks/useCollectionProducts'
import { ProductGrid, ProductsFilter } from '../components/products'

function CollectionsPage() {
  const { collectionSlug } = useParams()

  const {
    data: products,
    error,
    isLoading,
  } = useCollectionProducts(collectionSlug!)

  return (
    <Container maxW="6xl">
      <CollectionHeading />
      <ProductsFilter />
      <ProductGrid products={products} error={error} isLoading={isLoading} />
    </Container>
  )
}

export default CollectionsPage
