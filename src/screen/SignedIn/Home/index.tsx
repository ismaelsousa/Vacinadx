import {useNavigation} from '@react-navigation/native';
import {isAfter} from 'date-fns';
import React, {useCallback, useEffect, useState} from 'react';
import {Alert, FlatList, RefreshControl, StatusBar} from 'react-native';
import {VaccineDTO} from '~/@types/dtos/vaccine';
import Empty from '~/components/Empty';
import Separator from '~/components/Separator';
import Text from '~/components/Text';
import VaccineCard from '~/components/VaccineCard';
import VaccineCardShimmer from '~/components/VaccineCard/localComponents/VaccineCardShimmer';
import {spacing} from '~/constants/styles/themes/common';
import useAuth from '~/hooks/useAuth';
import {getVaccines} from '~/services/resource/vaccine';
import Banner from './localComponents/Banner';
import Header from './localComponents/Header';
import SmallCard from './localComponents/SmallCard';

import {Container, Content, ScrollViewItems} from './styles';

const Home: React.FC = () => {
  const {navigate} = useNavigation<SignedInStackNavigatorProp>();
  const {user} = useAuth();

  /**
   * States
   */
  const [vaccines, setVaccines] = useState<VaccineDTO[]>([]);
  const [loading, setLoading] = useState(true);

  /**
   * CallBacks
   */

  const handleAddVaccine = () =>
    navigate('BottomTabHome', {
      screen: 'home',
      params: {
        screen: 'addVaccine',
      },
    });

  const handleMyVaccine = () =>
    navigate('BottomTabHome', {
      screen: 'home',
      params: {
        screen: 'myVaccine',
      },
    });

  const handleVaccineOnMaps = () => navigate('VaccineOnMaps');

  const handleFetchVaccines = useCallback(async () => {
    if (user) {
      try {
        setLoading(true);
        const response = await getVaccines({userId: user.id});
        setVaccines(
          response.filter(e =>
            isAfter(new Date(e.nextApplicationDate), new Date()),
          ),
        );
      } catch (error) {
        Alert.alert('Ops,', 'Não foi possível carregar as vacinas');
      } finally {
        setLoading(false);
      }
    }
  }, [user]);

  useEffect(() => {
    handleFetchVaccines();
  }, [handleFetchVaccines]);

  return (
    <Container>
      <StatusBar
        barStyle={'light-content'}
        translucent
        backgroundColor="transparent"
      />

      <FlatList
        data={vaccines}
        keyExtractor={item => String(item.id)}
        renderItem={({item, index}) => (
          <Content>
            <VaccineCard index={index} vaccine={item} />
          </Content>
        )}
        refreshing={loading}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={handleFetchVaccines}
          />
        }
        ListHeaderComponent={() => {
          return (
            <>
              <Header />

              <ScrollViewItems horizontal>
                <Separator width={spacing.md} />
                <SmallCard
                  icon="vaccine"
                  onPress={handleMyVaccine}
                  title={'Minhas\nvacinas'}
                />
                <Separator width={15} />
                <SmallCard
                  icon="plus"
                  onPress={handleAddVaccine}
                  title={'Adicionar\nvacinas'}
                />
                <Separator width={15} />
                <SmallCard
                  icon="pin"
                  title={'Procurar local\n de vacinação'}
                  onPress={handleVaccineOnMaps}
                />
                <Separator width={spacing.md} />
              </ScrollViewItems>
              <Content>
                <Text typography="h8">Próximas vacinas </Text>
                <Separator height={15} />
              </Content>
            </>
          );
        }}
        ListFooterComponent={() => {
          return (
            <Content>
              <Separator height={15} />
              <Text typography="h8">Campanhas de vacinação</Text>
              <Separator height={15} />
              <Banner source={require('~/assets/images/banner/covid.png')} />
              <Separator height={15} />
            </Content>
          );
        }}
        ItemSeparatorComponent={() => <Separator height={15} />}
        ListEmptyComponent={() => {
          if (loading) {
            return (
              <Content>
                <VaccineCardShimmer />
                <Separator height={15} />
                <VaccineCardShimmer />
                <Separator height={15} />
                <VaccineCardShimmer />
              </Content>
            );
          }
          return <Empty title="Você não possui novas vacinas" />;
        }}
      />
    </Container>
  );
};

export default Home;
