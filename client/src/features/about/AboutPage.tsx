import { Button, ButtonGroup, Container, Typography } from '@mui/material'
import { useLazyGet400ErrorQuery, useLazyGet401ErrorQuery } from './errorApi'

export default function AboutPage() {
  const [trigger400Error] = useLazyGet400ErrorQuery()
  const [trigger401Error] = useLazyGet401ErrorQuery()

  return (
    <Container maxWidth='lg'>
      <Typography
        gutterBottom
        variant='h3'
      >
        API Response Error Testing
      </Typography>
      <ButtonGroup fullWidth>
        <Button
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
          variant='contained'
          onClick={
            () => trigger401Error().catch(
              err => console.log(err)
            )
          }
        >
          401 Error Test
        </Button>
      </ButtonGroup>
    </Container>
  )
}