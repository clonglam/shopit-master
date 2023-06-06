import { Box } from '@chakra-ui/react'

import CollectionGridView from '../components/collections/CollectionGridView'
import ProductRow from '../components/products/components/ProductRow'
import About from '../components/UI-Components/About'
import HeroBanner from '../components/UI-Components/HeroBanner'
import bannersData from '../data/banners'

const HomePage = () => {
  return (
    <Box backgroundColor="gray.200" minHeight="100vh">
      <HeroBanner banner={bannersData[0]} />
      <ProductRow />
      <CollectionGridView />
      <About />
    </Box>
  )
}

export default HomePage
