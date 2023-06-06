export interface Inventory {
  id: number
  quantity: number
  createdAt: string
  updateAt: string
  deltedAt?: string
}

export const inventories: Inventory[] = [
  {
    id: 1,
    quantity: 1,
    createdAt: '2023-04-27T14:25:36.123456Z',
    updateAt: '2023-04-27T14:25:36.123456Z',
  },
]
