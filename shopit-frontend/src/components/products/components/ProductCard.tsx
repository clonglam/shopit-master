import { AspectRatio, Box, Heading, Image, Show, Text } from '@chakra-ui/react'
import { NumericFormat } from 'react-number-format'
import { Link } from 'react-router-dom'

import DescriptionText from '../../UI-Components/DescriptionText'
import { Product } from '../hooks/productService'

type Props = { product: Product }

const ProductCard = ({ product }: Props) => {
  const { id: productId, gallery, title, slug, price } = product
  return (
    <Box backgroundColor="transparent" width="100%">
      <Link to={'/products/' + slug}>
        <ProductImage imageurl={gallery[0]} productId={productId} />

        <Box paddingY={3}>
          <Heading
            fontSize={{ sm: 'xl', md: 'md' }}
            fontWeight="500"
            textTransform="capitalize"
          >
            {title}
          </Heading>

          <Show above="md">
            <DescriptionText fontSize="15px">{``}</DescriptionText>
          </Show>

          <ProductPrice price={price} />
        </Box>
      </Link>
    </Box>
  )
}

const ProductImage = ({
  imageurl,
  productId,
}: {
  imageurl?: string
  productId: number
}) => {
  return (
    <Box padding="2rem" backgroundColor="#fff">
      <AspectRatio maxW="400px" ratio={1 / 1} backgroundColor="#fff">
        <Image
          objectFit="cover"
          sizes="80%"
          _hover={{
            transform: 'scale(1.03)',
            transition: 'transform .15s ease-in',
          }}
          src={
            imageurl ||
            `https://source.unsplash.com/featured/400x600?${productId}`
          }
        />
      </AspectRatio>
    </Box>
  )
}

const ProductPrice = ({ price }: { price: number }) => {
  return (
    <Text color="gray.600" fontSize="sm">
      <NumericFormat
        value={(Math.round(price * 100) / 100).toFixed(2)}
        allowLeadingZeros
        displayType="text"
        prefix={'$'}
        decimalScale={2}
        thousandSeparator=","
      />
    </Text>
  )
}

export default ProductCard
