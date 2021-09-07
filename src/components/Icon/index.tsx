/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useContext} from 'react';

import {Container} from './styles';
import {IconProps} from './types';
import Icons from '../../constants/icons';
import {ThemeContext} from 'styled-components/native';

const Icon = ({
  icon,
  size = 20,
  activeColor,
  style,
}: Omit<IconProps, 'source'>) => {
  const {colors} = useContext(ThemeContext);

  if (activeColor) {
    return (
      <Container
        size={size}
        source={Icons[icon]}
        style={[{tintColor: colors[activeColor].main}, style]}
      />
    );
  }
  return <Container size={size} source={Icons[icon]} style={style} />;
};

export default Icon;
