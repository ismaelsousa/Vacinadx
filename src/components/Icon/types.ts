/* eslint-disable @typescript-eslint/no-unused-vars */
import {ImageProps} from 'react-native';
import {ColorsType} from 'styled-components';
import {NameIconTypes} from '../../constants/icons';

export interface IconOptionProps {
  icon: NameIconTypes;
  size?: number;
  activeColor?: ColorsType;
}

export interface IconProps extends ImageProps, IconOptionProps {}
