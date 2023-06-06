import { Box, Button, Container, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { ProductsTable } from '../../components/products'
import { SectionTitle } from '../../components/UI-Components'

const AdminOrdersPage = () => {
  return (
    <Container maxW="7xl">
      <SectionTitle title="Orders" subtitle="" />
      <Box bgColor="#fff" paddingX={5} paddingY={8}>
        <HStack justifyContent="flex-end" marginBottom={5}>
          <Button as={Link} to="createproduct">
            New Orders
          </Button>
        </HStack>

        <ProductsTable />
      </Box>
    </Container>
  )
}

export default AdminOrdersPage
