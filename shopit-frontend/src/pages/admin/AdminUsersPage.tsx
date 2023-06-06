import { Box, Button, Container, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { ProductsTable } from '../../components/products'
import { SectionTitle } from '../../components/UI-Components'

const AdminUsersPage = () => {
  return (
    <Container maxW="7xl">
      <SectionTitle title="Users" subtitle="" />
      <Box bgColor="#fff" paddingX={5} paddingY={8}>
        <HStack justifyContent="flex-end" marginBottom={5}>
          <Button as={Link} to="createproduct">
            New Users
          </Button>
        </HStack>

        <ProductsTable />
      </Box>
    </Container>
  )
}

export default AdminUsersPage
