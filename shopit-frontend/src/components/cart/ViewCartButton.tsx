import { Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
  onClose: () => void
}

const ViewCartButton = ({ onClose }: Props) => {
  return (
    <Button
      as={Link}
      to="/cart"
      variant="outline"
      onClick={onClose}
      borderRadius={3}
      borderColor="primary.500"
      textColor="primary.500"
    >
      view cart
    </Button>
  )
}

export default ViewCartButton
