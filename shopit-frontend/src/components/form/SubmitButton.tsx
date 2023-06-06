import { Button } from '@chakra-ui/react'
import React from 'react'

interface Props {
  title?: string
}

const SubmitButton = ({ title = 'Submit' }: Props) => {
  return (
    <Button
      type="submit"
      width="100%"
      bgColor="primary.500"
      borderRadius="0"
      border="1px solid"
      borderColor="primary.500"
      color="#fff"
      _hover={{ bgColor: 'transparent' }}
    >
      {title}
    </Button>
  )
}

export default SubmitButton
