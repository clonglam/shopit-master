import { Box, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Addres = () => {
  return (
    <Stack paddingY={5} textColor="gray.600">
      <Text>HORNE</Text>
      <Box textDecoration="underline">
        <Text>{`747 6th St South Building C,`}</Text>
        <Text>{` Kirkland, WA 98033,`} </Text>
        <Text>{`United States`}</Text>
      </Box>
    </Stack>
  )
}

export default Addres
