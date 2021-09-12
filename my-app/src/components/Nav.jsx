import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import '../styles/Nav.css';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import clsx from 'clsx';


const drawerWidth = '10vw';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '0 0 10pt 0',
    display: 'flex',
    /* background: '#6BA78E', */
  },
  nav: {
    background: '#6BA78E',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    zIndex: theme.zIndex.drawer + 1,
  },
  space: {
    flexGrow: 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    [theme.breakpoints.up(830)]: {
      display: 'block',
    },
    [theme.breakpoints.down(830)]: {
      display: 'none',
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  menuButton: {
    [theme.breakpoints.down(830)]: {
      display: 'block',
    },
    [theme.breakpoints.up(830)]: {
      display: 'none',
    },
  },
  hide: {
    display: 'none',
  },
}));

export default function Nav() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.nav}>
        <Toolbar>
          <Typography variant="h6">
            BabyBird
          </Typography>
          <div className={classes.space}/>
          <IconButton edge="start" className={classes.menuButton} onClick={handleDrawerOpen} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="right"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {['Chat', 'Resources', 'Support', 'About'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </div>
      </Drawer>
    </div>
  );
}