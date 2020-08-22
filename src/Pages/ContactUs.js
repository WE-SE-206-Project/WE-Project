import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import validateEmail from '../features/validateEmail';


// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(13),
    marginBottom: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUpform() {
  const classes = useStyles();
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setEmailError(validateEmail(email));
    // console.log(validateEmail(email))
  }, [email, setEmail])

  const handleSubmit = () => {
    if (email.length > 0 && !emailError && fName.length > 0 && lName.length > 0 && message.length > 0) {
      console.log({
        fName,
        lName,
        email,
        message
      })
    }
    // else {
    //   console.log('FUCK')
    // }
    // console.log(email.length > 0, !emailError, fName.length > 0, lName.length > 0, message.length > 0)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {/* <Navbar /> */}
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <MailOutlineIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Contact Us
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={fName}
                onChange={(e) => setFName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={lName}
                onChange={(e) => setLName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="Message"
                variant="outlined"
                required
                fullWidth
                id="Message"
                label="Message"
                multiline={true}
                rowsMax={6}
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Grid>


          </Grid>
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Send Mail
          </Button>
          <Grid container justify="flex-end">

          </Grid>
        </form>
      </div>
    </Container>
  );
}