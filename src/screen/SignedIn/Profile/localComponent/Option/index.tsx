/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {View} from 'react-native';
import {useTheme} from 'styled-components/native';
import Icon from '~/components/Icon';
import Separator from '~/components/Separator';
import Text from '~/components/Text';

import {Container, Circle, Row} from './styles';
import {OptionProps} from './types';

const Option = ({icon, title, onPress}: OptionProps) => {
  const {colors, spacing} = useTheme();
  return (
    <Container onPress={onPress}>
      <Row>
        <Circle>
          <Icon icon={icon} size={15} activeColor={colors.background.main} />
        </Circle>
        <Separator width={spacing.sm} />
        <Text>{title}</Text>
      </Row>
      <Icon icon="arrowRight" size={13} activeColor={colors.primary.main} />
    </Container>
  );
};

export default Option;
