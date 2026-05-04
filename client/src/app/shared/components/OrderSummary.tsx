import { Box, Button, Divider, Paper, TextField, Typography } from '@mui/material'
import { currencyFormat } from '../../../lib/utils'

export default function OrderSummary() {
  const subtotal = 0
  const deliveryFee = 0

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      maxWidth='lg'
      mx='auto'
    >
      <Paper
        sx={{
          mb: 2,
          p: 3,
          width: '100%',
          borderRadius: 1
        }}
      >
        <Typography
          variant='h6'
          component='p'
          fontWeight='bold'
        >
          Order Summary
        </Typography>
        <Typography variant='body2'>
          Orders over £100 qualify for free delivery
        </Typography>
        <Box mt={2}>
          <Box
            display='flex'
            justifyContent='space-between'
            mb={1}
          >
            <Typography>
              Subtotal
            </Typography>
            <Typography>
              {currencyFormat(subtotal)}
            </Typography>
          </Box>
          <Box
            display='flex'
            justifyContent='space-between'
            mb={1}
          >
            <Typography>
              Discount
            </Typography>
            <Typography>
              -£0.00
            </Typography>
          </Box>
          <Box
            display='flex'
            justifyContent='space-between'
            mb={1}
          >
            <Typography>
              Delivery Fee
            </Typography>
            <Typography>
              {currencyFormat(deliveryFee)}
            </Typography>
          </Box>
          <Divider sx={{ my: 2 }} />
          <Box
            display='flex'
            justifyContent='space-between'
            mb={1}
          >
            <Typography>
              Total
            </Typography>
            <Typography>
              {currencyFormat(deliveryFee + subtotal)}
            </Typography>
          </Box>
        </Box>
        <Box mt={2}>
          <Button
            variant='contained'
            color='warning'
            fullWidth
            sx={{ mb: 1}}
          >
            Checkout
          </Button>
          <Button
            fullWidth
            sx={{ color: '#000'}}
          >
            Continue Shopping
          </Button>
        </Box>
      </Paper>

      <Paper
        sx={{
          width: '100%',
          borderRadius: 1,
          p: 3
        }}
      >
        <form>
          <Typography
            variant='subtitle1'
            component='label'
          >
            Do you have a voucher code?
          </Typography>
          <TextField
            label='Voucher Code'
            variant='outlined'
            fullWidth
            sx={{ my: 2}}
          />
          <Button
            type='submit'
            variant='contained'
            color='warning'
            fullWidth
          >
            Apply Code
          </Button>
        </form>
      </Paper>
    </Box>
  )
}