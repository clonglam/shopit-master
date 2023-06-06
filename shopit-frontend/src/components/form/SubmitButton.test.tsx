import { render, screen } from '../../tests/utils'
import SubmitButton from './SubmitButton'

describe('Form - SubmitButton', () => {
  test('Button render text correctly', () => {
    render(<SubmitButton />)
    expect(screen.getByRole('button', { name: /submit/i })).toBeVisible()

    render(<SubmitButton title="GO" />)
    expect(screen.getByRole('button', { name: /GO/ })).toBeVisible()
  })
})
