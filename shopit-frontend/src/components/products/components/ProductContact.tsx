import { Grid, HStack, Text } from '@chakra-ui/react'
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineQuestionCircle,
} from 'react-icons/ai'

const ProductContact = () => {
  const contacts = [
    { id: 1, Icon: AiOutlineQuestionCircle, label: 'Question' },
    { id: 2, Icon: AiOutlineMail, label: 'Email' },
    { id: 3, Icon: AiOutlinePhone, label: '454-455-4545' },
  ]

  return (
    <Grid
      textAlign="center"
      paddingY={2}
      borderY="0.5px solid"
      borderColor="gray.400"
      width="100%"
      color="gray.500"
      templateColumns={'1fr 1fr 1fr'}
      fontSize={{ base: 'sm', md: '10px' }}
    >
      {contacts.map(({ id, Icon, label }, index) => (
        <HStack
          key={id}
          justifyContent="center"
          borderRight={
            contacts.length - 1 !== index ? '1px solid' : '0px solid'
          }
          borderRightColor="gray.400"
          paddingX={3}
        >
          <Icon />
          <Text>{label}</Text>
        </HStack>
      ))}
    </Grid>
  )
}

export default ProductContact
