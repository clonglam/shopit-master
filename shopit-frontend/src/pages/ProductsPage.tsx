import { Container } from '@chakra-ui/react'

import { ProductGrid } from '../components/products'
import useProudcts from '../components/products/hooks/useProducts'
import { SectionTitle } from '../components/UI-Components'
import useProductQueryStore from '../store/productQueryStore'

const ProductsPage = () => {
  const { data: products, isLoading, error } = useProudcts()
  const query = useProductQueryStore((q) => q.productQuery)

  return (
    <Container maxW="6xl">
      <SectionTitle
        title={
          query?.searchText ? `Search of ${query?.searchText}` : 'Products'
        }
        subtitle=""
        capitalize={true}
      />

      <ProductGrid products={products} error={error} isLoading={isLoading} />
    </Container>
  )
}

export default ProductsPage
