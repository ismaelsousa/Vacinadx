import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {FlatList, Pressable, StatusBar} from 'react-native';
import {useTheme} from 'styled-components';
import Button from '~/components/Button';
import Icon from '~/components/Icon';
import Input from '~/components/Input';
import Separator from '~/components/Separator';
import Text from '~/components/Text';
import VaccineCard from '~/components/VaccineCard';

import {Container, RowFilterVaccine} from './styles';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {FilterVaccine} from './types';

const MyVaccine: React.FC = () => {
  const {goBack, navigate} = useNavigation<SignedInStackNavigatorProp>();
  const {spacing} = useTheme();

  /**
   * States
   */
  const [toggleFilter, setToggleFilter] = useState<FilterVaccine>('all');
  const [searchInput, setSearchInput] = useState('');

  /**
   * Callbacks
   */
  const handleToggleFilter = () => {
    setToggleFilter(old => (old === 'all' ? 'next' : 'all'));
  };

  const handleNavigateToVaccineDetail = vaccine =>
    navigate('VaccineDetail', {vaccine});

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
        onChangeText={setSearchInput}
        value={searchInput}
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
      <FlatList
        data={[1, 2, 3, 4, 5]}
        keyExtractor={item => `${item}`}
        ItemSeparatorComponent={() => <Separator height={15} />}
        ListFooterComponent={() => <Separator height={15} />}
        renderItem={({item}) => (
          <VaccineCard
            onPress={() => {
              handleNavigateToVaccineDetail({
                shot: 'second-dose',
                title: 'Johnson',
              });
            }}
            key={item}
            date={new Date(2022, 1, 3).toISOString()}
            shot="second-dose"
            title="Johnson"
          />
        )}
      />
    </Container>
  );
};

export default MyVaccine;
