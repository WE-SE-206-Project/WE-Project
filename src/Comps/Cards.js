import React from 'react';
import {
  Paper
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../css/card.css';
import { useHistory } from 'react-router-dom';
import { setRole } from "../redux/unauth";
import { useDispatch } from 'react-redux';

const styles = makeStyles(theme => ({
  main: {
    // position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

    flexWrap: 'wrap',
    marginTop: '-199px',

    // flexWrap: 'wrap'

    // margin: theme.spacing(3)
    // [theme.breakpoints.down('sm')]: {
    //   marginTop: '0px',
    //   width: '250px'
    // }
  },
  card: {
    padding: theme.spacing(4),
    width: '300px',
    // margin: theme.spacing(3),
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),

    marginBottom: '20px',
    // marginTop: '-199px',
    height: '300px',

    // marginTop: '-199px',
    // height: 300,

    transition: 'all 0.3s ease-out',
    '&:hover': {
      transform: 'translateY(-10px)'
    },
    [theme.breakpoints.down('sm')]: {
      // marginTop: '0px',
      width: '250px'
    }

    
  }
  
}))

export default function Cards() {
  const classes = styles();
  const history = useHistory();
  const dispatch = useDispatch();

  return (

    <div className={classes.main} id="logincards">
      <Paper className={classes.card} >
        <h1 id="card-title">User</h1>
        <br />

        <button class="button button1" onClick={() => {
          dispatch(setRole('user'));
          history.push('/login');
        }}>Login</button>
        <br /><br />

        {/* <h3 id="card-title">Don't have an account? Then sign up here:</h3> */}
        <button class="button button1" onClick={() => {
          dispatch(setRole('user'));
          history.push('/register');
        }}>Register</button>
      </Paper>

      <Paper className={classes.card}>

        <h1 id="card-title">Organiztion</h1>
        <br />
        <button class="button button1" onClick={() => {
          dispatch(setRole('org'));
          history.push('/login');
        }}>Login</button>
        <br /><br />
        {/* <h3 id="card-title">Don't have an account? Then sign up here:</h3> */}
        <button class="button button1" onClick={() => {
          dispatch(setRole('org'));
          history.push('/register');
        }}>Register</button>
      </Paper>

    </div>
  )
}
