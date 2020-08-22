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
import EventIcon from '@material-ui/icons/Event';
import validateEmail from '../features/validateEmail';
import validatePhone from '../features/validatePhone';
import Loader from 'react-loader-spinner';


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

export default function Createappointment() {
  const classes = useStyles();

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [reason, setReason] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [err, setErr] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

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
      && fName.length > 0
      && lName.length > 0
      && address.length > 0
      && reason.length > 0
      && date.length > 0
    ) {
      console.log({
        fName,
        lName,
        email,
        phone,
        reason,
        address,
        date
      })
    }
  }

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
              <EventIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Create Appointment
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
                    variant="outlined"
                    required
                    fullWidth
                    id="address"
                    label="Address"
                    name="address"
                    autoComplete="address"
                    multiline={true}
                    rows={3}
                    maxrows={2}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
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
                    name="reason"
                    label="Reason"
                    type="text"
                    id="reason"
                    multiline={true}
                    rows={3}
                    maxrows={2}
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="date"
                    label="Scheduled At (Kindly select time in half hour format)"
                    type="datetime-local"
                    id="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 1800 // 5 min
                    }}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}

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
                Create Appointment
          </Button>
              {
                err
                &&
                <p style={{
                  color: 'red',
                  textAlign:'center',
                  marginTop:'5px',
                  marginBottom:'5px',
                }}>
                  Sorry, Error occurred please try again.
            </p>
              }
              <br />
              {
                success
                &&
                <p style={{
                  color: 'green',
                  textAlign:'center',
                  marginTop:'5px',
                  marginBottom:'5px',
                }}>
                  Sucessfully created your account.
            </p>
              }


            </form>
          </div>
      }
    </Container>
  );
}