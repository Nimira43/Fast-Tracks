import { Button, ButtonGroup, Container, Typography } from '@mui/material'
import { useLazyGet400ErrorQuery, useLazyGet401ErrorQuery, useLazyGet404ErrorQuery, useLazyGet500ErrorQuery, useLazyGetValidationErrorQuery } from './errorApi'

export default function AboutPage() {
  const [trigger400Error] = useLazyGet400ErrorQuery()
  const [trigger401Error] = useLazyGet401ErrorQuery()
  const [trigger404Error] = useLazyGet404ErrorQuery()
  const [trigger500Error] = useLazyGet500ErrorQuery()
  const [triggerValidationError] = useLazyGetValidationErrorQuery()

  return (
    <Container maxWidth='lg'>
      <Typography
        gutterBottom
        variant='h3'
      >
        API Response Error Testing
      </Typography>
      <ButtonGroup fullWidth >
        <Button
          className='test-btn'
          variant='contained'
          onClick={
            () => trigger400Error().catch(
              err => console.log(err)
            )
          }
        >
          400 Error Test
        </Button>
        <Button
          className='test-btn'
          variant='contained'
          onClick={
            () => trigger401Error().catch(
              err => console.log(err)
            )
          }
        >
          401 Error Test
        </Button>
        <Button
          className='test-btn'
          variant='contained'
          onClick={
            () => trigger404Error().catch(
              err => console.log(err)
            )
          }
        >
          404 Error Test
        </Button>
        <Button
          className='test-btn'
          variant='contained'
          onClick={
            () => trigger500Error().catch(
              err => console.log(err)
            )
          }
        >
          500 Error Test
        </Button>
        <Button
          className='test-btn'
          variant='contained'
          onClick={
            () => triggerValidationError().catch(
              err => console.log(err)
            )
          }
        >
          Validation Error Test
        </Button>
      </ButtonGroup>
    </Container>
  )
}