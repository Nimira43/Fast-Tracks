import { useEffect, useState } from 'react'
import { Product } from '../models/products'
import Catalog from '../../features/catalog/Catalog'
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import NavBar from './NavBar'

function App() {
  const [products, setProducts] = useState<Product[]>([])

  const darkMode = false
  const paletteType = darkMode ? 'dark' : 'light'

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: (paletteType === 'light') ? '#eee' : '#111'
      }
    }
  })

  useEffect(() => {
    fetch('https://localhost:5001/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])
    
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Box
        sx={{
          minHeight: '100vh',
          background: darkMode ? '#111' : '#eee' 
        }}
      >
        <Container maxWidth='xl' sx={{mt: 15}}>
          <Catalog products={products} />
        </Container>
      </Box>
    </ThemeProvider>

  )
}

export default App
