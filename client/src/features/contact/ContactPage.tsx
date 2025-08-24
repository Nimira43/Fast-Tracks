import { useDispatch, useSelector } from 'react-redux'
import { CounterState, decrement, increment } from './counterReducer'
import { Button, ButtonGroup, Typography } from '@mui/material'

export default function ContactPage() {
  const data = useSelector()

  const dispatch = useDispatch()

  return (
    <>
      <Typography variant='h2'>
        Contact Page - Testing Redux
      </Typography>
      <Typography variant='body1'>
        The data is: {data}
      </Typography>
      <ButtonGroup> 
        <Button
          onClick={() => dispatch(decrement(1))} 
          color='error'
          >Decrement
        </Button>
        <Button
          onClick={() => dispatch(increment(1))} 
          color='success'
          >Increment
        </Button>
        <Button
          onClick={() => dispatch(increment(5))} 
          color='success'
          >Increment By 5
        </Button>
      </ButtonGroup>
    </>
  )
}