import { useEffect, useState } from 'react'
import { Product } from '../models/products'
import Catalog from '../../features/catalog/Catalog'
import { Container } from '@mui/material'

function App() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('https://localhost:5001/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])
    
  const addProduct = () => {
    setProducts(prevState => [...prevState,
      {
        id: prevState.length + 1,
        name: 'product' + (prevState.length + 1),
        price: (prevState.length * 100) + 100,
        quantityInStock: 100,
        description: 'Testing Description',
        pictureUrl: 'https://picsum.photos/200',
        type: 'test',
        brand: 'Test Brand'
      }
    ])
  }

  return (
    <Container maxWidth='xl'>
      <h1>Fast Tracks</h1>
      <Catalog products={products} addProduct={addProduct}/>
    </Container>
  )
}

export default App
