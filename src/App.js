import React from 'react';
import Landing from './Pages/Landing';
import {
  CssBaseline
} from '@material-ui/core';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

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
      <Landing />

    </ThemeProvider>
  );
}

export default App;
