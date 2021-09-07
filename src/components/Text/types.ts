/* eslint-disable @typescript-eslint/no-unused-vars */
import {TextProps} from 'react-native';
import {ColorsType, TypographyType} from 'styled-components';

export interface Props extends TextProps {
  children: string;
  color?: ColorsType;
  typography?: TypographyType;
}
