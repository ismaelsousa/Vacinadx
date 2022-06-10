/* eslint-disable @typescript-eslint/no-unused-vars */
import {ColorSchemeName} from 'react-native';
import {DefaultTheme} from 'styled-components/native';

export type themeType = 'light' | 'dark';

export interface Props {
  currentTheme: themeType;
  theme: DefaultTheme;
}

export interface colorSchemeProps {
  colorScheme: ColorSchemeName;
}
