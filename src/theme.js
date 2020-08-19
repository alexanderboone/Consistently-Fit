import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#403d62',
      main: '#171738',
      dark: '#000014',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffffff',
      main: '#e8f1f2',
      dark: '#b6bebf',
      contrastText: '#000',
    },
  },
  props: {
    MuiSvgIcon: {
      htmlColor: '#e8f1f2',
    }
  },
});

export default theme