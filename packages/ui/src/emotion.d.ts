import '@emotion/react'
import { ThemeTypes } from './types/types'

declare module '@emotion/react' {
  interface Theme extends ThemeTypes {}
}
