import { Components, Theme } from '@mui/material';

/**
 * MUITheme/components
 */
export const componentsTheme: Components<Omit<Theme, 'components'>> = {
  MuiButton: {
    styleOverrides: {
      containedPrimary: {
        color: 'white',
      },
    },
  },
};
