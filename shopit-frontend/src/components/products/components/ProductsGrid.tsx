import { SimpleGrid, Text } from '@chakra-ui/react'

import { Product } from '../hooks/productService'
import ProductCard from './ProductCard'
import ProductCardContainer from './ProductCardContainer'

interface Props {
  products?: Product[]
  error: Error | null
  isLoading: boolean
}
const ProductGrid = ({ products, error, isLoading }: Props) => {
  if (error) {
    console.log('Error', error)
    return <SimpleGrid>error</SimpleGrid>
  }

  if (isLoading) return <Text>Loading</Text>

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={6} padding="10px">
      {products?.map((product, index) => (
        <ProductCardContainer key={index}>
          <ProductCard product={product} />
        </ProductCardContainer>
      ))}
    </SimpleGrid>
  )
}

export default ProductGrid
