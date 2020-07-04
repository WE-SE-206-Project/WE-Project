import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Divider
} from '@material-ui/core';

const style = makeStyles(theme => ({
  footermain: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#303030',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      alignItems: 'flex-start',
    }
  },
  list: {
    display: 'flex',
    marginLeft: 'auto',
    [theme.breakpoints.down('sm')]: {
      marginRight: 'auto',
      marginBottom: 10
    }
  },
  items: {
    textTransform: 'none',
    marginLeft: theme.spacing(3)
  },
  text: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 13
    }
  }
}))

export default function Footer() {
  const classes = style();
  return (
    <div className={classes.footermain} >
      <Typography variant="body2" color="primary" className={classes.text}>Copyright © 2020 Appointement Scheduler inc. All rights reserved.</Typography>
      <div className={classes.list}>
        <Button className={classes.items}><Typography variant="body2" color="primary" className={classes.text}>Privacy Policy</Typography></Button>
        <Button className={classes.items}><Typography variant="body2" color="primary" className={classes.text}>Terms and Conditions</Typography></Button>
      </div>
    </div>
  )
}
