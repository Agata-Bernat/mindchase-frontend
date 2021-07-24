const { createMuiTheme } = require('@material-ui/core');

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#003049',
    },
    secondary: {
      main: '#d62828',
    },
    type: 'dark', 
  },
  typography: {
    h1: {
      fontWeight: 800,
      fontSize: '30rem',
    },
  },
});

export default theme;
