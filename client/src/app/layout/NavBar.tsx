import { DarkMode, LightMode } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'

const midLinks = [
  {title: 'catalog', path: '/catalog'},
  {title: 'about', path: '/about'},
  {title: 'contact', path: '/contact'},
]

const rightLinks = [
  {title: 'login', path: '/login'},
  {title: 'register', path: '/register'},
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