import { DarkMode, LightMode } from '@mui/icons-material'
import { AppBar, IconButton, List, ListItem, Toolbar, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

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
        <List sx={{display: 'flex'}}>
          {midLinks.map(({ title, path }) => (
            <ListItem
              component={NavLink} 
              to={path}
              key={path}
              sx={{color: 'inherit', typography: 'h6'}}
            >
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>
      </Toolbar>
    </AppBar>
  )
}