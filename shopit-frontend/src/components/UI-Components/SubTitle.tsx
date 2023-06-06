import { Text } from '@chakra-ui/react'
import React from 'react'

type Props = {
  children: string
}

const SubTitle = ({ children }: Props) => {
  return (
    <Text
      letterSpacing={3}
      fontSize="sm"
      textTransform="uppercase"
      color="primary.500"
    >
      {children}
    </Text>
  )
}

export default SubTitle
