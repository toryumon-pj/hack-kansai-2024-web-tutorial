import { CssBaseline, ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';
import { MUITheme } from '../theme/MUITheme.ts';

type Props = {
  children: ReactNode;
};

/**
 * MUIのProvider
 */
export const MUIProvider = (props: Props) => {
  return (
    <ThemeProvider theme={MUITheme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
};
