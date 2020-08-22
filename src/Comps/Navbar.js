import React, { useState, useRef, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Popper,
  Menu,
  MenuList,
  ClickAwayListener,
  MenuItem,
  Paper
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/auth';


const styles = makeStyles(theme => ({
  appbar: {
    padding: theme.spacing(1.5),
  },
  heading: {
    color: '#fff',
    cursor: 'pointer',
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
  },
  popper: {
    zIndex: theme.zIndex.appBar + 1,
  }
}))


export default function Navbar() {
  const classes = styles();
  const anchor = useRef();
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const auth = useSelector(state => state.auth.auth);
  const dispatch = useDispatch();


  const handleChange = (e) => setOpen(!open)

  const handleClose = () => setOpen(false)

  useEffect(() => {
    // console.log({ auth })
  }, [])


  return (
    <>
      <AppBar position="fixed" color="primary" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h4"
            className={classes.heading}
            onClick={() => history.push('/')}>Appointment Scheduler</Typography>
          <div className={classes.btngrp}>
            {
              !auth.status
                ?
                <>
                  <Button className={classes.btn} onClick={() => history.push('/about_us')}>About Us</Button>
                  <Button className={classes.btn} onClick={() => history.push('/contact_us')}>Contact Us</Button>
                </>
                :
                <>
                  <Button className={classes.btn}>Profile</Button>
                  <Button className={classes.btn}>Dashboard</Button>
                  <Button className={classes.btn} onClick={() => history.push('/appointment')}>Create Appointment</Button>
                  <Button className={classes.btn} onClick={() => {
                    dispatch(logout());
                    history.push('/');
                  }}>Logout</Button>

                  {/* <Button className={classes.btn}>About Us</Button> */}
                </>
            }

          </div>
          <IconButton className={classes.icon} ref={anchor} onClick={handleChange}>
            <MenuIcon />
          </IconButton>
          <Popper anchorEl={anchor.current} open={open} onClose={handleClose} className={classes.popper}>
            <Paper className={classes.paper}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList variant="selectedMenu" >
                  {
                    !auth.status
                      ?
                      <>
                        <MenuItem onClick={() => {
                          handleClose();
                          history.push('/about_us');
                        }}>About Us</MenuItem>
                        <MenuItem onClick={() => {
                          handleClose();
                          history.push('/contact_us');
                        }}>Contact Us</MenuItem>
                      </>
                      :
                      <>
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>Dashboard</MenuItem>
                        <MenuItem onClick={() => {
                          handleClose();
                          history.push('/appointment');
                        }}>Create Appointment</MenuItem>
                        <MenuItem onClick={() => {
                          handleClose();
                          dispatch(logout());
                          history.push('/');
                        }}>Logout</MenuItem>
                      </>
                  }

                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Popper>
        </Toolbar>
      </AppBar>
    </>
  )
}
