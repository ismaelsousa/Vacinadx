import React from 'react';
import {TouchableOpacity} from 'react-native';
import Text from '~/components/Text';

import {Container} from './styles';

const Home = ({navigation}) => {
  const handleNavigation = () => navigation.push('profile');
  return (
    <Container>
      <TouchableOpacity onPress={handleNavigation}>
        <Text>Home</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Home;
