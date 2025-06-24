import { useParams } from 'react-router-dom'
import { Product } from '../../app/models/products'
import { useState } from 'react'

export default function ProductDetails() {
  const { id } = useParams()
  const [product, setProduct] = useState  <Product | null>(null)
  return (
    <div>ProductDetails</div>
  )
}