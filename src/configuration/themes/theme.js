import { createTheme } from "@mui/material/styles";

export const themeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#022b3a',
    },
    secondary: {
      main: '#fbf6f8',
      light: '#8fb783',
      dark: '#1e1e1e',
    },
    text: {
      secondary: '#022b3a',
    },
    info: {
      main: '#87ceeb',
    },
  },
  typography: {
    h4: {
      fontFamily: 'Poppins',
    },
    fontFamily: 'Poppins',
    h1: {
      fontSize: '5.3rem',
    },
    h2: {
      fontSize: '3.5rem',
    },
    h3: {
      fontSize: '3rem',
    },
  },
  props: {
    MuiTooltip: {
      arrow: true,
    },
  },
  spacing: 8,
};

const theme = createTheme(themeOptions);

export default theme;
