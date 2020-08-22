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
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {
  Navbar
} from '../Comps';
import { useHistory } from 'react-router-dom';
import validateEmail from '../features/validateEmail';
import validatePhone from '../features/validatePhone';
import { useSelector } from 'react-redux';
import api from '../api/api';
import Loader from 'react-loader-spinner';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(15),
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
    margin: theme.spacing(3, 0, 0),
  },
}));

export default function Profile() {
  const classes = useStyles();
  const history = useHistory();
  const auth = useSelector(state => state.auth);
  const [role, setRole] = useState(auth.company.id ? "org" : "user");
  const user = role === "org" ? auth.company : auth.user;
  const [fName, setFName] = useState(user.firstName);
  const [lName, setLName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState(user.phone);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [name, setName] = useState(user.name);
  const [err, setErr] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(true);



  useEffect(() => {
    setEmailError(validateEmail(email));
    // console.log(validateEmail(email))
  }, [email, setEmail])

  useEffect(() => {
    setPhoneError(validatePhone(phone));
    // console.log(validatePhone(phone))
  }, [phone, setPhone])

  const handleSubmit = async () => {
    if (
      email.length > 0
      && !emailError
      && phone.length > 0
      && !phoneError
    ) {

      if (role === 'org' && name.length > 0) {

        setLoading(true)
        await api.post('/org/update', {
          phone,
          email,
          name
        })
          .then(resp => {

            setSuccess(true)
            setLoading(false)
            setName("");
            setPhone("");
            setEmail("");
            setPassword("");
            console.log({ resp })
          })
          .catch(err => {
            console.error(err);
            setErr(true);
            setLoading(false)
          })

      }
      else if (role === 'user' && fName.length > 0 && lName.length > 0) {
        setLoading(true)
        await api.post('/users/update', {
          email,
          firstName: fName,
          lastName: lName,
          phone
        })
          .then(resp => {

            setSuccess(true)
            setLoading(false)
            setFName("");
            setLName("");
            setPhone("");
            setEmail("");
            setPassword("");
            console.log({ resp })
          })
          .catch(err => {
            console.error(err);
            setErr(true);
            setLoading(false)
          })
      }


    }
  }

  useEffect(() => {
    if (err) setTimeout(() => setErr(false), 5000);
  }, [err, setErr])

  useEffect(() => {
    if (success) setTimeout(() => setSuccess(false), 5000);
  }, [success, setSuccess])


  return (

    <Container component="main" maxWidth="xs">
      <CssBaseline />

      {
        loading
          ?
          <Loader type="TailSpin" color="#4abdac" height={100} width={80}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            marginTop:'35vh',
        }}
          />
          :
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <AccountCircleIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Profile
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
                        // autoFocus
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={active}
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
                          // autoFocus
                          value={fName}
                          onChange={(e) => setFName(e.target.value)}
                          disabled={active}
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
                          disabled={active}

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
                    disabled={true}
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
                    }
                    }
                    disabled={active}
                  // autoFocus
                  />
                </Grid>
                {/* <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password (Minimum four digits)"
                    type="password"
                    id="password"
                    // autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={active}
                  />
                </Grid> */}
              </Grid>
              <Button
                // type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={() => setActive(false)}
              >
                Edit Profile
          </Button>
              {
                !active
                &&
                <Button
                  // type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                // onClick={() => setActive(false)}
                >
                  Save Profile
          </Button>
              }





            </form>
          </div>
      }
      {/* <Navbar /> */}

      {/* <Box mt={5}>
        <Copyright />
      </Box> */}
    </Container>
  );
}
