
import React, { useState, useEffect } from 'react';
import {
  Landing,
  Login,
  Register,
  ContactUs,
  Appointment,
  Aboutus,
  Profile
}
  from './Pages';
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
import { setAuth, setUser, setCompany } from './redux/auth';
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


  useEffect(() => {

    setTimeout(() => {
      setLoading(false)
    }, 3000)


    if (!auth.status) {
      const localAuth = JSON.parse(localStorage.getItem("auth"));
      const localUser = JSON.parse(localStorage.getItem("user"));
      const localCompany = JSON.parse(localStorage.getItem("company"));
      console.log({
        localAuth,
        localUser,
        localCompany
      })
      if (localAuth && localAuth.status && localAuth.token) {
        if (localUser) {
          dispatch(setAuth(localAuth));
          dispatch(setUser(localUser));
        }
        else if (localCompany) {
          dispatch(setAuth(localAuth));
          dispatch(setCompany(localCompany));
        }
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
          <Loader type="Rings" color="#4abdac" height={100} width={100}
            style={{
              // marginTop: '40vh',
              // display: 'block',
              // marginLeft: 'auto',
              // marginRight: 'auto',
              // width: '100vh',
              // height: '100%',
              // marginLeft: '',
              // transform: 'translate(-50%,-50%)',
              // backgroundColor: 'red'
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
                  <Route path="/"><Landing /></Route>
                </Switch>
                :
                <Switch>
                  <Route path="/appointment"><Appointment /></Route>
                  <Route path="/"><Profile /></Route>
                </Switch>
            }
          </>
      }


    </ThemeProvider>

  );
}

export default App;