import { Box, Heading, Stack } from '@chakra-ui/react'
import DOMPurify from 'dompurify'

interface Props {
  description: string
}

const ProductDescription = ({ description }: Props) => {
  return (
    <Stack
      padding={8}
      minHeight="300px"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
      marginTop="80px"

      // width="66%"
    >
      <Heading fontWeight="300" fontSize="6xl" marginTop="-80px">
        Description
      </Heading>

      <Box fontWeight="300" id="product-description" width="300px">
        <div
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
        />
      </Box>
    </Stack>
  )
}

export default ProductDescription
