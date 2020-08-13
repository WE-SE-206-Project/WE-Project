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
import {
  Navbar
} from '../comps';
import { useHistory } from 'react-router-dom';
import validateEmail from '../features/validateEmail';
import validatePhone from '../features/validatePhone';
import { useSelector } from 'react-redux';


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
  const history = useHistory();
  const role = useSelector(state => state.unauth.role);
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [name, setName] = useState("");



  useEffect(() => {
    setEmailError(validateEmail(email));
    // console.log(validateEmail(email))
  }, [email, setEmail])

  useEffect(() => {
    setPhoneError(validatePhone(phone));
    // console.log(validatePhone(phone))
  }, [phone, setPhone])

  const handleSubmit = () => {
    if (
      email.length > 0
      && !emailError
      && phone.length > 0
      && !phoneError
      && password.length > 0
    ) {
      let obj = {
        email,
        phone,
        password
      };

      if (role === 'org' && name.length > 0) {
        console.log({
          ...obj,
          name
        })
      }
      else if (role === 'user' && fName.length > 0 && lName.length > 0) {
        console.log({
          ...obj,
          fName,
          lName
        })
      }


    }
  }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {/* <Navbar /> */}
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register As {role === 'org' ? "Organization" : "User"}
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            {
              role === 'org'
                ?
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoFocus
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
                :
                <>
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
                </>

            }

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
            <Grid item xs={12} >
              <TextField
                autoComplete="pnumber"
                name="Phone Number"
                variant="outlined"
                required
                fullWidth
                id="pnumber"
                label="Phone Number"
                placeholder="03xx-xxxxxxx"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                inputProps={{
                  maxLength: 11
                }}
              // autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                // autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>

            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
          </Grid>
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Register
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link variant="body2" style={{
                cursor: 'pointer'
              }} onClick={() => history.push('/login')}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      {/* <Box mt={5}>
        <Copyright />
      </Box> */}
    </Container>
  );
}