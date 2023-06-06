import { render, screen } from '@testing-library/react'

import SortProductOrder from '../SortProductOrder'

const sortOrders = [
  { value: '', label: 'Relevance' },
  { value: '-added', label: 'Date added' },
  { value: 'name', label: 'Name' },
  { value: '-released', label: 'Release date' },
  { value: '-metacritic', label: 'Popularity' },
  { value: '-rating', label: 'Average rating' },
]

describe('SortProductOrder', () => {
  it('should render sucessfully', () => {
    render(<SortProductOrder />)

    const menuItems = screen.getAllByRole('button')

    menuItems.forEach((item) => expect(item).toBeInTheDocument())
  })

  it('should have label on every selection', () => {
    render(<SortProductOrder />)

    const checkboxLabels = screen.queryAllByLabelText('')
    checkboxLabels.forEach((emptyLabel) =>
      expect(emptyLabel).not.toBeInTheDocument()
    )
  })
})
