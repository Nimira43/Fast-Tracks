import { useEffect, useState } from 'react'
import { Product } from './products'

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
    <div>
      <h1 style={{color: 'orangered'}}>Fast Tracks</h1>
      <ul>
        {products.map((item, index) => (
          <li key={index}>{item.name} - {item.price}</li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </div>
  )
}

export default App
