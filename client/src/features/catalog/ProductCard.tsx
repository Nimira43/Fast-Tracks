import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { Product } from '../../app/models/products'

type Props = {
  product: Product
}

export default function ProductCard({product}: Props) {
  return (
    <Card
      elevation={3}
      sx={{
        width: 280,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <CardMedia
        sx={{ height: 240, backgroundSize: 'cover' }}
        image={product.pictureUrl}
        title={product.name}
      />
      <CardContent>
        <Typography
          gutterBottom
          sx={{ textTransform: 'uppercase' }}
          variant='subtitle2'
        >
          <span>{product.name}</span>
        </Typography>  
        <Typography
          variant='h6'
          sx={{ color: 'secondary.main'}}
        >
          <span className='price'>£{(product.price / 100).toFixed(2)}</span>
        </Typography>
      </CardContent>
      <CardActions
        sx={{ justifyContent: 'space-between' }}
      >
        <Button className='tx-teal'>Add To Cart</Button>
        <Button className='tx-teal'>Review</Button>
      </CardActions>
    </Card>
  )
}