import { Button, ButtonProps } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

interface Props extends ButtonProps {
  title: string
  to: string
}

const CreateButton = ({ title, to }: Props) => {
  return (
    <Button as={Link} to={to}>
      {title}
    </Button>
  )
}

export default CreateButton
