import { HStack, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import { CartDrawer } from '../../cart'
import useAuthStore from '../../user/useAuthStore'

const NavBanner = () => {
  const getUserByToken = useAuthStore((u) => u.getUserByToken)

  const currentUser = getUserByToken()
  console.log('currentUser', currentUser)

  return (
    <NavBannerContainer>
      <PromotionInsentive />

      <HStack width="120px" color="#fff" spacing={4}>
        <CartDrawer />

        <Link to={currentUser ? '/userprofile' : '/login'}>
          <AiOutlineUser />
        </Link>
      </HStack>
    </NavBannerContainer>
  )
}

const NavBannerContainer = ({ children }: { children: ReactNode }) => {
  return (
    <HStack
      width="100%"
      height="34px"
      backgroundColor="#000"
      justifyContent="space-between"
    >
      {children}
    </HStack>
  )
}

const PromotionInsentive = () => {
  return (
    <Text
      width="100%"
      textAlign="center"
      textTransform="uppercase"
      color="#fff"
      fontWeight="500"
      paddingY={1}
      fontSize="sm"
    >
      Free Shipping & Free Returns*
    </Text>
  )
}

export default NavBanner
