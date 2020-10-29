import React from 'react'
import {Link as RouterLink} from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => (
  {
    menuItem: {
      marginRight: theme.spacing(1),
    },
  }
));

export default function Nav() {
  const classes = useStyles({

  });

  return (
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Link className={classes.menuItem} to="/auth/login" component={RouterLink} color="inherit">Login</Link>
          <span className={classes.menuItem}>or</span>
          <Link component={RouterLink} to="/auth/register" color="inherit">Register</Link>
        </Toolbar>
      </AppBar>
      // <Link to="/auth/login">login</Link>
      // <Link to="/auth/register">register</Link>
  )
}
