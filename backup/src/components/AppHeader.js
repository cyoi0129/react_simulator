import React from 'react';
import clsx from 'clsx';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
/* UI icons */
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
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
  const menu = [
    {to: '/', name: 'Home', icon: <HomeIcon />},
    {to: '/service', name: 'Service', icon: <ImportContactsIcon />},
  ];

  const [state, setState] = React.useState({
    menu: false,
    login: false,
    dialog: false,
    showPassword: false,
    password:''
  });

  const toggleDrawer = (menu, open) => () => {
    setState({ ...state, [menu]: open });
  };

  const toogleDialog = () => {
    setState({ ...state, dialog: !state.dialog });
  };

  const handleChange = (password) => () => {
    setState({ ...state, password: password });
  };

  const handleClickShowPassword = () => {
    setState({ ...state, showPassword: false });
  };

  const handleMouseDownPassword = () => {
    setState({ ...state, showPassword: true });
  };
  const loginStatus = () => {
    setState({ ...state, login: true, dialog: !state.dialog });
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer('menu', true)}><MenuIcon /></IconButton>
            <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} open={state['menu']} onClose={toggleDrawer('menu', false)} onOpen={toggleDrawer('menu', true)}>
              <div className={clsx(classes.list)} role="presentation" onClick={toggleDrawer('menu', false)} onKeyDown={toggleDrawer('menu', false)}>
                <List>
                  {menu.map((item, index) => (
                    <Link className={classes.menuItem} to={item.to} key={index}><ListItem button><ListItemIcon>{item.icon}</ListItemIcon><ListItemText primary={item.name} /></ListItem></Link>
                  ))}
                  {state.login && (<Link className={classes.menuItem} to='/user'><ListItem button><ListItemIcon><PersonIcon /></ListItemIcon><ListItemText primary='User' /></ListItem></Link>)}
                </List>
              </div>
            </SwipeableDrawer>
            <Typography variant="h6" className={classes.title}>楽天ペット保険</Typography>
              {state.login ? (<IconButton aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" color="inherit"><AccountCircle /></IconButton>) : (<IconButton aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" color="inherit" onClick={toogleDialog}><ExitToAppIcon /></IconButton>)}
              <Dialog aria-labelledby="form-dialog-title" onClose={toogleDialog} open={state.dialog}>
                <DialogTitle id="form-dialog-title">Login</DialogTitle>
                <DialogContent>
                  <TextField className={clsx(classes.margin, classes.textField)} id="input-with-icon-grid" label="User" />
                  <FormControl className={clsx(classes.margin, classes.textField)}>
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input id="standard-adornment-password" type={state.showPassword ? 'text' : 'password'} value={state.password} onChange={handleChange()} endAdornment={
                      <InputAdornment position="end">
                        <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>{state.showPassword ? <Visibility /> : <VisibilityOff />}</IconButton>
                      </InputAdornment>
                    } />
                    </FormControl>
                </DialogContent>
                <DialogActions>
                  <Button onClick={toogleDialog}>Cancel</Button>
                  <Button color="primary" onClick={loginStatus}>Lgoin</Button>
                </DialogActions>
              </Dialog>
          </Toolbar>
        </AppBar>
      </div>  
    </React.Fragment>
  );
}