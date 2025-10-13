import { useState } from 'react'
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

const getInitialDarkMode = () => {
  
}

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const paletteType = darkMode ? 'dark' : 'light'

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: (paletteType === 'light') ? '#eee' : '#111'
      }
    }
  })

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
    
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
      />
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
