/* eslint-disable @typescript-eslint/no-unused-vars */
import {DefaultTheme} from 'styled-components/native';
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
    surface50: {
      main: Colors.grey50,
      onMain: Colors.white,
    },
    surface100: {
      main: Colors.grey100,
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
    orange: {
      main: Colors.orange,
      onMain: Colors.white,
    },
    lightGreen: {
      main: Colors.lightGreen,
      onMain: Colors.white,
    },
  },
  typography: typographyCommon,
  borders,
  spacing,
};
