import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

interface Props {
  data: string
  title: string
}

const DashCard = ({ data, title }: Props) => {
  return (
    <Box bgColor="gray.200" p={5} minHeight="138px">
      <Text fontWeight="600" fontSize="3xl">
        {data}
      </Text>
      <Text
        fontWeight="500"
        fontSize="xl"
        letterSpacing="0.2px"
        color="gray.600"
      >
        {title}
      </Text>
    </Box>
  )
}

export default DashCard
