import React from 'react';
import {TouchableOpacity} from 'react-native';
import Text from '~/components/Text';

import {Container} from './styles';

const Profile = ({navigation, route}) => {
  const {userName} = route.params;
  console.log({userName});
  const handleNavigation = () => navigation.push('profile');
  const handleUpdateParams = () =>
    navigation.setParams({
      userName: 'pablohdev',
    });
  const handleNavigateToHome = () =>
    navigation.navigate('home', {
      selectedUser: 'pablohdev',
    });

  return (
    <Container>
      <TouchableOpacity onPress={handleNavigation}>
        <Text>{`Profile: ${userName}`}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleUpdateParams}>
        <Text>Update params</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleNavigateToHome}>
        <Text>Navigate to Home with params</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Profile;
