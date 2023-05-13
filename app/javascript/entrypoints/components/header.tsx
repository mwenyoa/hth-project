import React from 'react'
import { AppBar, Toolbar, CssBaseline, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useStyles } from '../Styles'

type Props = {}

const Header = (props: Props) => {
    const classes = useStyles();
  return (
     <header>
        <CssBaseline />
        <AppBar position="fixed" variant='outlined' className={classes.hedader} elevation={8}>
            <Toolbar className={classes.toolBar}>
            <Typography variant="h3" className={classes.logo}>
            <Link to="/" className={classes.link}>
              HTH
            </Link>
          </Typography>
              <nav className={classes.nav}>
                 <Link to={'/About'} className={classes.link}>
                    About Us
                 </Link>
                 <Link to={'/Events'} className={classes.link}>
                    Events
                 </Link>
              </nav>
            </Toolbar>
        </AppBar>
     </header>
  )
}

export default Header;