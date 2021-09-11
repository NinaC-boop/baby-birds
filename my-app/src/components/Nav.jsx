import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import '../styles/Nav.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    /* background: '#6BA78E', */
  },
  nav: {
    background: '#6BA78E',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  menuButton: {
    /* marginRight: theme.spacing(2), */
  },
  title: {
    
  },
  space: {
    flexGrow: 1,
  },
}));

export default function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.nav}>
        <Toolbar>
          <Typography variant="h6">
            BabyBird
          </Typography>
          <div className={classes.space}/>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}