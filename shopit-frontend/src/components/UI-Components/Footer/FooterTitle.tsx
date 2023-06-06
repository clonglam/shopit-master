import { Text } from '@chakra-ui/react'
import React from 'react'

type Props = { children: string }

const FooterTitle = ({ children }: Props) => {
  return (
    <Text
      fontWeight="700"
      letterSpacing="1px"
      fontSize="12px"
      textAlign="left"
      textTransform="uppercase"
      color="gray.700"
    >
      {children}
    </Text>
  )
}

export default FooterTitle
