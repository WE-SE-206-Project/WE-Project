
import React, { useState, useEffect } from 'react';
import {
  Landing,
  Login,
  Register,
  ContactUs,
  Appointment,
  Aboutus,
  Profile,
  Termsandconditions,
  PrivacyPolicy,
  Dashboard
} from './Pages';
import {
  Switch,
  Route
} from 'react-router-dom';
import {
  CssBaseline
} from '@material-ui/core';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import {
  Navbar
} from './Comps';
import api from './api/api';
// import { useSelector } from 'react-redux';
// import { Aboutus } from './Pages/Aboutus';

import { useSelector, useDispatch } from 'react-redux';
import { setAuth, setUser, setCompany, logout } from './redux/auth';
import { setAppointments, setCompanies } from './redux/dashboard';
import Loader from 'react-loader-spinner';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4abdac'
    },
    secondary: {
      main: '#f7b733'
    },
    info: {
      main: '#fff'
    },
    success: {
      main: '#fc4a1a'
    }
  }
})
function App() {

  // const [isAuth, setIsAuth] = useState(false);
  const auth = useSelector(state => state.auth.auth);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [loading1, setLoading1] = useState(false);
  // const [err1, setErr1] = useState(false);

  const getAppointments = async (role, id, email, token) => {
    setLoading1(true);
    // console.log(api.defaults.headers.common["Authorization"]);
    // console.log({
    //   role,
    //   orgId: id,
    //   email
    // })
    await api.post('/api/getAppointment', {
      // headers: {
      //   Authorization: token
      // },
      // body: {
      role,
      orgId: id,
      email
      // }
    })
      .then(resp => {
        if (resp.data) {
          // console.log("WORKING")
          dispatch(setAppointments(resp.data))
        }

        setLoading1(false)
      })
      .catch(err => {
        setLoading1(false);
        dispatch(logout())
        // setErr1(true);
      })
  }

  const getCompanies = async () => {
    setLoading1(true);
    // console.log(api.defaults.headers.common["Authorization"]);
    // console.log({
    //   role,
    //   orgId: id,
    //   email
    // })
    await api.get('/org/')
      .then(resp => {
        if (resp.data) {
          // console.log("WORKING")
          dispatch(setCompanies(resp.data))
        }
        // console.log({ resp })
        setLoading1(false)
      })
      .catch(err => {
        setLoading1(false);
        dispatch(logout())
        // setErr1(true);
      })
  }

  useEffect(() => {

    setTimeout(() => {
      setLoading(false)
    }, 3000)

    const localAuth = JSON.parse(localStorage.getItem("auth"));
    const localUser = JSON.parse(localStorage.getItem("user"));
    const localCompany = JSON.parse(localStorage.getItem("company"));
    if (!auth.status) {
      console.log({
        localAuth,
        localUser,
        localCompany
      })
      if (localAuth && localAuth.status && localAuth.token) {
        // api.defaults.headers.common["Authorization"] = localAuth.token;
        // console.log(api.defaults.headers.common["Authorization"]);

        if (localUser) {
          dispatch(setAuth(localAuth));
          dispatch(setUser(localUser));

          getAppointments('user', 0, localUser.email, localAuth.token);
          getCompanies();
        }
        else if (localCompany) {
          dispatch(setAuth(localAuth));
          dispatch(setCompany(localCompany));

          getAppointments('org', localCompany.id, "", localAuth.token);

        }
      }
    }
    else if (auth.status) {
      if (localUser) {
        getAppointments('user', 0, localUser.email, localAuth.token);
        getCompanies();
      }
      else if (localCompany) {
        getAppointments('org', localCompany.id, "", localAuth.token);

      }
    }

    // if(payload.auth.token){
    // console.log(api.defaults.headers.common["Authorization"]);
    // }
  }, [auth])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {
        loading
          ?
          <Loader type="TailSpin" color="#4abdac" height={100} width={100}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              marginTop: '35vh',
            }}
          />
          :
          <>
            <Navbar />

            {
              !auth.status
                ?
                <Switch>
                  <Route path="/login"><Login /></Route>
                  <Route path="/register"><Register /></Route>
                  <Route path="/contact_us"><ContactUs /></Route>
                  <Route path="/about_us"><Aboutus /></Route>
                  <Route path="/tos"><Termsandconditions /></Route>
                  <Route path="/privacy"><PrivacyPolicy /></Route>
                  <Route path="/"><Landing /></Route>
                </Switch>
                :
                <Switch>
                  <Route path="/appointment"><Appointment /></Route>
                  <Route path="/dashboard"><Dashboard /></Route>
                  <Route path="/"><Profile
                    setLoading={setLoading1}
                    loading={loading1} /></Route>
                </Switch>
            }
          </>
      }


    </ThemeProvider>

  );
}

export default App;