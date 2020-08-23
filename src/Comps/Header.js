import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import EventIcon from '@material-ui/icons/Event';
import '../css/card.css'

const styles = makeStyles(theme => ({
  // image: {
  //   maxWidth: '100%',
  //   maxHeight: '100vh',
  //   height: '100vh',
  //   position: 'absolute',
  //   zIndex: -3,
  //   backgroundAttachment: 'fixed',
  //   backgroundPosition: 'center',
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  //   // backgroundSize: 'cover',
  //   // backgroundRepeat: 'no-repeat'
  // },
  back: {
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(74,189,172,0.3)',
    // backgroundColor: 'red',
    // position: 'absolute',
    // zIndex: -1,
    display: 'flex',
    flexDirection: 'row',

    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      // justifyContent: 'center',
      flexDirection: 'column',
      // alignItems: 'flex-start',
      justifyContent: 'center',
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
      // padding: theme.spacing(0),
      // paddingTop: theme.spacing(3)
    }
  },
  heading: {
    // width: '40%',
    color: '#fff',
    // background: 'url(../Asset/headway.jpg)',
    // backgroundColor: 'blue',
    textAlign: 'center',
    fontSize: '70px',
    // textAlign: 'center'
    // marginTop: '48vh',
    // marginBottom: 'auto',
    // display: 'block',
    // marginTop: '50vh',
    // marginLeft: '50%',
    // transform: 'translateY(-50%)',
    // marginLeft: theme.spacing(5),
    // padding: theme.spacing(5),
    // textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '50px',
      transform: 'translateY(-60px)'
      // width: '100%'
    }
  },
  content: {
    color: '#fff',
    fontSize: '35px',
    textAlign: 'center',
    // width: '50%',
    // backgroundColor: 'blue',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '25px',
      transform: 'translateY(-60px)'
      // width: '100%'
    }
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
      {/* <img src={require('../Asset/headway.jpg')} className={classes.image} /> */}
      <div className={classes.back} id="header">
        <h1 className={classes.heading}><span style={{ color: '#fc4a1a', fontWeight: 'bold' }}>SCHEDULE</span><br /><span>Your Visit</span></h1>
        {/* <EventIcon className={classes.icon} /> */}
        <p className={classes.content}>Here on electronic media, book appointment easily on </p>
      </div>
    </>
  )
}
