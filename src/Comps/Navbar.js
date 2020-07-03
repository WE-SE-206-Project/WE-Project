import React from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  appbar: {
    padding: theme.spacing(1.5),
    [theme.breakpoints.down('sm')]: {
      backgroundColor: theme.palette.primary.main
    }
  },
  heading: {
    color: '#fff',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem'
    }
  },
  btngrp: {
    marginLeft: 'auto'
  },
  btn: {
    textTransform: 'none',
    color: '#fff',
    fontSize: '17px',
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  }
}))


export default function Navbar() {
  const classes = styles();
  return (
    <>
      <AppBar position="fixed" color="secondary" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h4" className={classes.heading}>Appointment Scheduling System</Typography>
          <div className={classes.btngrp}>
            <Button className={classes.btn}>About Us</Button>
            <Button className={classes.btn}>Contact Us</Button>
          </div>
          <IconButton>

          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}
