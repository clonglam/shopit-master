import { Box, Button, Heading, HStack, Show } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import SearchInput from '../SearchInput'
import CollectionNacigate from './CollectionNacigate'

const NavBar = () => {
  return (
    <HStack
      paddingX="3rem"
      paddingY="10px"
      justifyContent="space-between"
      spacing={5}
    >
      <Box width="128px">
        <Link to="/">
          <Heading textAlign="center">Shop it</Heading>
        </Link>
      </Box>

      <Show above="md">
        <CollectionNacigate />
        <SearchInput />
      </Show>

      <Show below="md">
        <Button
          backgroundColor="transparent"
          color="gray.400"
          fontWeight="400"
          _hover={{ fontWeoght: '600', color: 'gray.600' }}
        >
          Menu
        </Button>
      </Show>
    </HStack>
  )
}

export default NavBar
