import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
}

const theme = extendTheme({
  config,
  fonts: {
    body: 'montserrat, system-ui, sans-serif',
    heading: 'freight-big-pro, Georgia, serif',
    mono: 'Menlo, monospace',
  },
  colors: {
    gray: {
      50: '#f9f9f9',
      100: '#ededed',
      200: '#f7f7f7',
      300: '#b3b3b3',
      400: '#a0a0a0',
      500: '#898989',
      600: '#6c6c6c',
      700: '#202020',
      800: '#121212',
      900: '#111',
    },
    primary: {
      500: '#dbb385',
    },
  },
})

export default theme
