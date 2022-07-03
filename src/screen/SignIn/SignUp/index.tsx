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
import {schemaSignUp} from './validation';
import Bar from 'react-native-progress/Bar';

import {Container} from './styles';
import BackButton from '~/components/BackButton';
import AvoidKeyboard from '~/components/AvoidKeyboard';

const SignUp = () => {
  const {spacing, colors} = useTheme();
  const navigation = useSignInNavigation();
  const {width} = useWindowDimensions();
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
    resolver: yupResolver(schemaSignUp),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
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
    await handleSubmit(({email, firstName, lastName}) => {
      console.log({email, firstName, lastName});
      navigation.navigate('signUpStep2', {
        email,
        firstName,
        lastName,
      });
    })();
  };

  return (
    <AvoidKeyboard>
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <StatusBar
            barStyle="dark-content"
            translucent
            backgroundColor={'transparent'}
          />
          <HeaderOptions
            left={<BackButton icon="closeX" onPress={handleGoBack} />}
            center={<Separator width={spacing.md} />}
            right={
              <Bar
                progress={0.5}
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
            Informações pessoais
          </Text>
          <Separator height={spacing.md} />
          <Controller
            control={control}
            name="firstName"
            render={({field: {onBlur, onChange, value, ref}}) => (
              <Input
                ref={ref}
                label="Nome"
                onChange={onChange}
                onChangeText={text => setValue('firstName', text)}
                value={value}
                onBlur={onBlur}
                error={errors.firstName?.message}
                returnKeyType="next"
                onSubmitEditing={() => {
                  setFocus('lastName');
                }}
              />
            )}
          />
          <Separator height={spacing.sm} />
          <Controller
            control={control}
            name="lastName"
            render={({field: {onBlur, onChange, value, ref}}) => (
              <Input
                ref={ref}
                label="Sobrenome"
                onChange={onChange}
                onChangeText={text => setValue('lastName', text)}
                value={value}
                onBlur={onBlur}
                error={errors.lastName?.message}
                returnKeyType="next"
                onSubmitEditing={() => {
                  setFocus('email');
                }}
              />
            )}
          />
          <Separator height={spacing.sm} />
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
                error={errors.email?.message}
                returnKeyType="done"
                onSubmitEditing={onSubmit}
              />
            )}
          />

          <Separator height={spacing.md} />
          <Button onPress={onSubmit}>Continuar</Button>
          <Separator height={spacing.md} />
        </ScrollView>
      </Container>
    </AvoidKeyboard>
  );
};

export default SignUp;
