import { AppBar, Toolbar, Typography } from '@mui/material'

export default function NavBar() {
  return (
    <AppBar position='fixed'>
      <Toolbar className='navbar'>
        <Typography variant='h6' >
          <span className='logo'>Fast Tracks</span></Typography>
      </Toolbar>
    </AppBar>
  )
}