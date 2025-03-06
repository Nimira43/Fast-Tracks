import { Button } from '@mui/material'
import { Product } from '../../app/models/products'

type Props = {
  products: Product[]
  addProduct: () => void
}

export default function Catalog({ products, addProduct }: Props) {
  return (
    <>
      <ul>
        {products.map(item => (
          <li key={item.id}>{item.name} - {item.price}</li>
        ))}
      </ul>
      <Button
        variant='contained'
        color='warning'
        onClick={addProduct}
      >
        Add Product
      </Button>
    </>
  )
}