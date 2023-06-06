import { HStack } from '@chakra-ui/react'

import PriceSlider from './PriceSlider'
import SortProductOrder from './SortProductOrder'

const ProductsFilter = () => {
  return (
    <HStack marginBottom={8} justifyContent="space-between">
      {/* <HStack> */}
      <PriceSlider />
      {/* </HStack> */}
      <SortProductOrder />
    </HStack>
  )
}

export default ProductsFilter
