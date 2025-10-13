import { useState } from 'react'
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'



function App() {
  const paletteType = darkMode ? 'dark' : 'light'

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: (paletteType === 'light') ? '#eee' : '#111'
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Box
        sx={{
          minHeight: '100vh',
          background: darkMode ? '#111' : '#eee',
          py: 6
        }}
      >
        <Container maxWidth='xl' sx={{mt: 8}}>
          <Outlet />
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
