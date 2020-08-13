import React from 'react';
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
} from '../comps';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';


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


  const handleSubmit = (e) => {
    e.preventDefault();
    // const formData = new FormData(document.querySelector('form'));

    // console.log(formData);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {/* <Navbar /> */}


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
          // onChange={(e) => console.log(e.target.value)}
          // autoFocus
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
            autoComplete="current-password"
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
          >
            Login
          </Button>
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


      {/* <Box mt={8}>
        <Copyright />
      </Box> */}
    </Container>
  );
}

