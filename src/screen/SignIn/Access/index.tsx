import React from 'react';
import {StatusBar, View} from 'react-native';

import splashImage from '~/assets/images/splash/splashScreen.png';
import Button from '~/components/Button';
import Text from '~/components/Text';
import Separator from '~/components/Separator';

import {
  Container,
  ContainerRounded,
  IconRoundedVaccine,
  IconVaccine,
  Column,
} from './styles';
import {useTheme} from 'styled-components/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import useSignInNavigation from '~/hooks/useSignInNavigation';

const Access: React.FC = () => {
  const {bottom} = useSafeAreaInsets();
  const {spacing} = useTheme();
  const navigation = useSignInNavigation();

  /**
   * Callback
   */
  const handleNavigateToLogin = () => navigation.navigate('login');
  const handleNavigateToSignUp = () => navigation.navigate('signUp');

  return (
    <Container source={splashImage}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor={'transparent'}
      />
      <Column>
        <IconRoundedVaccine>
          <IconVaccine icon="vaccinePlus" size={80} />
        </IconRoundedVaccine>
        <Separator height={spacing.md} />
        <Text typography="h2" color="background">
          Vacinadx
        </Text>
      </Column>
      <ContainerRounded>
        <Separator height={spacing.xl} />
        <Text typography="h4">Bem vindx</Text>
        <Separator height={spacing.sm} />
        <Text typography="subtitle1">Acesse ao app</Text>
        <Separator height={spacing.xxl} />
        <Button onPress={handleNavigateToLogin}>Login</Button>
        <Separator height={spacing.lg} />
        <Button onPress={handleNavigateToSignUp} mode="outlined">
          Cadastro
        </Button>
        <Separator height={bottom + spacing.xxxl} />
      </ContainerRounded>
    </Container>
  );
};

export default Access;
