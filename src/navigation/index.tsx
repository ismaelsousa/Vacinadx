import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '~/screen/Home';
import Profile from '~/screen/Profile';

const Stack = createNativeStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  );
};

export default Routes;
