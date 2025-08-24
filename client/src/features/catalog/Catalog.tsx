import { useEffect, useState } from 'react'
import { Product } from '../../app/models/products'
import ProductList from './ProductList'

export default function Catalog() {
  
 
  
  return (
    <>
      <ProductList products={products} />
    </>
  )
}