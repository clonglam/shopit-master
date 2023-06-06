import { Container, Grid, GridItem } from '@chakra-ui/react'

import { Product } from '../hooks/productService'
import ProductDescription from './ProductDescription'
import ProductDetail from './ProductDetail'
import ProductGallery from './ProductGallery'
import PurchaseIncentives from './PurchaseIncentives'

interface Props {
  product: Product
}

const ProductDetailView = ({ product }: Props) => {
  return (
    <Container maxW="8xl">
      <Grid
        // templateColumns={{ base: '1fr', md: '66% 33.33%' }}
        templateAreas={{
          base: `"gallery gallery"
                  "detail detail"
                  "description description"
                  "incentive incentive"`,

          md: `"gallery detail"
                  "description detail"
                  "incentive detail"`,
        }}
        columnGap={8}
        gridTemplateColumns={'66% 1fr'}
        marginBottom={8}
      >
        <GridItem area={'gallery'}>
          <ProductGallery gallery={product.gallery || []} />
        </GridItem>

        <GridItem area={'detail'}>
          <ProductDetail product={product} />
        </GridItem>

        <GridItem area={'description'}>
          <ProductDescription description={product.description} />
        </GridItem>

        <GridItem area={'incentive'} justifySelf="center">
          <PurchaseIncentives />
        </GridItem>
      </Grid>
    </Container>
  )
}

export default ProductDetailView
