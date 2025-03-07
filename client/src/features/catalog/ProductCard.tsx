import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Product } from '../../app/models/products'

type Props = {
  product: Product
}

export default function ProductCard({product}: Props) {
  return (
    <Card
      elevation={3}
    >
      <CardMedia
        sx={{ height: 240, backgroundSize: 'cover' }}
        image={product.pictureUrl}
        title={product.name}
      />
      <CardContent>
        <Typography
          gutterBottom
          sx={{ color: 'seconardy.main' }}
          variant='subtitle2'
        >
          <span>{product.name}</span>
        </Typography>  
      </CardContent>
    </Card>
  )
}