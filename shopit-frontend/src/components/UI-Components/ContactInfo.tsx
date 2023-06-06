import { HStack, Stack, Text } from '@chakra-ui/react'
import {
  AiOutlineClockCircle,
  AiOutlineMail,
  AiOutlinePhone,
} from 'react-icons/ai'

import Addres from './Footer/Addres'

const ContactInfo = () => {
  return (
    <Stack
      paddingY={5}
      fontWeight="300"
      color="gray.600"
      spacing={0}
      fontSize="0.9rem"
    >
      <HStack>
        <AiOutlineMail />
        <Text>hello@himo.com</Text>
      </HStack>
      <HStack>
        <AiOutlinePhone />
        <Text>(454)-454-4545</Text>
      </HStack>
      <HStack>
        <AiOutlineClockCircle />
        <Text>M-F 9am - 5:30pm PST</Text>
      </HStack>
      <Addres />
    </Stack>
  )
}

export default ContactInfo
