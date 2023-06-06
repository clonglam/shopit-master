import { Box, Button, HStack, Input, Text } from '@chakra-ui/react'
import React, { useRef } from 'react'

import FooterTitle from './FooterTitle'

const MailChainInput = () => {
  const emailchainInputRef = useRef<HTMLInputElement>(null)

  const submitMailChainForm = (event: React.FormEvent) => {
    event.preventDefault()
    if (emailchainInputRef.current) {
      if (!emailchainInputRef.current.value) {
        console.log('email', emailchainInputRef.current.value)
      }
    }
  }
  return (
    <Box>
      <FooterTitle>Receive Offers, Invites and Updates</FooterTitle>

      <HStack
        paddingY="1rem"
        as="form"
        onSubmit={(event) => submitMailChainForm(event)}
      >
        <Input
          width="70%"
          border="solid 1px"
          borderRadius={1}
          borderColor="gray.500"
          ref={emailchainInputRef}
          placeholder="Enjoy the Rewards"
          variant="outline"
        />
        <Button
          border="2px solid"
          borderColor="primary.500"
          paddingY={3}
          paddingX={10}
          width="30%"
          background="transparent"
          alignItems="center"
          textColor="primary.500"
          marginBottom={5}
          borderRadius={1}
          _hover={{ background: 'primary.500', textColor: '#fff' }}
        >
          <Text fontWeight="700" fontSize="sm">
            SIGN UP
          </Text>
        </Button>
      </HStack>
    </Box>
  )
}

export default MailChainInput
