import { Button, HStack, Input, Select, Text, Tfoot } from '@chakra-ui/react'
import { Table } from '@tanstack/react-table'
import {
  MdArrowLeft,
  MdArrowRight,
  MdFirstPage,
  MdLastPage,
} from 'react-icons/md'

interface Props {
  table: Table<any>
}
const TablePaginationAction = ({ table }: Props) => {
  return (
    <HStack
      gap={2}
      width="100%"
      fontSize="sm"
      marginTop="3"
      alignItems="center"
    >
      <Button
        variant="link"
        onClick={() => table.setPageIndex(0)}
        disabled={!table.getCanPreviousPage()}
      >
        <MdFirstPage />
      </Button>
      <Button
        variant="link"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <MdArrowLeft />
      </Button>
      <Button
        variant="link"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        <MdArrowRight />
      </Button>

      <Button
        variant="link"
        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        disabled={!table.getCanNextPage()}
      >
        <MdLastPage />
      </Button>

      <HStack gap="2">
        <Text>Page</Text>
        <Text fontWeight="600">
          {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </Text>
      </HStack>

      <HStack gap={1}>
        | Go to page:
        <Input
          width="58px"
          height="28px"
          bgColor="#fff"
          borderColor="gray.300"
          type="number"
          defaultValue={table.getState().pagination.pageIndex + 1}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0
            table.setPageIndex(page)
          }}
        />
      </HStack>
      <Select
        // bgColor="#fff"
        width="128px"
        height="28px"
        // borderColor="gray.300"
        value={table.getState().pagination.pageSize}
        onChange={(e) => {
          table.setPageSize(Number(e.target.value))
        }}
      >
        {[10, 20, 30, 40, 50].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </Select>
    </HStack>
  )
}

export default TablePaginationAction
