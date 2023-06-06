import { cleanup, fireEvent, render } from '@testing-library/react'
import React from 'react'

import PriceSlider from '../PriceSlider'

afterEach(cleanup)

const defaultProps = {
  onClick: jest.fn(),
  text: 'Submit',
}

describe('PriceSlider', () => {
  test('Button renders with correct text', () => {
    const { queryByText, rerender } = render(<PriceSlider {...defaultProps} />)
    expect(queryByText('Submit')).toBeTruthy()

    // Change props
    rerender(<PriceSlider {...defaultProps} text="Go" />)
    expect(queryByText('Go')).toBeTruthy()
  })
})
