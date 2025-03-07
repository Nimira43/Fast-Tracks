import { Button } from '@mui/material'
import { Product } from '../../app/models/products'
import ProductList from './ProductList'

type Props = {
  products: Product[]
  addProduct: () => void
}

export default function Catalog({ products, addProduct }: Props) {
  return (
    <>
      <ProductList products={products} />
      <Button
        className='btn-teal'
        variant='contained'
        // color='warning'
        onClick={addProduct}
      >
        Add Product
      </Button>
    </>
  )
}