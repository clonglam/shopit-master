import { create } from 'zustand'

export interface Range {
  min: number
  max: number
}
export interface ProductQuery {
  searchText?: string
  sortOrder?: string
  priceRange?: Range
}

interface ProductQueryStore {
  productQuery: ProductQuery
  setProductQuery: (searchText: string) => void
  setSortOrder: (order: string) => void
  setPriceRange: (range: Range) => void
}

const useProductQueryStore = create<ProductQueryStore>((set) => ({
  productQuery: {} as ProductQuery,
  setProductQuery: (searchText) =>
    set((store) => ({
      productQuery: { ...store.productQuery, searchText: searchText },
    })),
  setSortOrder: (order) =>
    set((store) => ({
      productQuery: { ...store.productQuery, sortOrder: order },
    })),
  setPriceRange: (range) =>
    set((store) => ({
      productQuery: { ...store.productQuery, priceRange: range },
    })),
}))

export default useProductQueryStore
