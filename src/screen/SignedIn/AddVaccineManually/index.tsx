import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Pressable, StatusBar, View} from 'react-native';
import {useTheme} from 'styled-components';
import Button from '~/components/Button';
import Icon from '~/components/Icon';
import Input from '~/components/Input';
import Separator from '~/components/Separator';
import Text from '~/components/Text';
import Select from './localComponents/Select';

import {Container, ContainerSelect, Content, Scroll} from './styles';
import {HasSecondShotEnum} from './types';
import {schemaAddVaccineManually} from './validations';

const AddVaccineManually = () => {
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
    await handleSubmit(async dataForms => {
      console.log(dataForms);
    })();
  };

  return (
    <Container>
      <Scroll>
        <Content>
          <StatusBar barStyle={'dark-content'} />
          <Separator height={spacing.md} />
          <Pressable>
            <Icon icon="closeX" size={15} />
          </Pressable>
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
              />
            )}
          />
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
              />
            )}
          />
          <Controller
            control={control}
            name="applicationDate"
            render={({field: {name, onBlur, onChange, ref, value}}) => (
              <Input
                label="Data da aplicação"
                ref={ref}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                onChangeText={text => setValue(name, text)}
                error={errors[name]?.message}
                onFocus={() => setFocus(name)}
              />
            )}
          />
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
            <Controller
              control={control}
              name="nextApplicationDate"
              render={({field: {name, onBlur, onChange, ref, value}}) => (
                <Input
                  label="Data da próxima aplicação"
                  ref={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  onChangeText={text => setValue(name, text)}
                  error={errors[name]?.message}
                  onFocus={() => setFocus(name)}
                />
              )}
            />
          )}
          <Separator height={spacing.md} />
          <Button onPress={onSubmit}>Salvar</Button>
          <Separator height={spacing.lg} />
        </Content>
      </Scroll>
    </Container>
  );
};

export default AddVaccineManually;
