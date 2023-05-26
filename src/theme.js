import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#eb0000",
    },
    secondary: {
      main: "#01599c",
    },
    default: {
      main: '#FFF',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: [
      '"Roboto"',
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    fontSize: 16,
    h1: {
      fontFamily: "Oswald",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "Oswald",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "Oswald",
      fontWeight: 700,
    },
    h4: {
      fontFamily: "Oswald",
      fontWeight: 700,
    },
    h5: {
      fontFamily: "Oswald",
      fontWeight: 700,
    },
    button: {
      fontFamily: "Oswald",
    },
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
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          fontFamily: "Oswald",
        },
      },
    },
  },
});

export default theme;
