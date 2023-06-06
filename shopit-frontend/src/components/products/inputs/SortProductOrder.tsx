import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

import useProductQueryStore from '../../../store/collectionQueryStore'

const SortProductOrder = () => {
  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
  ]
  const setSortOrder = useProductQueryStore((s) => s.setSortOrder)
  const sortOrder = useProductQueryStore((s) => s.productQuery.sortOrder)
  const currentSortOrder = sortOrders.find((order) => order.value === sortOrder)

  return (
    <Menu>
      <MenuButton
        as={Button}
        variant="outline"
        border="0px"
        backgroundColor="transparent"
        _active={{ border: '1px solid' }}
        borderColor="gray.400"
        fontSize="sm"
        fontWeight="400"
        rightIcon={<BsChevronDown />}
      >
        Order by: {currentSortOrder?.label || 'Relevance'}
      </MenuButton>

      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => setSortOrder(order.value)}
            key={order.value}
            value={order.value}
            fontWeight={order.value === sortOrder ? '500' : '300'}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default SortProductOrder
