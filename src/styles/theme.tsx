import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // min-width for mobile devices
      sm: 480, // min-width for tablets
      md: 768, // min-width for small screens, laptops
      lg: 1024, // 1024x768
      xl: 1280, // 1280x720
      xxl: 1440, // 1440x900
      xxxl: 1850, // 1600x900
    },
  },
});
