/* eslint-disable @typescript-eslint/no-unused-vars */
import {DefaultTheme} from 'styled-components';
import * as Colors from '../colors';
import {typographyCommon, borders, spacing} from './common';

export const themeLight: DefaultTheme = {
  colors: {
    primary: {
      main: Colors.brand01,
      onMain: Colors.white,
    },
    secondary: {
      main: Colors.brand02,
      onMain: Colors.white,
    },
    error: {
      main: Colors.red,
      onMain: Colors.white,
    },
    background: {
      main: Colors.white,
      onMain: Colors.black,
    },
    surface: {
      main: Colors.black,
      onMain: Colors.white,
    },
    surface500: {
      main: Colors.grey500,
      onMain: Colors.white,
    },
    surface600: {
      main: Colors.grey600,
      onMain: Colors.white,
    },
  },
  typography: typographyCommon,
  borders,
  spacing,
};
