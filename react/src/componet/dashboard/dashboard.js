import React, { useEffect } from 'react';
import clsx from 'clsx';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles, useTheme,fade } from '@material-ui/core/styles';

import {useStyles} from './dashboard.style'
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RouterIcon from '@material-ui/icons/Router';
import DeviceHubIcon from "@material-ui/icons/DeviceHub";
import SearchIcon from '@material-ui/icons/Search';
import Login from '../login/login'
import DevicePage from '../device/devices'
import { AccountCircle } from '@material-ui/icons';
import { Menu, MenuItem, FormGroup, FormControlLabel, Switch } from '@material-ui/core';
import { Auth } from '../../lib/api/auth.model';

export function MiniDrawer({onLogout}) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [currentPage, setcurrentPage] = React.useState("login");
  const [auth, setAuth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isOpen = Boolean(anchorEl);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleChange = event => {
    setAuth(event.target.checked);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const _handleLogot = () =>{
    setAnchorEl(null)
    onLogout()
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            id="DrawerButton"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography  className={classes.title} variant="h6" noWrap>
            EMF
          </Typography>

          <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              {Auth.user.user.fullname}
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={isOpen}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={_handleLogot}>Logout</MenuItem>
              </Menu>

            </div>

        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose} id="DrawerClose">
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem button onClick = {()=>setcurrentPage("login")}>
              <ListItemIcon><DeviceHubIcon /></ListItemIcon>
              <ListItemText primary={"Site"} />
            </ListItem>
            <ListItem button onClick = {()=>setcurrentPage("test")}>
              <ListItemIcon><RouterIcon /></ListItemIcon>
              <ListItemText primary={"Device"} />
            </ListItem>
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
            {currentPage === "login" && <Login />}
            {currentPage === "test" && <DevicePage />}           
      </main>
    </div>
  );
}