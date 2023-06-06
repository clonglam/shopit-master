import React from 'react'
import { useParams } from 'react-router-dom'

import SectionTitle from '../UI-Components/SectionTitle'

const CollectionHeading = () => {
  const { collectionSlug } = useParams()

  return (
    <SectionTitle
      title={collectionSlug || 'Category'}
      subtitle=""
      capitalize={true}
    />
  )
}

export default CollectionHeading
