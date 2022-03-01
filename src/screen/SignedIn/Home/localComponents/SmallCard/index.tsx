/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Pressable} from 'react-native';
import Icon from '~/components/Icon';
import Separator from '~/components/Separator';

import styles, {Container, Circle, Title} from './styles';
import {Props} from './types';

const SmallCard = ({icon, title, onPress}: Props) => {
  return (
    <Pressable style={styles.shadow} onPress={onPress}>
      <Container>
        <Circle>
          <Icon icon={icon} size={20} activeColor="white" />
        </Circle>
        <Separator height={15} />
        <Title>{title}</Title>
      </Container>
    </Pressable>
  );
};

export default SmallCard;
