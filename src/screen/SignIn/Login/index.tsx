import React from 'react';
import {StatusBar} from 'react-native';
import {useTheme} from 'styled-components';
import Button from '~/components/Button';
import HeaderOptions from '~/components/HeaderOptions';
import Icon from '~/components/Icon';
import Input from '~/components/Input';
import Separator from '~/components/Separator';
import Text from '~/components/Text';
import useSignInNavigation from '~/hooks/useSignInNavigation';

import {Container, AccessText, PressableX} from './styles';

const Login: React.FC = () => {
  const {spacing} = useTheme();
  const navigation = useSignInNavigation();

  /**
   * Callback
   */
  const handleGoBack = () => navigation.goBack();

  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <HeaderOptions
        left={
          <PressableX onPress={handleGoBack}>
            <Icon icon="closeX" size={15} />
          </PressableX>
        }
        right={
          <Text color="primary" typography="body3">
            Esqueci minha senha
          </Text>
        }
      />
      <Separator height={spacing.md} />
      <Text typography="h3">Login</Text>
      <Separator height={spacing.md} />
      <Input label="Email" icon="checkCircle" iconColor="primary" />
      <Input label="Senha" secureTextEntry iconColor="primary" />
      <Separator height={spacing.md} />
      <Button>Login</Button>
      <Separator height={spacing.md} />
      <AccessText color="surface500" typography="body3">
        ou acesse com login social
      </AccessText>
      <Separator height={spacing.md} />
      <Button
        typography="caption"
        icon={<Icon icon="apple" />}
        color="secondary"
        mode="outlined">
        Continuar com a Apple
      </Button>
      <Separator height={spacing.md} />
      <Button
        typography="caption"
        icon={<Icon icon="google" />}
        color="secondary"
        mode="outlined">
        Continuar com o Google
      </Button>
    </Container>
  );
};

export default Login;
