import { Text } from '@chakra-ui/react'

type Props = {
  children: string
  textAlign?: 'left' | 'center' | 'right'
}

const DescriptionTextSm = ({ children, textAlign = 'left' }: Props) => {
  if (!children) return <></>
  return (
    <Text
      textAlign={textAlign}
      color="gray.500"
      fontWeight="600"
      fontSize="10px"
      textTransform="capitalize"
      letterSpacing="0.2rem"
      marginBottom={2}
    >
      {children}
    </Text>
  )
}

export default DescriptionTextSm
