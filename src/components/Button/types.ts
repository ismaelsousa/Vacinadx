/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {ColorsType, TypographyType} from 'styled-components/native';

export type Mode = 'outlined' | 'contained';

export interface ButtonProps extends TouchableOpacityProps {
  children: string;
  icon?: React.ReactNode;
  typography?: TypographyType;
  color?: ColorsType;
  mode?: Mode;
  loading?: boolean;
  paddingHorizontal?: number;
  paddingVertical?: number;
}
