import { Button, HStack, Skeleton, Text, useDisclosure } from '@chakra-ui/react'
import { createColumnHelper } from '@tanstack/react-table'
import { format } from 'date-fns'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import Table from '../../Table'
import { Product } from '../hooks/productService'
import useProudcts from '../hooks/useProducts'
import DeleteProductModal from './DeleteProductModal'

const columnHelper = createColumnHelper<Product>()

const ProductsTable = () => {
  const { data: products, isLoading, error } = useProudcts()
  const [selectedProductId, setSelectedProductId] = useState<
    number | undefined
  >(undefined)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const deleteProductHandler = (productId: number) => {
    setSelectedProductId(productId)
    onOpen()
  }

  const columns = [
    columnHelper.accessor('title', {
      cell: (info) => info.getValue(),
      header: 'Title',
    }),
    columnHelper.accessor('slug', {
      cell: (info) => info.getValue(),
      header: 'Slug',
      enableHiding: true,
    }),
    columnHelper.accessor('id', {
      cell: (info) => info.getValue(),
      header: 'Product Id',
    }),
    columnHelper.accessor('price', {
      cell: (info) => `$ ${info.getValue()}`,
      header: 'Price',
      meta: {
        isNumeric: true,
      },
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
          <Link to={`${info.row.getValue('slug')}`}>
            <Button>Edit</Button>
          </Link>

          <Button onClick={() => deleteProductHandler(info.row.getValue('id'))}>
            Delete
          </Button>
        </HStack>
      ),
      header: 'Actions',
      meta: {
        isAction: true,
      },
    }),
  ]

  if (isLoading) return <Skeleton width="100%" height="380px" />
  if (error) return <Text>There is a Error.</Text>

  return (
    <>
      <DeleteProductModal
        isOpen={isOpen}
        onClose={onClose}
        productId={selectedProductId}
      />

      <Table
        columns={columns}
        data={products!}
        columnVisibility={{ slug: false }}
      />
    </>
  )
}

export default ProductsTable
