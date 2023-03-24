import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';


// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#eb0000',
    },
    secondary: {
      main: '#01599c'
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: [
      '"Roboto"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontFamily: 'Oswald'
    },
    h2: {
      fontFamily: 'Oswald'
    },
    h3: {
      fontFamily: 'Oswald'
    },
    h4: {
      fontFamily: 'Oswald'
    },
    button: {
      fontFamily: 'Oswald'
    }
    // fontFamily: oswald.style.fontFamily,
    // h1:{
    //   fontFamily: oswald.style.fontFamily
    // },
    // h2:{
    //   fontFamily: oswald.style.fontFamily
    // },
    // h3: {
    //   fontFamily: oswald.style.fontFamily
    // },
    // button: {
    //   fontWeight: 700,
    //   fontFamily: oswald.style.fontFamily
    // }
  },
});

export default theme;
