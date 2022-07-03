/* eslint-disable @typescript-eslint/no-unused-vars */
import {yupResolver} from '@hookform/resolvers/yup';
import DateTimePicker, {
  DateTimePickerAndroid,
} from '@react-native-community/datetimepicker';
import {StackActions, useNavigation} from '@react-navigation/native';
import {format} from 'date-fns';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Alert, Platform, Pressable, StatusBar} from 'react-native';
import {useTheme} from 'styled-components/native';
import AvoidKeyboard from '~/components/AvoidKeyboard';
import Button from '~/components/Button';
import HeaderOptions from '~/components/HeaderOptions';
import Icon from '~/components/Icon';
import Input from '~/components/Input';
import Separator from '~/components/Separator';
import Text from '~/components/Text';
import useAuth from '~/hooks/useAuth';
import {createVaccine} from '~/services/resource/vaccine';
import Select from './localComponents/Select';

import {Container, ContainerSelect, Content, Scroll} from './styles';
import {Fields, HasSecondShotEnum} from './types';
import {schemaAddVaccineManually} from './validations';

const AddVaccineManually = () => {
  const {goBack, dispatch} = useNavigation();
  const {spacing, colors} = useTheme();

  const {user} = useAuth();
  const [hasSecondShot, setHasSecondShot] = useState(HasSecondShotEnum.YES);

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
      applicationDate: new Date().toISOString(), // 2020-08-01T00:00:00.000Z,
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
      mode: 'date',
      is24Hour: true,
      onChange: e => {
        if (e.nativeEvent.timestamp) {
          handleChangeDateField(field, e.nativeEvent.timestamp);
        }
      },
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
            dose,
            applicationDate,
            brand,
            name,
            place: applicationLocation,
            userId: user.id,
            ...(hasSecondShot === HasSecondShotEnum.YES && nextApplicationDate
              ? {nextApplicationDate}
              : {nextApplicationDate: applicationDate}),
          });

          dispatch(StackActions.popToTop());
        } catch (error) {
          Alert.alert(
            'Ops!',
            'Não foi possível salvar vacina, tente novamente!',
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
        <Scroll>
          <Content>
            <StatusBar
              barStyle={'dark-content'}
              translucent
              backgroundColor="transparent"
            />
            <HeaderOptions
              left={
                <Pressable onPress={goBack}>
                  <Icon icon="closeX" size={15} />
                </Pressable>
              }
            />

            <Separator height={spacing.md} />
            <Text typography="h7">Adicione as informações da vacina</Text>
            <Separator height={spacing.lg} />
            <Controller
              control={control}
              name="name"
              render={({field: {name, onBlur, onChange, ref, value}}) => (
                <Input
                  label="Nome da vacina"
                  ref={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  onChangeText={text => setValue(name, text)}
                  error={errors[name]?.message}
                  onFocus={() => setFocus(name)}
                  returnKeyType="next"
                  onSubmitEditing={() => setFocus('brand')}
                />
              )}
            />
            <Separator height={15} />
            <Controller
              control={control}
              name="brand"
              render={({field: {name, onBlur, onChange, ref, value}}) => (
                <Input
                  label="Marca da vacina"
                  ref={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  onChangeText={text => setValue(name, text)}
                  error={errors[name]?.message}
                  onFocus={() => setFocus(name)}
                  returnKeyType="next"
                  onSubmitEditing={() =>
                    handleDatePickerAndroid('applicationDate')
                  }
                />
              )}
            />
            <Separator height={15} />
            {Platform.OS === 'ios' ? (
              <>
                <Text color="surface600" typography="body3">
                  Data da aplicação
                </Text>
                <Separator height={spacing.sm} />
                <DateTimePicker
                  themeVariant="light"
                  accentColor={colors.primary.main}
                  value={new Date()}
                  mode="date"
                  onChange={e => {
                    if (e.nativeEvent.timestamp) {
                      handleChangeDateField(
                        'applicationDate',
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
                name="applicationDate"
                render={({field: {name, onBlur, onChange, ref, value}}) => (
                  <Pressable
                    onPress={() => handleDatePickerAndroid('applicationDate')}>
                    <Input
                      editable={false}
                      label="Data da aplicação"
                      ref={ref}
                      value={value ? format(new Date(value), 'dd/MM/yyyy') : ''}
                      onChange={onChange}
                      onBlur={onBlur}
                      onChangeText={text => setValue(name, text)}
                      error={errors[name]?.message}
                      onFocus={() => setFocus(name)}
                      returnKeyType="next"
                      onSubmitEditing={() => setFocus('applicationLocation')}
                    />
                  </Pressable>
                )}
              />
            )}
            <Separator height={15} />
            <Controller
              control={control}
              name="applicationLocation"
              render={({field: {name, onBlur, onChange, ref, value}}) => (
                <Input
                  label="Local de aplicação"
                  ref={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  onChangeText={text => setValue(name, text)}
                  error={errors[name]?.message}
                  onFocus={() => setFocus(name)}
                  returnKeyType="next"
                />
              )}
            />
            <Separator height={spacing.md} />
            <Text color="surface600" typography="body3">
              Possui segunda dose?
            </Text>
            <Separator height={spacing.sm} />
            <ContainerSelect>
              <Select
                onPress={() => setHasSecondShot(HasSecondShotEnum.YES)}
                isSelected={hasSecondShot === HasSecondShotEnum.YES}
                title="Sim"
              />
              <Select
                onPress={() => setHasSecondShot(HasSecondShotEnum.NO)}
                isSelected={hasSecondShot === HasSecondShotEnum.NO}
                title="Não"
              />
              <Select
                onPress={() => setHasSecondShot(HasSecondShotEnum.SINGLE)}
                isSelected={hasSecondShot === HasSecondShotEnum.SINGLE}
                title="Dose única"
              />
            </ContainerSelect>
            {hasSecondShot === HasSecondShotEnum.YES && (
              <>
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
                      value={new Date()}
                      mode="date"
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
                      name="nextApplicationDate"
                      render={({
                        field: {name, onBlur, onChange, ref, value},
                      }) => (
                        <Pressable
                          onPress={() =>
                            handleDatePickerAndroid('nextApplicationDate')
                          }>
                          <Input
                            editable={false}
                            label="Data da próxima aplicação"
                            ref={ref}
                            value={
                              value ? format(new Date(value), 'dd/MM/yyyy') : ''
                            }
                            onChange={onChange}
                            onBlur={onBlur}
                            onChangeText={text => setValue(name, text)}
                            error={errors[name]?.message}
                            onFocus={() => setFocus(name)}
                            returnKeyType="done"
                            onSubmitEditing={onSubmit}
                          />
                        </Pressable>
                      )}
                    />
                  </>
                )}
              </>
            )}
            <Separator height={spacing.md} />
            <Button onPress={onSubmit} loading={loading}>
              Salvar
            </Button>
            <Separator height={spacing.lg} />
          </Content>
        </Scroll>
      </Container>
    </AvoidKeyboard>
  );
};

export default AddVaccineManually;
