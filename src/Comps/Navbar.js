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
    // [theme.breakpoints.down('sm')]: {
    //   backgroundColor: theme.palette.primary.main
    // }
  },
  heading: {
    color: '#fff',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.7rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.4rem'
    }
  },
  btngrp: {
    marginLeft: 'auto',
    [theme.breakpoints.down('xs')]: {
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
    [theme.breakpoints.down('xs')]: {
      display: 'block'
    }
  }
}))


export default function Navbar() {
  const classes = styles();
  return (
    <>
      <AppBar position="fixed" color="secondary" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h4" className={classes.heading}>Appointment Scheduler</Typography>
          <div className={classes.btngrp}>
            <Button className={classes.btn}>About Us</Button>
            <Button className={classes.btn}>Contact Us</Button>
          </div>
          <IconButton className={classes.icon}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}
