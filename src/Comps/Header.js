import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import EventIcon from '@material-ui/icons/Event';

const styles = makeStyles(theme => ({
  image: {
    width: '100%',
    height: '100vh',
    position: 'absolute',
    zIndex: -3
  },
  back: {
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(74,189,172,0.3)',
    // position: 'absolute',
    zIndex: -1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(5)
  },
  heading: {
    width: '40%',
    color: '#fff',
    // textAlign: 'center'
    // marginTop: '48vh',
    // marginBottom: 'auto',
    // display: 'block',
    // marginTop: '50vh',
    // marginLeft: '50%',
    // transform: 'translateY(-50%)',
    // marginLeft: theme.spacing(5),
    // padding: theme.spacing(5),
    // textAlign: 'center'
  },
  content: {
    color: '#fff',
    width: '50%',
    // textAlign: 'center'
  },
  // icon: {
  //   fontSize: 400,
  //   textAlign: 'center',
  //   color: '#fc4a1a'
  // }
}))

export default function Header() {
  const classes = styles();
  return (
    <>
      <img src={require('../Asset/headway.jpg')} className={classes.image} />
      <div className={classes.back}>
        <Typography variant="h2" className={classes.heading}><span style={{ color: '#fc4a1a', fontWeight: 'bold' }}>SCHEDULE</span><br /><span style={{ marginLeft: '30px' }}>Your Visit</span></Typography>
        {/* <EventIcon className={classes.icon} /> */}
        <Typography variant="h5" className={classes.content}>Here on electronic media, book appointment easily on </Typography>
      </div>
    </>
  )
}
