import { Container, Spinner } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'

import { EditProductForm } from '../../../components/products'
import useProudct from '../../../components/products/hooks/useProduct'

const EditProductPage = () => {
  const { slug } = useParams()
  const { data: product, isLoading, error } = useProudct(slug!)
  if (isLoading) return <Spinner />

  if (error || !product) throw error
  return (
    <Container maxW="8xl">
      <EditProductForm product={product} />
    </Container>
  )
}

export default EditProductPage
