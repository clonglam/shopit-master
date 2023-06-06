import APIClient from '../../../services/api-client'

interface Product {
  id: number
  title: string
  slug: string
  description: string
  price: number
  SKU: string
  gallery: string[]
  collectionsOnProducts?: Omit<CollectionsOnProducts, 'product'>[]
  hoverImage?: string
  thumbnail?: string
  inventory: number
  createdAt: string
  updatedAt: string
  deletedAt: string | null
}

type CollectionsOnProducts = {
  collectionId: number
  productId: number
  collection: Collection
  product: Product
}
type CreateProduct = {
  title: string
  slug: string
  description: string
  price: number
  SKU: string
  gallery: string[]
  collectionIds?: number[]
  hoverImage?: string
  thumbnail?: string
  inventory: number
}

type UpdateProduct = {
  title: string
  slug: string
  description: string
  price: number
  SKU: string
  gallery: string[]
  collectionIds?: number[]
  hoverImage?: string
  thumbnail?: string
  inventory: number
}

const apiClient = new APIClient<Product>('/products')

export type { CreateProduct, Product, UpdateProduct }
export default apiClient
