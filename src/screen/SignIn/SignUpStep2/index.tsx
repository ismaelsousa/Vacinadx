import {yupResolver} from '@hookform/resolvers/yup';
import React, {useMemo} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {ScrollView, StatusBar, useWindowDimensions} from 'react-native';
import {useTheme} from 'styled-components/native';
import Button from '~/components/Button';
import HeaderOptions from '~/components/HeaderOptions';
import Input from '~/components/Input';
import Separator from '~/components/Separator';
import Text from '~/components/Text';
import useSignInNavigation from '~/hooks/useSignInNavigation';
import {schemaSignUpStep2} from './validation';
import Bar from 'react-native-progress/Bar';

import {Container} from './styles';
import BackButton from '~/components/BackButton';
import {useRoute} from '@react-navigation/native';
import useAuth from '~/hooks/useAuth';
import AvoidKeyboard from '~/components/AvoidKeyboard';

const SignUpStep2 = () => {
  const {spacing, colors} = useTheme();
  const navigation = useSignInNavigation();
  const {
    params: {email, firstName, lastName},
  } = useRoute<SignUpStep2SignInStackRouteProp>();
  const {width} = useWindowDimensions();

  /**
   * Hooks
   */
  const {signUp, loading} = useAuth();

  /**
   * Forms
   */
  const {
    control,
    handleSubmit,
    setValue,
    setFocus,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schemaSignUpStep2),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });
  /**
   * Memos
   */
  const widthProgressBar = useMemo(() => {
    const pressableXWidth = 35;
    const marginScreenWidth = spacing.md * 3;
    const centerHeaderOptionWidth = spacing.md;
    const value =
      width - (marginScreenWidth + pressableXWidth + centerHeaderOptionWidth);
    return value;
  }, [width, spacing]);

  /**
   * Callback
   */
  const handleGoBack = () => navigation.goBack();

  const onSubmit = async () => {
    await handleSubmit(async ({password}) => {
      await signUp({email, firstName, lastName, password});
    })();
  };

  return (
    <AvoidKeyboard>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container>
          <StatusBar
            barStyle="dark-content"
            translucent
            backgroundColor={'transparent'}
          />
          <HeaderOptions
            left={<BackButton icon="back" onPress={handleGoBack} />}
            center={<Separator width={spacing.md} />}
            right={
              <Bar
                progress={1}
                color={colors.primary.main}
                unfilledColor={colors.surface50.main}
                borderWidth={0}
                height={6}
                width={widthProgressBar}
              />
            }
          />
          <Separator height={spacing.md} />
          <Text typography="h3">Cadastro</Text>
          <Separator height={spacing.md} />
          <Text color="surface100" typography="caption">
            {'Sua senha precisa ter pelo menos  \n8 caracteres'}
          </Text>
          <Separator height={spacing.md} />
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
                returnKeyType="next"
                onSubmitEditing={() => {
                  setFocus('confirmPassword');
                }}
              />
            )}
          />
          <Separator height={spacing.sm} />
          <Controller
            control={control}
            name="confirmPassword"
            render={({field: {onBlur, onChange, value, ref}}) => (
              <Input
                ref={ref}
                label="Confirmar Senha"
                autoCapitalize="none"
                autoCompleteType="password"
                secureTextEntry
                iconColor="primary"
                onChange={onChange}
                onChangeText={text => setValue('confirmPassword', text)}
                value={value}
                onBlur={onBlur}
                error={errors.confirmPassword?.message}
                returnKeyType="done"
                onSubmitEditing={onSubmit}
              />
            )}
          />

          <Separator height={spacing.md} />
          <Button loading={loading} disabled={loading} onPress={onSubmit}>
            Finalizar
          </Button>
          <Separator height={spacing.md} />
        </Container>
      </ScrollView>
    </AvoidKeyboard>
  );
};

export default SignUpStep2;
