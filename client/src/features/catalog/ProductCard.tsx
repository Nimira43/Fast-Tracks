import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { Product } from '../../app/models/products'
import { Link } from 'react-router-dom'
import { useAddBasketItemMutation } from '../basket/basketApi'

type Props = {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const [addBasketItem, {isLoading}] = useAddBasketItemMutation()

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
          <span 
            className='price'
            style={{color: '#fca904'}}
          >
            £{(product.price / 100).toFixed(2)}
          </span>
        </Typography>
      </CardContent>
      <CardActions
        sx={{ justifyContent: 'space-between' }}
      >
        <Button
          disabled={isLoading}  
          color='warning'
          onClick={
            () => addBasketItem({
              productId: product.id,
              quantity: 1
            })
          }
        >
          Add To Cart
        </Button>
        <Button
          component={Link} 
          to={`/catalog/${product.id}`} 
          color='warning'
        >
          View
        </Button>
      </CardActions>
    </Card>
  )
}