import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '~/screen/Profile';
import Post from '~/screen/Post';

const Stack = createNativeStackNavigator();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="perfil">
      <Stack.Screen name="perfil" component={Profile} />
      <Stack.Screen name="post" component={Post} />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
