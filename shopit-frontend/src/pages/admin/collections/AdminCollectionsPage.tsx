import { Box, Button, Container, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

// import CollectionsTable from '../../../components/collections/CollectionsTable'
import { SectionTitle } from '../../../components/UI-Components'

const AdminCollectionsPage = () => {
  return (
    <Container maxW="7xl">
      <SectionTitle title="Collections" subtitle="" />
      <Box bgColor="#fff" paddingX={5} paddingY={8}>
        <HStack justifyContent="flex-end" marginBottom={5}>
          <Button as={Link} to="createcollection">
            New Collection
          </Button>
        </HStack>

        {/* <CollectionsTable /> */}
      </Box>
    </Container>
  )
}

export default AdminCollectionsPage
