import React from 'react';
import logo from './logo.svg';
import Landing from './components/landing';
import Teamcard from './components/team/teamcard';
import 'tachyons';
import Team from './components/team/team';
import {
  CssBaseline
} from '@material-ui/core';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Navbar from "./Comps/Navbar"

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
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Landing /> */}
      <Navbar />

    </ThemeProvider>
  );
}

export default App;
