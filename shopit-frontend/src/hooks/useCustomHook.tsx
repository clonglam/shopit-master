import { useQuery } from '@tanstack/react-query'
// REf Link: https://tkdodo.eu/blog/testing-react-query
export function useCustomHook() {
  return useQuery({ queryKey: ['customHook'], queryFn: () => 'Hello' })
}
