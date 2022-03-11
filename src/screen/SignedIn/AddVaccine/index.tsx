import React from 'react';
import {Pressable, StatusBar} from 'react-native';
import {useTheme} from 'styled-components';
import Icon from '~/components/Icon';
import Separator from '~/components/Separator';
import Text from '~/components/Text';

import {Container} from './styles';

const AddVaccine: React.FC = () => {
  const {spacing} = useTheme();

  return (
    <Container>
      <StatusBar barStyle={'dark-content'} />
      <Separator height={spacing.md} />
      <Pressable>
        <Icon icon="back" />
      </Pressable>
      <Separator height={spacing.sm} />
      <Text typography="h7">Adicionar vacinas</Text>
    </Container>
  );
};

export default AddVaccine;
