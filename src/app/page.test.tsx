import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Home from './page'

describe('Home Page', () => {
  it('renders the h1 title correctly', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('🚀 Template Base')
  })

  it('renders the description text', () => {
    render(<Home />)

    const description = screen.getByText(
      /use this template as a starting point for your next.js projects/i,
    )
    expect(description).toBeInTheDocument()
  })
})
