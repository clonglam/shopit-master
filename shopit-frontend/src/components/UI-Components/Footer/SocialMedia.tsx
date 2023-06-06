import { HStack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import React from 'react'

import FooterTitle from './FooterTitle'

const socialMedias = [
  {
    href: '',
    label: 'Github',
  },
  {
    href: '',
    label: 'Instagram',
  },
]

const SocialMedia = () => {
  return (
    <HStack>
      <FooterTitle>Follow Us On:</FooterTitle>
      {socialMedias.map((sm, index) => (
        <Text
          key={`${index}`}
          fontWeight="400"
          color="gray.600"
          _hover={{ textDecoration: 'underline' }}
        >
          {sm.label}
        </Text>
      ))}
    </HStack>
  )
}

export default SocialMedia
