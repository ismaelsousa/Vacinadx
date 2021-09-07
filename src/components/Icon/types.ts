/* eslint-disable @typescript-eslint/no-unused-vars */
import {ImageProps} from 'react-native';
import {NameIconTypes} from '../../constants/icons';

export interface IconOptionProps {
  icon: NameIconTypes;
  size?: number;
  activeColor?: string;
}

export interface IconProps extends ImageProps, IconOptionProps {}
