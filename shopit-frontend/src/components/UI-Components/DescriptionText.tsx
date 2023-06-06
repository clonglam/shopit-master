import { Text } from '@chakra-ui/react'
import React from 'react'

type Props = { children: string; fontSize?: string }

const DescriptionText = ({ children, fontSize = 'md' }: Props) => {
  if (!children) return <Text />
  return (
    <Text
      fontWeight="300"
      color="gray.600"
      fontSize={fontSize}
      lineHeight="1.6018066406rem"
    >
      {children}
    </Text>
  )
}

export default DescriptionText
