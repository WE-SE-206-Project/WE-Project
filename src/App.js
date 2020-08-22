import React, { useState } from 'react';

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
import { useSelector } from 'react-redux';


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

  return (
     <ThemeProvider theme={theme}>
       <CssBaseline />
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




     </ThemeProvider>
    
  );
}

export default App;
