import {
  Box,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
} from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

import useProductQueryStore from '../../../store/collectionQueryStore'
interface Props {
  text?: string
}

const PriceSlider = ({ text = 'price' }: Props) => {
  const priceRange = useProductQueryStore((s) => s.productQuery.priceRange)
  const setPriceRange = useProductQueryStore((s) => s.setPriceRange)

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
        backgroundColor="transparent"
        _active={{ border: '1px solid' }}
        borderColor="gray.400"
        fontSize="sm"
        fontWeight="400"
      >
        {text}
      </MenuButton>

      <MenuList>
        <Box padding={5}>
          <Text>Price Range</Text>
          <RangeSlider
            defaultValue={[0, 5000]}
            min={0}
            max={10000}
            step={50}
            // eslint-disable-next-line jsx-a11y/aria-proptypes
            aria-label={['min', 'max']}
            onChangeEnd={(val) => setPriceRange({ min: val[0], max: val[1] })}
          >
            <RangeSliderTrack bg="gray.200">
              <RangeSliderFilledTrack bg="primary.500" />
            </RangeSliderTrack>
            <RangeSliderThumb boxSize={6} index={0} />
            <RangeSliderThumb boxSize={6} index={1} />
          </RangeSlider>

          <HStack justifyContent="space-between">
            <Text>$ {priceRange?.min}</Text>
            <Text>$ {priceRange?.max}</Text>
          </HStack>
        </Box>
      </MenuList>
    </Menu>
  )
}

export default PriceSlider
