import { renderHook, waitFor } from '@testing-library/react'
import { rest } from 'msw'
import * as React from 'react'

import { useCustomHook } from '../hooks/useCustomHook'
import { server } from '../setupTests'
import { createWrapper } from './utils'

describe('query hook', () => {
  test('successful query hook', async () => {
    const { result } = renderHook(() => useCustomHook(), {
      wrapper: createWrapper(),
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data).toBe('Hello')
  })

  //   test('failure query hook', async () => {
  //     server.use(
  //       rest.get('*', (req, res, ctx) => {
  //         return res(ctx.status(500))
  //       })
  //     )

  //     const { result } = renderHook(() => useCustomHook(), {
  //       wrapper: createWrapper(),
  //     })

  //     await waitFor(() => expect(result.current.isError).toBe(true))

  //     expect(result.current.error).toBeDefined()
  //   })
})
