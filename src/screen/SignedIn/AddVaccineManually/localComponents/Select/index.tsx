/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {useTheme} from 'styled-components/native';
import Icon from '~/components/Icon';
import Separator from '~/components/Separator';
import Text from '~/components/Text';

import {Container} from './styles';
import {SelectProps} from './types';

const Select = ({isSelected, title, onPress}: SelectProps) => {
  const {spacing} = useTheme();
  return (
    <Container onPress={onPress}>
      <Icon icon={isSelected ? 'radioButtonChecked' : 'radioButton'} />
      <Separator width={spacing.sm} />
      <Text color="surface600" typography="body3">
        {title}
      </Text>
    </Container>
  );
};

export default Select;
