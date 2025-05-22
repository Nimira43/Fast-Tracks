import { DarkMode, LightMode } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'

const midLinks = [
  
]

type Props = {
  toggleDarkMode: () => void
  darkMode: boolean
}

export default function NavBar({ darkMode, toggleDarkMode}: Props) {
  return (
    <AppBar position='fixed'>
      <Toolbar>
        <Typography variant='h6' >
          <span className='logo'>Fast Tracks</span>
        </Typography>
        <IconButton
          onClick={toggleDarkMode}
        >
          {darkMode ? <DarkMode /> : <LightMode sx={{ color: 'yellow' }}/>}
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}