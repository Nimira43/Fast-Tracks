import { Button, ButtonGroup, Container, Typography } from '@mui/material'

export default function AboutPage() {
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
          
        >
          400 Error Test
        </Button>
      </ButtonGroup>
    </Container>
  )
}