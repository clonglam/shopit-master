import { Box, Button, HStack, Stack, Text } from '@chakra-ui/react'
import { IconType } from 'react-icons'
import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineTeam,
} from 'react-icons/ai'
import { BsCollection } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import useAdminLayoutStore from '../hooks/useAdminLayoutSore'

export interface IMenu {
  openKeys: string[]
  selectedKey: string
}

const menus = [
  {
    key: '/admin',
    title: 'Dashboard',
    Icon: AiOutlineHome,
  },
  {
    key: '/admin/collections',
    title: 'Collections',
    Icon: BsCollection,
  },
  {
    key: '/admin/products',
    title: 'Products',
    Icon: AiOutlineTeam,
  },
  {
    key: '/admin/orders',
    title: 'Orders',
    Icon: AiOutlineShoppingCart,
  },
  {
    key: '/admin/users',
    title: 'Users',
    Icon: FiUsers,
  },
]

const Sider = (): JSX.Element => {
  const isOpen = useAdminLayoutStore((s) => s.isOpen)
  return (
    <Stack
      padding="20px 0 16px 0"
      paddingX={3}
      height="100vh"
      zIndex="999"
      as="nav"
      aria-labelledby="nested-list-subheader"
      bgColor="gray.200"
      gap={isOpen ? '0.5rem' : '1rem'}
    >
      {menus.map((item) => (
        <MenuItem key={item.key} item={item} isOpen={isOpen} />
      ))}
    </Stack>
  )
}

type MenuItem = {
  key: string
  title: string
  Icon: IconType
}
interface IMenuItem {
  item: MenuItem
  isOpen: boolean
}

const MenuItem = ({ item, isOpen }: IMenuItem) => {
  const { key, Icon, title } = item

  return (
    <Button
      as={Link}
      to={key}
      bgColor="gray.200"
      _hover={{ bgColor: 'gray.300/0.2' }}
    >
      <Stack
        key={key}
        direction={isOpen ? 'row' : 'column'}
        width={isOpen ? '204px' : '64px'}
        justifyContent={isOpen ? 'start' : 'center'}
        columnGap={5}
        alignItems="center"
      >
        {Icon && (
          <Icon style={{ display: 'inline' }} className="item-icon" size={18} />
        )}

        <Text
          fontSize={isOpen ? '14px' : '10px'}
          fontWeight={400}
          maxHeight={isOpen ? '20px' : '14px'}
          overflow={isOpen ? 'ellipsis' : 'hidden'}
          maxWidth="100%"
          display="block"
        >
          {title}
        </Text>
      </Stack>
    </Button>
  )
}

export default Sider
