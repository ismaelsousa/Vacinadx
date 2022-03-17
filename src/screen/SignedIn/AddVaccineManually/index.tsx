/* eslint-disable @typescript-eslint/no-unused-vars */
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Pressable, StatusBar} from 'react-native';

import {useTheme} from 'styled-components';
import Button from '~/components/Button';
import Icon from '~/components/Icon';
import Input from '~/components/Input';
import Separator from '~/components/Separator';
import Text from '~/components/Text';
import Select from './localComponents/Select';

import {Container, ContainerSelect, Content, Scroll} from './styles';
import {HasSecondShotEnum} from './types';
import {schemaAddVaccineManually} from './validation';

const AddVaccineManually: React.FC = () => {
  const {goBack} = useNavigation();
  const {spacing} = useTheme();
  const [hasSecondShot, setHasSecondShot] = useState(HasSecondShotEnum.YES);

  /**
   * Forms
   */
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    setFocus,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schemaAddVaccineManually),
    defaultValues: {
      name: '',
      brand: '',
      applicationDate: '',
      applicationLocation: '',
      nextApplicationDate: '',
    },
  });

  const onSubmit = async () => {
    await handleSubmit(
      async ({
        applicationDate,
        applicationLocation,
        brand,
        name,
        nextApplicationDate,
      }) => {},
    )();
  };

  return (
    <Container>
      <Scroll>
        <Content>
          <StatusBar barStyle={'dark-content'} />
          <Separator height={spacing.md} />
          <Pressable onPress={goBack}>
            <Icon icon="closeX" size={15} />
          </Pressable>
          <Separator height={spacing.md} />
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
              />
            )}
          />
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
              />
            )}
          />
          <Controller
            control={control}
            name="applicationDate"
            render={({field: {onBlur, onChange, value, ref}}) => (
              <Input
                ref={ref}
                label="Data da aplicação"
                onChange={onChange}
                onChangeText={text => setValue('applicationDate', text)}
                value={value}
                onBlur={onBlur}
                error={errors.applicationDate?.message}
              />
            )}
          />
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
              <Controller
                control={control}
                name="nextApplicationDate"
                render={({field: {onBlur, onChange, value, ref}}) => (
                  <Input
                    ref={ref}
                    label="Data da próxima aplicação"
                    onChange={onChange}
                    onChangeText={text => setValue('nextApplicationDate', text)}
                    value={value}
                    onBlur={onBlur}
                    error={errors.nextApplicationDate?.message}
                  />
                )}
              />
            </>
          )}
          <Separator height={spacing.md} />
          <Button>Salvar</Button>
        </Content>
      </Scroll>
    </Container>
  );
};
export default AddVaccineManually;
