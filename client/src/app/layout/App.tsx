import { useState } from 'react'
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

const getInitialDarkMode = () => {
  const storedDarkMode = localStorage.getItem('darkMode')
  return storedDarkMode ? JSON.parse(storedDarkMode) : true
}

function App() {
  const [darkMode, setDarkMode] = useState(getInitialDarkMode())
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
    localStorage.setItem('darkMode', JSON.stringify(!darkMode))
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
