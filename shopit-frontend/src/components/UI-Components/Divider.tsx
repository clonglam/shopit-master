import { Box, BoxProps } from '@chakra-ui/react'

const Divider = (props: BoxProps) => {
  return (
    <Box
      marginY="5px"
      borderBottom="solid 1px"
      borderColor="gray.600"
      {...props}
    />
  )
}

export default Divider
