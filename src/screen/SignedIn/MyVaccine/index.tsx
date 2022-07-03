/* eslint-disable @typescript-eslint/no-unused-vars */
import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Alert, FlatList, Pressable, StatusBar} from 'react-native';
import {useTheme} from 'styled-components/native';

import HeaderOptions from '~/components/HeaderOptions';
import Icon from '~/components/Icon';
import Separator from '~/components/Separator';
import Input from '~/components/Input';
import Button from '~/components/Button';

import {FilterVaccine} from './types';
import {RowFilterVaccine, Container} from './styles';
import Text from '~/components/Text';
import VaccineCard from '~/components/VaccineCard';
import {VaccineDTO} from '~/@types/dtos/vaccine';
import useAuth from '~/hooks/useAuth';
import {getVaccines} from '~/services/resource/vaccine';
import {isAfter} from 'date-fns';
import {useDebouncedCallback} from 'use-debounce';
import Empty from '~/components/Empty';

const MyVaccine: React.FC = () => {
  const {goBack, navigate} = useNavigation<SignedInStackNavigatorProp>();
  const {spacing} = useTheme();

  const {user} = useAuth();

  /**
   * States
   */
  const [toggleFilter, setToggleFilter] = useState<FilterVaccine>('all');
  const [searchInput, setSearchInput] = useState('');
  const [vaccines, setVaccines] = useState<VaccineDTO[]>([]);
  const [loading, setLoading] = useState(true);

  /**
   * CallBacks
   */
  const handleToggleFilter = () => {
    setToggleFilter(old => (old === 'all' ? 'next' : 'all'));
  };

  const handleFetchVaccines = useCallback(async () => {
    if (user) {
      try {
        setLoading(true);
        const response = await getVaccines({userId: user.id});
        setVaccines(response);
      } catch (error) {
        Alert.alert('Ops,', 'Não foi possível carregar as vacinas');
      } finally {
        setLoading(false);
      }
    }
  }, [user]);

  const handleSearchVaccines = useCallback(
    async (search: string) => {
      if (user) {
        try {
          setLoading(true);
          const response = await getVaccines({search});
          setVaccines(response);
        } catch (error) {
          Alert.alert('Ops,', 'Não foi possível carregar as vacinas');
        } finally {
          setLoading(false);
        }
      }
    },
    [user],
  );

  const debounceHandleSearchVaccines = useDebouncedCallback(
    handleSearchVaccines,
    700,
  );

  useEffect(() => {
    if (searchInput.length === 0) {
      handleFetchVaccines();
    }
  }, [handleFetchVaccines, searchInput]);

  useEffect(() => {
    if (searchInput.length > 0) {
      debounceHandleSearchVaccines(searchInput);
    }
  }, [searchInput, debounceHandleSearchVaccines]);

  /**
   * Memos
   */
  const filteredVaccines = useMemo(() => {
    if (toggleFilter === 'all') {
      return vaccines;
    }
    return vaccines.filter(e =>
      isAfter(new Date(e.nextApplicationDate), new Date()),
    );
  }, [vaccines, toggleFilter]);

  return (
    <Container>
      <StatusBar barStyle={'dark-content'} />
      <HeaderOptions
        left={
          <Pressable onPress={goBack}>
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
        onChangeText={setSearchInput}
        value={searchInput}
      />
      <Separator height={spacing.sm} />
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
        data={filteredVaccines}
        keyExtractor={item => `${item.id}`}
        ItemSeparatorComponent={() => <Separator height={15} />}
        ListFooterComponent={() => <Separator height={15} />}
        renderItem={({item, index}) => {
          return <VaccineCard index={index} vaccine={item} />;
        }}
        ListEmptyComponent={() => {
          return <Empty title="Não foi possível encontrar" />;
        }}
      />
    </Container>
  );
};

export default MyVaccine;
