import createTheme from '@mui/material/styles/createTheme';
import { paletteTheme } from './paletteTheme';
import { typographyTheme } from './typographyTheme';
import { componentsTheme } from './componentsTheme.ts';

/**
 * MUITheme
 */
export const MUITheme = createTheme({
  palette: paletteTheme,
  typography: typographyTheme,
  components: componentsTheme,
});
