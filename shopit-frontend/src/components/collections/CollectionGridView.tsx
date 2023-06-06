import { Box, Container, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

import promotionCategories from '../../data/promotionCategories'
import PromotionCard from '../UI-Components/PromotionCard'

const CollectionGridView = () => {
  return (
    <Box backgroundColor="#fff" paddingY={12} boxShadow="none">
      <Container maxW="7xl">
        <SimpleGrid
          columns={{ sm: 2, md: 3, xl: 3 }}
          spacing={6}
          padding="10px"
          width="100%"
        >
          {promotionCategories.map((promotion) => (
            <PromotionCard key={promotion.id} promotion={promotion} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default CollectionGridView
