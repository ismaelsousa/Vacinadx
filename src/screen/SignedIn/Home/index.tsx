import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import {useTheme} from 'styled-components';
import Button from '~/components/Button';
import Separator from '~/components/Separator';
import useAuth from '~/hooks/useAuth';
import Header from './localComponents/Header';
import SmallCard from './localComponents/SmallCard';

import {Container, ScrollViewItems} from './styles';

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
      <Separator height={50} />
      <Button onPress={signOut}>Sign Out</Button>
    </Container>
  );
};

export default Home;
