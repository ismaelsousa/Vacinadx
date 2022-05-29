import {useNavigation} from '@react-navigation/native';
import {isAfter} from 'date-fns';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {FlatList, Pressable, StatusBar} from 'react-native';
import {useTheme} from 'styled-components';
import {useDebouncedCallback} from 'use-debounce';
import {VaccineDTO} from '~/@types/dtos/vaccine';
import Button from '~/components/Button';
import Empty from '~/components/Empty';
import Icon from '~/components/Icon';
import Input from '~/components/Input';
import Separator from '~/components/Separator';
import Text from '~/components/Text';
import VaccineCard from '~/components/VaccineCard';
import useAuth from '~/hooks/useAuth';
import {getVaccines} from '~/services/resource/vaccine';

import {Container, RowFilterVaccine} from './styles';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {FilterVaccine} from './types';

const MyVaccine: React.FC = () => {
  const {goBack, navigate} = useNavigation<SignedInStackNavigatorProp>();
  const {spacing} = useTheme();
  const {user} = useAuth();

  /**
   * States
   */
  const [toggleFilter, setToggleFilter] = useState<FilterVaccine>('all');
  const [searchInput, setSearchInput] = useState('');

  const [vaccines, setVaccines] = useState<Array<VaccineDTO>>([]);
  const [loading, setLoading] = useState(true);

  /**
   * Callbacks
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
      } finally {
        setLoading(false);
      }
    }
  }, [user]);

  const handleSearchVaccines = useCallback(
    async (search?: string) => {
      if (user) {
        try {
          setLoading(true);
          const response = await getVaccines({search});
          setVaccines(response.filter(e => e.userId === user.id));
        } catch (error) {
        } finally {
          setLoading(false);
        }
      }
    },
    [user],
  );

  const debouncedHandleSearchVaccines = useDebouncedCallback(
    handleSearchVaccines,
    500,
  );

  /**
   * Memos
   */
  const filteredListVaccines = useMemo(() => {
    if (toggleFilter === 'all') {
      return vaccines;
    }
    return vaccines.filter(vaccine =>
      isAfter(new Date(vaccine.nextApplicationDate), new Date()),
    );
  }, [vaccines, toggleFilter]);

  useEffect(() => {
    if (searchInput.length === 0) {
      handleFetchVaccines();
    }
  }, [handleFetchVaccines, searchInput]);

  useEffect(() => {
    if (searchInput.length > 0) {
      debouncedHandleSearchVaccines(searchInput);
    }
  }, [debouncedHandleSearchVaccines, searchInput]);

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
        key={'vaccines'}
        data={filteredListVaccines}
        keyExtractor={item => `${item.id}`}
        ItemSeparatorComponent={() => <Separator height={15} />}
        ListFooterComponent={() => <Separator height={15} />}
        renderItem={({item}) => <VaccineCard vaccine={item} />}
        ListEmptyComponent={() => {
          return <Empty title="Você não possui novas vacinas" />;
        }}
      />
    </Container>
  );
};

export default MyVaccine;
