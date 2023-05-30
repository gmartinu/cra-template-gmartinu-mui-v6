// this is your setted theme for MUI components
import { createTheme } from '@mui/material/styles';
import pink from '@mui/material/colors/pink';

const theme = createTheme({
    palette: {
      primary: {
        main: pink[300]
      },
      secondary: {
        main: pink.A400
      },
    },
});

export default theme