/* eslint-disable @typescript-eslint/no-unused-vars */
import {yupResolver} from '@hookform/resolvers/yup';
import {StackActions, useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Alert, Platform, Pressable, StatusBar} from 'react-native';

import {useTheme} from 'styled-components';
import Button from '~/components/Button';
import Icon from '~/components/Icon';
import Input from '~/components/Input';
import Separator from '~/components/Separator';
import Text from '~/components/Text';
import HeaderOptions from '~/components/HeaderOptions';
import AvoidKeyboard from '~/components/AvoidKeyboard';
import Select from './localComponents/Select';

import {Container, ContainerSelect, Content, Scroll} from './styles';
import {Fields, HasSecondShotEnum} from './types';
import {schemaAddVaccineManually} from './validation';
import DateTimePicker, {
  DateTimePickerAndroid,
} from '@react-native-community/datetimepicker';
import {format} from 'date-fns';
import {createVaccine} from '~/services/resource/vaccine';
import useAuth from '~/hooks/useAuth';

const AddVaccineManually: React.FC = () => {
  const {goBack, dispatch} = useNavigation();
  const {spacing} = useTheme();
  const {user} = useAuth();
  const [hasSecondShot, setHasSecondShot] = useState(HasSecondShotEnum.YES);
  const {colors} = useTheme();

  const [loading, setLoading] = useState(false);
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
    resolver: yupResolver(schemaAddVaccineManually),
    defaultValues: {
      name: '',
      brand: '',
      applicationDate: new Date().toISOString(),
      applicationLocation: '',
      nextApplicationDate: '',
    },
  });

  /**
   * Callbacks
   */

  const handleChangeDateField = (field: Fields, date: number) => {
    setValue(field, new Date(date).toISOString());
    if (field === 'applicationDate') {
      setFocus('applicationLocation');
    }
  };

  const handleDatePickerAndroid = (field: Fields) => {
    DateTimePickerAndroid.open({
      value: new Date(),
      onChange: e => {
        if (e.nativeEvent.timestamp) {
          handleChangeDateField(field, e.nativeEvent.timestamp);
        }
      },
      mode: 'date',
      is24Hour: true,
    });
  };

  const onSubmit = async () => {
    await handleSubmit(
      async ({
        applicationDate,
        applicationLocation,
        brand,
        name,
        nextApplicationDate,
      }) => {
        if (!user?.id) {
          return;
        }

        try {
          setLoading(true);
          const dose =
            hasSecondShot === HasSecondShotEnum.YES
              ? 'second-dose'
              : 'single-dose';
          await createVaccine({
            dose: dose,
            applicationDate,
            place: applicationLocation,
            brand,
            name,
            userId: user.id,
            ...(hasSecondShot === HasSecondShotEnum.YES && nextApplicationDate
              ? {nextApplicationDate}
              : {nextApplicationDate: applicationDate}),
          });
          dispatch(StackActions.popToTop());
        } catch (error) {
          Alert.alert(
            'Ops!',
            'Ocorreu um erro ao salvar a vacina, tente novamente!',
          );
        } finally {
          setLoading(false);
        }
      },
    )();
  };

  return (
    <AvoidKeyboard>
      <Container>
        <Content>
          <StatusBar
            barStyle={'dark-content'}
            translucent
            backgroundColor={'transparent'}
          />
          <HeaderOptions
            left={
              <Pressable onPress={goBack}>
                <Icon icon="closeX" size={15} />
              </Pressable>
            }
          />

          <Separator height={spacing.md} />
          <Scroll>
            <Text typography="h7">Adicione as informações da vacina</Text>

            <Separator height={spacing.lg} />
            <Controller
              control={control}
              name="name"
              render={({field: {onBlur, onChange, value, ref}}) => (
                <Input
                  ref={ref}
                  label="Nome da vacina"
                  onChange={onChange}
                  onChangeText={text => setValue('name', text)}
                  value={value}
                  onBlur={onBlur}
                  error={errors.name?.message}
                  onSubmitEditing={() => {
                    setFocus('brand');
                  }}
                  returnKeyType="next"
                />
              )}
            />
            <Separator height={spacing.sm} />
            <Controller
              control={control}
              name="brand"
              render={({field: {onBlur, onChange, value, ref}}) => (
                <Input
                  ref={ref}
                  label="Marca da vacina"
                  onChange={onChange}
                  onChangeText={text => setValue('brand', text)}
                  value={value}
                  onBlur={onBlur}
                  error={errors.brand?.message}
                  onSubmitEditing={() => {
                    handleDatePickerAndroid('applicationDate');
                  }}
                  returnKeyType="next"
                />
              )}
            />
            {Platform.OS === 'ios' ? (
              <>
                <Separator height={spacing.sm} />
                <Text color="surface600" typography="body3">
                  Data da próxima aplicação
                </Text>
                <Separator height={spacing.sm} />
                <DateTimePicker
                  themeVariant="light"
                  accentColor={colors.primary.main}
                  testID="dateTimePicker"
                  value={new Date()}
                  mode={'date'}
                  onChange={e => {
                    if (e.nativeEvent.timestamp) {
                      handleChangeDateField(
                        'nextApplicationDate',
                        e.nativeEvent.timestamp,
                      );
                    }
                  }}
                />
                <Separator height={spacing.sm} />
              </>
            ) : (
              <>
                <Separator height={spacing.sm} />
                <Controller
                  control={control}
                  name="applicationDate"
                  render={({field: {onBlur, onChange, value, ref}}) => (
                    <Pressable
                      onPress={() =>
                        handleDatePickerAndroid('applicationDate')
                      }>
                      <Input
                        ref={ref}
                        editable={false}
                        label="Data da aplicação"
                        onChange={onChange}
                        onChangeText={text => setValue('applicationDate', text)}
                        value={
                          value ? format(new Date(value), 'dd/MM/yyyy') : ''
                        }
                        onBlur={onBlur}
                        error={errors.applicationDate?.message}
                        onSubmitEditing={() => {
                          setFocus('applicationLocation');
                        }}
                        returnKeyType="next"
                      />
                    </Pressable>
                  )}
                />
              </>
            )}

            <Separator height={spacing.sm} />
            <Controller
              control={control}
              name="applicationLocation"
              render={({field: {onBlur, onChange, value, ref}}) => (
                <Input
                  ref={ref}
                  label="Local da aplicação"
                  onChange={onChange}
                  onChangeText={text => setValue('applicationLocation', text)}
                  value={value}
                  onBlur={onBlur}
                  icon="pin"
                  error={errors.applicationLocation?.message}
                  returnKeyType="next"
                />
              )}
            />
            <Separator height={spacing.sm} />
            <Text color="surface600" typography="body3">
              Possui segunda dose?
            </Text>
            <Separator height={spacing.sm} />
            <ContainerSelect>
              <Select
                onPress={() => {
                  setHasSecondShot(HasSecondShotEnum.YES);
                }}
                isSelected={hasSecondShot === HasSecondShotEnum.YES}
                title="Sim"
              />
              <Select
                onPress={() => {
                  setHasSecondShot(HasSecondShotEnum.NO);
                }}
                isSelected={hasSecondShot === HasSecondShotEnum.NO}
                title="Não"
              />
              <Select
                onPress={() => {
                  setHasSecondShot(HasSecondShotEnum.SINGLE);
                }}
                isSelected={hasSecondShot === HasSecondShotEnum.SINGLE}
                title="Dose única"
              />
            </ContainerSelect>

            {hasSecondShot === HasSecondShotEnum.YES && (
              <>
                <Separator height={spacing.sm} />
                {Platform.OS === 'ios' ? (
                  <>
                    <Text color="surface600" typography="body3">
                      Data da próxima aplicação
                    </Text>
                    <Separator height={spacing.sm} />
                    <DateTimePicker
                      themeVariant="light"
                      accentColor={colors.primary.main}
                      testID="dateTimePicker"
                      value={new Date()}
                      mode={'date'}
                      onChange={e => {
                        if (e.nativeEvent.timestamp) {
                          handleChangeDateField(
                            'nextApplicationDate',
                            e.nativeEvent.timestamp,
                          );
                        }
                      }}
                    />
                    <Separator height={spacing.sm} />
                  </>
                ) : (
                  <Controller
                    control={control}
                    name="nextApplicationDate"
                    render={({field: {onBlur, onChange, value, ref}}) => (
                      <Pressable
                        onPress={() =>
                          handleDatePickerAndroid('nextApplicationDate')
                        }>
                        <Input
                          editable={false}
                          ref={ref}
                          label="Data da próxima aplicação"
                          onChange={onChange}
                          onChangeText={text =>
                            setValue('nextApplicationDate', text)
                          }
                          value={
                            value ? format(new Date(value), 'dd/MM/yyyy') : ''
                          }
                          onBlur={onBlur}
                          error={errors.nextApplicationDate?.message}
                          returnKeyType="done"
                          onSubmitEditing={onSubmit}
                        />
                      </Pressable>
                    )}
                  />
                )}
              </>
            )}
            <Separator height={spacing.md} />
            <Button loading={loading} onPress={onSubmit}>
              Salvar
            </Button>
            <Separator height={spacing.xxl} />
          </Scroll>
        </Content>
      </Container>
    </AvoidKeyboard>
  );
};
export default AddVaccineManually;
