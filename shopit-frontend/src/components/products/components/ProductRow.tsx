import { Container, SimpleGrid, Skeleton } from '@chakra-ui/react'
import { ReactNode } from 'react'

import { SectionTitle } from '../../UI-Components'
import useProudcts from '../hooks/useProducts'
import ProductCard from './ProductCard'

const ProductRow = () => {
  const { data: products, isLoading, error } = useProudcts()

  if (error) return <></>
  if (isLoading) return <ProductRowSkelton />

  return (
    <ProductRowContainer>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductRowContainer>
  )
}

const ProductRowContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Container maxW="7xl">
      <SectionTitle subtitle="Get Ogranized with" title="String Funiture" />
      <SimpleGrid
        columns={{ sm: 2, md: 2, xl: 4 }}
        spacing={6}
        padding="10px"
        width="100%"
      >
        {children}
      </SimpleGrid>
    </Container>
  )
}

const ProductRowSkelton = ({
  numberOfSkelton = 4,
}: {
  numberOfSkelton?: number
}) => {
  return (
    <ProductRowContainer>
      {[...Array(numberOfSkelton)].map((item, index) => (
        <Skeleton key={index} />
      ))}
    </ProductRowContainer>
  )
}

export default ProductRow
