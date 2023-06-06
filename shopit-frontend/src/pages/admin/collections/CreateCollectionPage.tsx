import { Container } from '@chakra-ui/react'
import React from 'react'

import { CreateProductForm } from '../../../components/products'

const CreateCollectionPage = () => {
  return (
    <Container maxW="8xl">
      <CreateProductForm />
    </Container>
  )
}

export default CreateCollectionPage
