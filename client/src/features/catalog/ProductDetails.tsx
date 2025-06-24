import { useParams } from 'react-router-dom'
import { Product } from '../../app/models/products'
import { useEffect, useState } from 'react'

export default function ProductDetails() {
  const { id } = useParams()
  const [product, setProduct] = useState  <Product | null>(null)

  useEffect(() => {
    fetch(`https://localhost:5001/api/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.log(error))
  }, [])

  return (
    <div>ProductDetails</div>
  )
}