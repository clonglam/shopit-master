import useCollections from './useCollections'

const useCollection = (collectionId: number) => {
  const { data: collections } = useCollections()
  return (
    collections?.find((collection) => collection.id === collectionId) || null
  )
}

const useCollectionBySlug = (collectionSlug: string) => {
  const { data: collections } = useCollections()
  return (
    collections?.find((collection) => collection.slug === collectionSlug) ||
    null
  )
}

export default useCollection
export { useCollectionBySlug }
