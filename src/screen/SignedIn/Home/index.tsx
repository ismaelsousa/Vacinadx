import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import {useTheme} from 'styled-components';
import Button from '~/components/Button';
import Separator from '~/components/Separator';
import Text from '~/components/Text';
import VaccineCard from '~/components/VaccineCard';
import useAuth from '~/hooks/useAuth';
import Header from './localComponents/Header';
import SmallCard from './localComponents/SmallCard';

import {Container, Content, ScrollViewItems} from './styles';

const Home: React.FC = () => {
  const {signOut} = useAuth();

  return (
    <Container>
      <StatusBar barStyle={'light-content'} />
      <Header />
      <ScrollViewItems horizontal>
        <SmallCard icon="vaccine" title={'Minhas\nvacinas'} />
        <Separator width={15} />
        <SmallCard icon="plus" title={'Adicionar\nvacinas'} />
        <Separator width={15} />
        <SmallCard icon="pin" title={'Procurar local\n de vacinação'} />
      </ScrollViewItems>
      <Content>
        <Text typography="h7">Próximas vacinas </Text>
        <Separator height={15} />
        <VaccineCard
          title="Tríplice viral"
          shot="second-dose"
          date={new Date(2022, 4, 1).toISOString()}
        />
        <Separator height={15} />
        <VaccineCard
          title="Febre amarela"
          shot="first-dose"
          date={new Date(2022, 4, 1).toISOString()}
        />
        <Separator height={15} />
        <VaccineCard
          title="Johnson"
          shot="single-dose"
          date={new Date().toISOString()}
        />
      </Content>
      <Separator height={50} />
      <Button onPress={signOut}>Sign Out</Button>
    </Container>
  );
};

export default Home;
