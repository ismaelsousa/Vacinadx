import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {FlatList, Pressable, StatusBar, View} from 'react-native';
import {useTheme} from 'styled-components';

import HeaderOptions from '~/components/HeaderOptions';
import Icon from '~/components/Icon';
import Separator from '~/components/Separator';
import Input from '~/components/Input';
import Button from '~/components/Button';

import {FilterVaccine} from './types';
import {RowFilterVaccine, Container} from './styles';
import Text from '~/components/Text';
import VaccineCard from '~/components/VaccineCard';

const MyVaccine: React.FC = () => {
  const {goBack} = useNavigation();
  const {spacing} = useTheme();

  /**
   * States
   */
  const [toggleFilter, setToggleFilter] = useState<FilterVaccine>('all');
  const [searchInput, setSearchInput] = useState('');

  /**
   * CallBacks
   */
  const handleToggleFilter = () => {
    setToggleFilter(old => (old === 'all' ? 'next' : 'all'));
  };

  return (
    <Container>
      <StatusBar barStyle={'dark-content'} />
      <HeaderOptions
        left={
          <Pressable>
            <Icon icon="back" size={15} />
          </Pressable>
        }
      />
      <Separator height={spacing.md} />
      <Text typography="h7">Minhas vacinas</Text>
      <Separator height={spacing.md} />
      <Input
        icon="search"
        iconPosition="left"
        iconColor="lightGreen"
        placeholder="Busca de vacina"
        //TODO: Implement debounce
        onChangeText={setSearchInput}
        value={searchInput}
      />
      <Separator height={spacing.ty} />
      <RowFilterVaccine>
        <Button
          mode={toggleFilter === 'all' ? 'contained' : 'outlined'}
          paddingVertical={8}
          paddingHorizontal={20}
          onPress={handleToggleFilter}>
          Todas
        </Button>
        <Separator width={12} />
        <Button
          mode={toggleFilter === 'next' ? 'contained' : 'outlined'}
          paddingVertical={8}
          paddingHorizontal={20}
          onPress={handleToggleFilter}>
          Próximas vacinas
        </Button>
      </RowFilterVaccine>
      <Separator height={15} />
      <FlatList
        data={[1, 2, 3, 4, 5]}
        keyExtractor={item => `${item}`}
        ItemSeparatorComponent={() => <Separator height={15} />}
        ListFooterComponent={() => <Separator height={15} />}
        renderItem={({item}) => {
          return (
            <VaccineCard
              key={item}
              date={
                toggleFilter === 'all'
                  ? new Date(2022, 21, 5).toISOString()
                  : new Date(2020, 21, 5).toISOString()
              }
              shot={item % 2 === 0 ? 'second-dose' : 'first-dose'}
              title={toggleFilter === 'all' ? 'Johnson' : 'Covid'}
            />
          );
        }}
      />
    </Container>
  );
};

export default MyVaccine;
