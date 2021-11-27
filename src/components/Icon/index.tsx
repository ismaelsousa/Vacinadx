/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import {Container} from './styles';
import {IconProps} from './types';
import Icons from '../../constants/icons';

const Icon = ({
  icon,
  size = 20,
  activeColor,
  style,
}: Omit<IconProps, 'source'>) => {
  if (activeColor) {
    return (
      <Container
        size={size}
        source={Icons[icon]}
        style={[{tintColor: activeColor}, style]}
        resizeMode="contain"
      />
    );
  }
  return (
    <Container
      size={size}
      source={Icons[icon]}
      style={style}
      resizeMode="contain"
    />
  );
};

export default Icon;
