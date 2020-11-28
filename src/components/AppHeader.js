import React from 'react';
import clsx from 'clsx';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
/* UI components */
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
/* UI icons */
import MenuIcon from '@material-ui/icons/Menu';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';
import PetsIcon from '@material-ui/icons/Pets';
import ReceiptIcon from '@material-ui/icons/Receipt';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position:'fixed',
    width:'100%',
    top:0,
    zIndex:9,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuRight: {
    color:'#fff'
  },
  title: {
    flexGrow: 1,
  },
  h1: {
    color:'#fff',
    textDecoration:'none'
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuItem: {
    textDecoration: 'none',
    color:'#555'
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    width: '24ch',
  },
}));

export default function AppHeader() {
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const classes = useStyles();
  const menu1 = [
    {to: '/', name: 'Home', icon: <HomeIcon />},
    {to: '/simulator', name: 'Estimation', icon: <ReceiptIcon />},
  ];
  const menu2 = [
    {to: '/', name: 'Plan', icon: <PetsIcon />},
    {to: '/', name: 'Price', icon: <PetsIcon />},
    {to: '/', name: 'Flow', icon: <PetsIcon />},
    {to: '/', name: 'How to use', icon: <PetsIcon />},
  ];

  const [state, setState] = React.useState({
    menu: false,
  });

  const toggleDrawer = (menu, open) => () => {
    setState({ ...state, [menu]: open });
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer('menu', true)}><MenuIcon /></IconButton>
            <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} open={state['menu']} onClose={toggleDrawer('menu', false)} onOpen={toggleDrawer('menu', true)}>
              <div className={clsx(classes.list)} role="presentation" onClick={toggleDrawer('menu', false)} onKeyDown={toggleDrawer('menu', false)}>
                <List>
                  {menu1.map((item, index) => (
                    <Link className={classes.menuItem} to={item.to} key={index}><ListItem button><ListItemIcon>{item.icon}</ListItemIcon><ListItemText primary={item.name} /></ListItem></Link>
                  ))}
                  <Divider />
                  {menu2.map((item, index) => (
                    <ListItem button key={index}><ListItemIcon>{item.icon}</ListItemIcon><a className={classes.menuItem} href={item.to}><ListItemText primary={item.name} /></a></ListItem>
                  ))}
                </List>
              </div>
            </SwipeableDrawer>
            <Typography variant="h6" className={classes.title}><Link className={classes.h1} to="/">Pet Insurance</Link></Typography>
            <IconButton aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" color="inherit"><a href="/"><PhoneIcon　className={classes.menuRight} /></a></IconButton>
          </Toolbar>
        </AppBar>
      </div>  
    </React.Fragment>
  );
}