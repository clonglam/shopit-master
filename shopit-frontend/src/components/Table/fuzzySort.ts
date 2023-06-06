import { compareItems } from '@tanstack/match-sorter-utils'
import { SortingFn, sortingFns } from '@tanstack/react-table'

export const fuzzySort = (rowA: any, rowB: any, columnId: any) => {
  let dir = 0

  // Only sort by rank if the column has ranking information
  if (rowA.columnFiltersMeta[columnId]) {
    dir = compareItems(
      rowA.columnFiltersMeta[columnId]!,
      rowB.columnFiltersMeta[columnId]!
    )
  }

  // Provide an alphanumeric fallback for when the item ranks are equal
  return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir
}
