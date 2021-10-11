import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Text from '~/components/Text';

import {Container} from './styles';

const Profile = () => {
  const navigation = useNavigation();
  const handleNavigation = () => navigation.navigate('post');

  return (
    <Container>
      <TouchableOpacity onPress={handleNavigation}>
        <Text>{'Profile'}</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Profile;
