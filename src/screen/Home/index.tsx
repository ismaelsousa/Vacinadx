import {useNavigation, useRoute} from '@react-navigation/core';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Text from '~/components/Text';

import {Container} from './styles';

const Home = () => {
  const navigation = useNavigation();
  const {params} = useRoute();
  const data = params;
  console.log({data});
  const handleNavigation = () =>
    navigation.navigate('profile', {
      userName: 'Ismaelmoreiraa',
    });
  return (
    <Container>
      <TouchableOpacity onPress={handleNavigation}>
        <Text>{'Home'}</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Home;
