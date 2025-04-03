import { useEffect, useState } from 'react'
import { Product } from '../models/products'
import Catalog from '../../features/catalog/Catalog'
import { Container, createTheme, ThemeProvider } from '@mui/material'
import NavBar from './NavBar'

function App() {
  const [products, setProducts] = useState<Product[]>([])

  const theme = createTheme({
    palette: {
      mode: 'dark'
    }
  })

  useEffect(() => {
    fetch('https://localhost:5001/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])
    
  return (
    <ThemeProvider theme={theme} >
      <NavBar />
      <Container maxWidth='xl' sx={{mt: 15}}>
        <Catalog products={products} />
      </Container>
    </ThemeProvider>
  )
}

export default App
