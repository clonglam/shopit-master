import { Heading, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import HamburrgerButton from './Layout/HamburrgerButton'

const AdminNavMenu = (): JSX.Element => {
  return (
    <HStack justifyContent="space-between" bgColor="gray.200">
      <HStack width="240px" alignItems="center">
        <HamburrgerButton />

        <Heading
          as={Link}
          to={'/'}
          display="inline"
          className="branding-text"
          variant="h3"
          whiteSpace="nowrap"
          bgColor="gray.200"
        >
          Shopit
        </Heading>
      </HStack>

      {/* <AccountMenu /> */}
    </HStack>
  )
}

export default AdminNavMenu
