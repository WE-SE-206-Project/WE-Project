import React from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const styles = makeStyles(theme => ({
  appbar: {
    padding: theme.spacing(1.5),
  },
  heading: {
    color: '#fff',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.4rem'
    }
  },
  btngrp: {
    marginLeft: 'auto',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  btn: {
    textTransform: 'none',
    color: '#fff',
    fontSize: '17px',
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  icon: {
    color: '#fff',
    // marginRight: theme.spacing(1),
    marginLeft: 'auto',
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    }
  }
}))


export default function Navbar() {
  const classes = styles();
  return (
    <>
      <AppBar position="fixed" color="primary" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h4" className={classes.heading}>Appointment Scheduler</Typography>
          <div className={classes.btngrp}>
            <Button className={classes.btn}>About Us</Button>
            <Button className={classes.btn}>Contact Us</Button>
          </div>
          <IconButton className={classes.icon} ref={anchor} onClick={handleChange}>
            <MenuIcon />
          </IconButton>
          <Popper anchorEl={anchor.current} open={open} onClose={handleClose} >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList variant="selectedMenu" >
                  <MenuItem onClick={handleClose}>
                    Profile
                  </MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Login</MenuItem>
                  <MenuItem onClick={handleClose}>Register</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                  <MenuItem onClick={handleClose} className={classes.buttontags}>Contact us</MenuItem>
                  <MenuItem onClick={handleClose} className={classes.buttontags}>About Us</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Popper>
        </Toolbar>
      </AppBar>
    </>
  )
}
