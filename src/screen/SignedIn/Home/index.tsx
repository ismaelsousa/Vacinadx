/* eslint-disable @typescript-eslint/no-unused-vars */
import {useNavigation} from '@react-navigation/native';
import {isAfter} from 'date-fns';
import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, RefreshControl, StatusBar} from 'react-native';
import {useTheme} from 'styled-components';
import {VaccineDTO} from '~/@types/dtos/vaccine';
import Empty from '~/components/Empty';
import Separator from '~/components/Separator';
import Text from '~/components/Text';
import VaccineCard from '~/components/VaccineCard';
import useAuth from '~/hooks/useAuth';
import {getVaccines} from '~/services/resource/vaccine';
import Banner from './localComponents/Banner';
import Header from './localComponents/Header';
import SmallCard from './localComponents/SmallCard';

import {Container, Content, ScrollViewItems} from './styles';
import VaccineCardShimmer from '~/components/VaccineCard/localComponents/VaccineCardShimmer';

const Home: React.FC = () => {
  const {user} = useAuth();
  const {spacing} = useTheme();
  const {navigate} = useNavigation<SignedInStackNavigatorProp>();

  const [vaccines, setVaccines] = useState<Array<VaccineDTO>>([]);
  const [loading, setLoading] = useState(true);

  //FIXME: Refactor the navigation types
  const handleAddVaccine = () => navigate('addVaccine');
  const handleMyVaccine = () => navigate('MyVaccine');
  const handleVaccineOnMaps = () => navigate('VaccineOnMaps');

  const handleFetchVaccines = useCallback(async () => {
    if (user) {
      try {
        setLoading(true);
        // const response = await getVaccines({userId: user.id});
        const response = await getVaccines();
        setVaccines(
          response.filter(e =>
            isAfter(new Date(e.nextApplicationDate), new Date()),
          ),
        );
      } catch (error) {
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
        backgroundColor={'transparent'}
      />

      <FlatList
        data={vaccines}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => (
          <Content>
            <VaccineCard vaccine={item} index={index} />
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
                <Text typography="h8">Próximas vacinas</Text>
                <Separator height={20} />
              </Content>
            </>
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
        ListFooterComponent={() => {
          return (
            <Content>
              <Separator height={15} />
              <Text typography="h8">Campanhas de vacinação</Text>
              <Separator height={15} />
              <Banner source={require('~/assets/images/Banner/covid.png')} />
              <Separator height={20} />
            </Content>
          );
        }}
      />
    </Container>
  );
};

export default Home;
