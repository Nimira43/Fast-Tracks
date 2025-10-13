import { Box, Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import { useAppSelector } from '../store/store'

function App() {
  const { darkMode } = useAppSelector(state => state.ui)
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
