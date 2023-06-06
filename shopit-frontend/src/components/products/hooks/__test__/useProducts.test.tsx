import { renderHook, waitFor } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import { createWrapper } from '../../../../tests/utils'
import useProducts from '../useProducts'

jest.mock('../productService')

const product = {
  id: 1,
  slug: 'signatu-t-shirt',
  title: 'signature Tee shirt',
  description: 'Designed By Awarded Designer, Penguunasf safg. ',
  collectionsOnProducts: [],
  inventory: 1,
  SKU: '12321923123123',
  price: 42142.21,
  gallery: [
    'https://images.unsplash.com/photo-1682353213925-63ab4e0340df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  ],
  createdAt: '2023-04-27T14:25:36.123456Z',
  updateAt: '2023-04-27T14:25:36.123456Z',
}

const handlers = [
  rest.get('/products', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([product]), ctx.delay(150))
  }),
]

export const server = setupServer(...handlers)

beforeAll(() => {
  server.listen()
})

afterEach(() => server.resetHandlers())

afterAll(() => server.close())

describe('query hook', () => {
  test('successful query hook', async () => {
    //     // const apiClient.getAll = jest.fn().mockReturnValue({})
    //     const { result } = renderHook(() => useProducts(), {
    //       wrapper: createWrapper(),
    //     })
    //     await waitFor(() => expect(result.current.isSuccess).toBe(true))
    //     expect(result.current.data).toBe([product])
    //   })
    //   // test('failure query hook', async () => {
    //   //   server.use(
    //   //     rest.get('*', (req, res, ctx) => {
    //   //       return res(ctx.status(500))
    //   //     })
    //   //   )
    //   //   const { result } = renderHook(() => useProducts(), {
    //   //     wrapper: createWrapper(),
    //   //   })
    //   //   await waitFor(() => expect(result.current.isError).toBe(true))
    //   //   expect(result.current.error).toBeDefined()
  })
})
