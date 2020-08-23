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
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {
  Paper,
  Input
} from '@material-ui/core';
import {
  Navbar
} from '../Comps';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import validateEmail from '../features/validateEmail';
import api from '../api/api';
import Loader from 'react-loader-spinner';
import { login } from '../redux/auth';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Appointment Management module
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(17),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const history = useHistory();
  const role = useSelector(state => state.unauth.role);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [err, setErr] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  // const [emailError, setEmailError] = useState(false);


  useEffect(() => {
    setEmailError(validateEmail(email));
    // console.log(validateEmail(email))
  }, [email, setEmail])

  const handleSubmit = async (e) => {
    if (email.length > 0 && !emailError && password.length > 0) {
      // console.log({
      //   email, password
      // })
      // if (role === 'org') {
      setLoading(true)
      await api.post(`/${role === 'org' ? "org" : "users"}/login`, {
        email,
        password
      })
        .then(resp => {

          if (resp.data && resp.data.results.length > 0 && resp.data.accessToken) {
            setEmail("");
            setPassword("");

            if (role === 'org') {
              dispatch(login({
                auth: {
                  status: true,
                  token: resp.data.accessToken
                },
                user: {},
                company: resp.data.results[0]
              }));

              // localStorage.setItem("auth", JSON.stringify({
              //   status: true,
              //   token: resp.data.accessToken
              // }));
              // localStorage.setItem("company", JSON.stringify(resp.data.results[0]));
            }
            else {
              dispatch(login({
                auth: {
                  status: true,
                  token: resp.data.accessToken
                },
                user: resp.data.results[0],
                company: {}
              }));


            }

            localStorage.setItem("auth", JSON.stringify({
              status: true,
              token: resp.data.accessToken
            }));
            localStorage.setItem(role === 'org' ? "company" : 'user', JSON.stringify(resp.data.results[0]));

            // console.log(localStorage)

            history.push('/')
          }
          else {
            setErr(true);
          }
          console.log({ resp })
          setLoading(false)
          // setSuccess(true)
          // setLoading(false)
          // setEmail("");
          // setPassword("");
          // console.log({ resp })
        })
        .catch(err => {
          console.error(err);
          setErr(true);
          setLoading(false)
        })
      // }
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {/* <Navbar /> */}
      {
        loading
          ?
          <Loader type="TailSpin" color="#4abdac" width={80}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              marginTop: '35vh',
            }}
          />
          :
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <QueryBuilderIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login As {role === 'org' ? "Organization" : "User"}
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // onChange={(e) => console.log(e.target.value)}
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
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
              {/* <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        /> */}
              <Button
                // type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleSubmit}
              >
                Login
          </Button>
              {
                err
                &&
                <p style={{
                  color: 'red',
                  textAlign: 'center',
                  marginTop: '5px',
                  marginBottom: '5px',
                }}>
                  Invalid credentials.
                </p>
              }
              <Grid container>
                <Grid item xs>
                  <Link variant="body2" style={{
                    cursor: 'pointer'
                  }}>
                    Forgot password?
              </Link>
                </Grid>
                <Grid item>
                  <Link variant="body2" style={{
                    cursor: 'pointer'
                  }} onClick={() => history.push('/register')}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
      }




      {/* <Box mt={8}>
        <Copyright />
      </Box> */}
    </Container>
  );
}

