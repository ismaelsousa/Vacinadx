import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import Button from '~/components/Button';
import Separator from '~/components/Separator';
import Text from '~/components/Text';
import VaccineCard from '~/components/VaccineCard';
import useAuth from '~/hooks/useAuth';
import Banner from './localComponents/Banner';
import Header from './localComponents/Header';
import SmallCard from './localComponents/SmallCard';

import {Container, Content, ScrollViewItems} from './styles';

const Home: React.FC = () => {
  const {signOut} = useAuth();
  const {navigate} = useNavigation<SignedInStackNavigatorProp>();

  const handleAddVaccine = () => navigate('addVaccine');
  const handleMyVaccine = () => navigate('MyVaccine');
  const handleVaccineOnMaps = () => navigate('VaccineOnMaps');

  return (
    <Container>
      <StatusBar
        barStyle={'light-content'}
        translucent
        backgroundColor={'transparent'}
      />
      <Header />
      <ScrollViewItems horizontal>
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
      </ScrollViewItems>
      <Content>
        <Text typography="h8">Próximas vacinas</Text>
        <Separator height={20} />
        <VaccineCard
          date={new Date(2022, 3, 1).toISOString()}
          shot="single-dose"
          title="Tríplice viral"
        />
        <Separator height={15} />
        <VaccineCard
          date={new Date(2022, 3, 3).toISOString()}
          shot="first-dose"
          title="Febre amarela "
        />
        <Separator height={15} />
        <VaccineCard
          date={new Date(2022, 1, 3).toISOString()}
          shot="second-dose"
          title="Johnson"
        />
        <Separator height={15} />
        <Text typography="h8">Campanhas de vacinação</Text>
        <Separator height={15} />
        <Banner source={require('~/assets/images/Banner/covid.png')} />
        <Separator height={15} />
        <Banner source={require('~/assets/images/Banner/covid.png')} />
      </Content>
      <Separator height={20} />
      <Button onPress={signOut}>Sign Out</Button>
    </Container>
  );
};

export default Home;
