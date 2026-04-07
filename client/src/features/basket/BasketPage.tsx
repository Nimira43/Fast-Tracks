import { Typography } from '@mui/material'
import { useFetchBasketQuery } from './basketApi'

export default function BasketPage() {
  const {data, isLoading } = useFetchBasketQuery()
  
  if (isLoading) return (
    <Typography>
      Loading basket...
    </Typography>
  )

  if (!data) return (
    <Typography variant='h3'>
      Basket is currently empty
    </Typography>
  )

  return (
    <div>{data.basketId}</div>   
  )
}