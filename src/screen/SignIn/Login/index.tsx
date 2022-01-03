import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {StatusBar} from 'react-native';
import {useTheme} from 'styled-components';

import Button from '~/components/Button';
import HeaderOptions from '~/components/HeaderOptions';
import Icon from '~/components/Icon';
import Input from '~/components/Input';
import Separator from '~/components/Separator';
import Text from '~/components/Text';
import useSignInNavigation from '~/hooks/useSignInNavigation';

import {Container, AccessText} from './styles';
import {schemaLogin} from './validation';
import BackButton from '~/components/BackButton';

const Login: React.FC = () => {
  const {spacing} = useTheme();
  const navigation = useSignInNavigation();

  /**
   * Forms
   */

  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schemaLogin),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  /**
   * Callback
   */
  const handleGoBack = () => navigation.goBack();

  const onSubmit = async () => {
    await handleSubmit(({email, password}) => {
      console.log({email, password});
    })();
  };

  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <HeaderOptions
        left={<BackButton icon="closeX" onPress={handleGoBack} />}
        right={
          <Text color="primary" typography="body3">
            Esqueci minha senha
          </Text>
        }
      />
      <Separator height={spacing.md} />
      <Text typography="h3">Login</Text>
      <Separator height={spacing.md} />
      <Controller
        control={control}
        name="email"
        render={({field: {onBlur, onChange, value, ref}}) => (
          <Input
            ref={ref}
            autoCapitalize="none"
            autoCompleteType="email"
            keyboardType="email-address"
            onChange={onChange}
            onChangeText={text => setValue('email', text)}
            value={value}
            onBlur={onBlur}
            label="Email"
            icon="checkCircle"
            iconColor="primary"
            error={errors.email?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({field: {onBlur, onChange, value, ref}}) => (
          <Input
            ref={ref}
            label="Senha"
            autoCapitalize="none"
            autoCompleteType="password"
            secureTextEntry
            iconColor="primary"
            onChange={onChange}
            onChangeText={text => setValue('password', text)}
            value={value}
            onBlur={onBlur}
            error={errors.password?.message}
          />
        )}
      />
      <Separator height={spacing.md} />
      <Button onPress={onSubmit}>Login</Button>
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
