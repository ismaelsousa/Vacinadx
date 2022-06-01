/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import {CardMapProps} from './types';
import {Container, ContainerDescription, ImageLocal} from './styles';
import Text from '~/components/Text';
import Separator from '~/components/Separator';
import {useTheme} from 'styled-components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const CardMap = ({distance, image, title}: CardMapProps) => {
  const {spacing} = useTheme();
  const {bottom} = useSafeAreaInsets();
  return (
    <Container bottom={bottom}>
      <ImageLocal key={title + distance} source={image} />
      <Separator width={spacing.sm} />
      <ContainerDescription>
        <Text>{title}</Text>
        <Separator height={spacing.sm} />
        <Text>{distance}</Text>
      </ContainerDescription>
    </Container>
  );
};

export default CardMap;
