import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Pressable, StatusBar} from 'react-native';
import {useTheme} from 'styled-components';
import Button from '~/components/Button';
import Icon from '~/components/Icon';
import Input from '~/components/Input';
import Separator from '~/components/Separator';
import Text from '~/components/Text';
import VaccineCard from '~/components/VaccineCard';

import {Container, RowFilterVaccine} from './styles';
import {FilterVaccine} from './types';

const MyVaccine: React.FC = () => {
  const {goBack, navigate} = useNavigation();
  const {spacing} = useTheme();

  const [toggleFilter, setToggleFilter] = useState<FilterVaccine>('all');

  const handleToggleFilter = () => {
    setToggleFilter(old => (old === 'all' ? 'next' : 'all'));
  };
  return (
    <Container>
      <StatusBar barStyle={'dark-content'} />
      <Separator height={spacing.md} />
      <Pressable onPress={goBack}>
        <Icon icon="back" size={15} />
      </Pressable>
      <Separator height={spacing.md} />
      <Text typography="h7">Minhas vacina</Text>
      <Separator height={spacing.sm} />
      <Input
        icon="search"
        iconPosition="left"
        iconColor="lightGreen"
        placeholder="Busca de vacina"
        // onChange={onChange}
        // onChangeText={text => setValue('name', text)}
        // value={value}
        // onBlur={onBlur}
        // error={errors.name?.message}
      />
      <Separator height={spacing.ty} />

      <RowFilterVaccine>
        <Button
          paddingVertical={8}
          paddingHorizontal={20}
          onPress={handleToggleFilter}
          mode={toggleFilter === 'all' ? 'contained' : 'outlined'}>
          Todas
        </Button>
        <Separator width={12} />
        <Button
          onPress={handleToggleFilter}
          paddingVertical={8}
          paddingHorizontal={20}
          mode={toggleFilter === 'next' ? 'contained' : 'outlined'}>
          Próximas vacinas
        </Button>
      </RowFilterVaccine>
      <Separator height={15} />
      <VaccineCard
        date={new Date(2022, 1, 3).toISOString()}
        shot="second-dose"
        title="Johnson"
      />
    </Container>
  );
};

export default MyVaccine;
