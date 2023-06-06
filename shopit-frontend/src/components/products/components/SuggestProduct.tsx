import { Box, Heading } from '@chakra-ui/react'

import ProductRow from './ProductRow'

const SuggestProduct = () => {
  return (
    <Box padding={8} margin="auto" bgColor="#fff">
      <Heading fontWeight="300">Suggested Funiture</Heading>
      <ProductRow />
    </Box>
  )
}

export default SuggestProduct
