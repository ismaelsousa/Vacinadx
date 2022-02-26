/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Icon from '../Icon';

import {Container} from './styles';
import {Props} from './types';

const BackButton = ({icon, onPress}: Props) => {
  return (
    <Container onPress={onPress}>
      <Icon icon={icon} size={15} />
    </Container>
  );
};

export default BackButton;
