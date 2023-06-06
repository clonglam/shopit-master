import { create } from 'zustand'

export interface Range {
  min: number
  max: number
}
export interface ProductQuery {
  collectionSlug?: string
  sortOrder?: string
  priceRange?: Range
}

interface ProductQueryStore {
  productQuery: ProductQuery
  setCollectionSlug: (collectionSlug: string) => void
  setSortOrder: (order: string) => void
  setPriceRange: (range: Range) => void
}

const useProductQueryStore = create<ProductQueryStore>((set) => ({
  productQuery: {} as ProductQuery,
  setCollectionSlug: (collectionSlug) =>
    set((store) => ({
      productQuery: { ...store.productQuery, collectionSlug },
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
