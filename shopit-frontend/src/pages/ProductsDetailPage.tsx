import { Box, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

import ProductDetailView from '../components/products'
import useProudct from '../components/products/hooks/useProduct'

const ProductsDetailPage = () => {
  const { slug } = useParams()
  const { data: product, isLoading, error } = useProudct(slug!)

  if (error) return <Text>Error</Text>
  if (isLoading) return <Text>loading</Text>

  return (
    <Box backgroundColor="#fff">
      <ProductDetailView product={product} />
    </Box>
  )
}

export default ProductsDetailPage
