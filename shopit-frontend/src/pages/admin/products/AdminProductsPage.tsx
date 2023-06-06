import { Box, Container, HStack } from '@chakra-ui/react'

import { ProductsTable } from '../../../components/products'
import CreateButton from '../../../components/Table/CreateButton'
import { SectionTitle } from '../../../components/UI-Components'

const AdminProductsPage = () => {
  return (
    <Container maxW="8xl">
      <SectionTitle title="Products" subtitle="" />
      <Box bgColor="#fff" paddingX={5} paddingY={8} width="100%">
        <HStack justifyContent="flex-end" marginBottom={5}>
          <CreateButton title="New Product" to="createproduct" />
        </HStack>

        <ProductsTable />
      </Box>
    </Container>
  )
}

export default AdminProductsPage
