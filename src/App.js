
import React, { useState, useEffect } from 'react';
import {
  Landing,
  Login,
  Register,
  ContactUs,
  Appointment
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
        if (localUser.id) {
          dispatch(setAuth(localAuth));
          dispatch(setUser(localUser));
        }
        else if (localCompany.id) {
          dispatch(setAuth(localAuth));
          dispatch(setCompany(localCompany));
        }
      }
    }
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
            marginTop:'35vh',
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
                  <Route path="/"><Landing /></Route>
                </Switch>
                :
                <Switch>
                  <Route path="/appointment"><Appointment /></Route>
                </Switch>
            }
          </>
}
   
    </ThemeProvider>

  );
}

export default App;