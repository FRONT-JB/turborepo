import { ThemeProvider } from '@emotion/react'
import type { AppProps } from 'next/app'

import { theme, globalStyles } from 'ui'
import 'ui/src/emotion.d'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      {globalStyles}
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
