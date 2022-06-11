import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StatusBar} from 'react-native';
import {useTheme} from 'styled-components/native';
import Icon from '~/components/Icon';
import Separator from '~/components/Separator';
import Shadow from '~/components/Shadow';
import Text from '~/components/Text';

import {Card, Container, RowCard} from './styles';

const AddVaccine: React.FC = () => {
  const {goBack, navigate} = useNavigation();
  const {spacing} = useTheme();

  const handleGotoQrCode = () => navigate('qrCode');
  const handleGotoAddVaccineManually = () => navigate('addVaccineManually');

  return (
    <Container>
      <StatusBar barStyle={'dark-content'} />
      <Separator height={spacing.md} />
      <Pressable onPress={goBack}>
        <Icon icon="back" size={15} />
      </Pressable>
      <Separator height={spacing.md} />
      <Text typography="h7">Adicionar vacinas</Text>
      <Separator height={spacing.sm} />
      <Text typography="caption">
        {'Gostaria de adicionar por meio de \nqual método?'}
      </Text>
      <Separator height={spacing.lg} />
      <Shadow onPress={handleGotoQrCode}>
        <Card>
          <RowCard>
            <Icon icon="qrcode" size={22} />
            <Separator width={spacing.md} />
            <Text typography="caption">Leitura de código QR</Text>
          </RowCard>
          <Icon icon="arrowRight" size={12} />
        </Card>
      </Shadow>
      <Separator height={spacing.md} />
      <Shadow onPress={handleGotoAddVaccineManually}>
        <Card>
          <RowCard>
            <Icon icon="pencil" size={22} />
            <Separator width={spacing.md} />
            <Text typography="caption">Inserção manual</Text>
          </RowCard>
          <Icon icon="arrowRight" size={12} />
        </Card>
      </Shadow>
    </Container>
  );
};

export default AddVaccine;
