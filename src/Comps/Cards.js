import React from 'react';
import {
  Paper
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../css/card.css';

const styles = makeStyles(theme => ({
  main: {
    // position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // margin: theme.spacing(3)
  },
  card: {
    padding: theme.spacing(4),
    width: '28%',
    // margin: theme.spacing(3),
    marginRight: theme.spacing(3),
    marginTop: '-199px',
    height: 300,
    transition: 'all 0.3s ease-out',
    '&:hover': {
      transform: 'translateY(-10px)'
    }
  }
}))

export default function Cards() {
  const classes = styles();
  return (

    <div className={classes.main}>
      <Paper className={classes.card}>
        <h3 id="card-title">Click here to login as user</h3>
        <button class="button button1">Login</button>

        <h3 id="card-title">Don't have an account? Then sign up here:</h3>
        <button class="button button1">Register</button>
        </Paper>

      <Paper className={classes.card}>
        <h3 id="card-title">Click here to login as user</h3>
        <button class="button button1">Login</button>

        <h3 id="card-title">Don't have an account? Then sign up here:</h3>
        <button class="button button1">Register</button>
      </Paper>
     
    </div>
  )
}
