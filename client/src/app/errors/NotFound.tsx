import { SearchOff } from '@mui/icons-material'
import { Button, Paper, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <Paper
      sx={{
        height: 400,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        p: 6,
      }}
    >
      <SearchOff
        sx={{
          fontSize: 100,
          color: '#ff4500',
        }}
        color='warning'
      />
      <Typography
        gutterBottom
        variant='h3'
      >
        We could not find the page you were looking for,
      </Typography>
      <Button
        sx={{
          marginTop: '10px',
          color: '#fffdfa',
          backgroundColor: '#ff4500',
        }}
        component={Link}
        to='/catalog'
      >
        Go Back
      </Button>
    </Paper>
  )
}