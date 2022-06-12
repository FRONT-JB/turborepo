import React from 'react'

import { Button } from './Button'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '@emotion/react'
import { theme } from '../../styles/theme'

describe('<Button />', () => {
  it('버튼을 렌더링 합니다!', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button label='Boop' />
      </ThemeProvider>
    )
    expect(screen.getByText('Boop')).toBeInTheDocument()
  })
})
