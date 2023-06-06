import { Button, HStack, Skeleton, Text } from '@chakra-ui/react'
import { createColumnHelper } from '@tanstack/react-table'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'

import Table from '../Table/Table'
import useCollections from './hooks/useCollections'

const columnHelper = createColumnHelper<Collection>()

const columns = [
  columnHelper.accessor('title', {
    cell: (info) => info.getValue(),
    header: 'Title',
  }),
  columnHelper.accessor('id', {
    cell: (info) => info.getValue(),
    header: 'Product Id',
  }),
  columnHelper.accessor('createdAt', {
    cell: (info) => `${format(new Date(info.getValue()), 'MM/dd/yyyy')}`,
    header: 'Created At',
    meta: {
      isDate: true,
    },
  }),
  columnHelper.display({
    id: 'actions',
    cell: (info) => (
      <HStack>
        <Link to={`${info.row.getValue('id')}`}>
          <Button>Edit</Button>
        </Link>
        <Link to={`${info.row.getValue('id')}`}>
          <Button>Delete</Button>
        </Link>
      </HStack>
    ),
    header: 'Actions',
    meta: {
      isAction: true,
    },
  }),
]

const CollectionsTable = () => {
  const { data: collections, isLoading, error } = useCollections()

  if (isLoading) return <Skeleton width="100%" height="380px" />
  if (error) return <Text>There is a Error.</Text>

  return <Table columns={columns} data={collections!} />
  return <></>
}

export default CollectionsTable
